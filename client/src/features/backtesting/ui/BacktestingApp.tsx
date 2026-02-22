'use client';

import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  init,
  dispose,
  Chart,
  CandleType
} from 'klinecharts';
import { Button } from '@/shared/ui/button';
import {
  ArrowLeft,
  Play,
  Pause,
  FastForward,
  LayoutDashboard,
  Maximize2,
  Minimize2,
  Crosshair,
  PenTool,
  Trash2,
  MousePointer2,
  MoveHorizontal,
  TrendingUp as TrendLineIcon,
  AlignEndHorizontal,
  ChevronUp,
} from 'lucide-react';
import Link from 'next/link';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  BASIC_SEGMENT,
  BASIC_FIBONACCI,
  BASIC_PRICE,
  BASIC_RAY,
  generateData,
} from '../lib/data';
import ToolbarButton from './ToolbarButton';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
    },
    background: {
      paper: '#0d1117',
      default: '#090b0e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontSize: '10px',
            height: '24px',
            backgroundColor: 'transparent',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6',
            },
          },
          '& .MuiInputBase-input': {
            padding: '4px 8px',
            color: '#94a3b8',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          },
          '& .MuiInputAdornment-root .MuiIconButton-root': {
            color: '#94a3b8',
            padding: '2px',
            '& svg': {
              width: '14px',
              height: '14px',
            },
          },
        },
      },
    },
  },
});

export const BacktestingApp = ({ id }: { id: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);

  const [timeframe, setTimeframe] = useState<string>('5M');
  const [historicalData, setHistoricalData] = useState(() =>
    generateData(2000, '5M'),
  );
  const [currentIndex, setCurrentIndex] = useState<number>(200);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // Trading state
  const [balance, setBalance] = useState(10000.0);
  const [positions, setPositions] = useState<any[]>([]);
  const [pendingOrders, setPendingOrders] = useState<any[]>([]);

  // Form state
  const [lotSize, setLotSize] = useState('1.00');
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT' | 'STOP'>(
    'MARKET',
  );
  const [targetPrice, setTargetPrice] = useState('');

  const currentCandle = historicalData[currentIndex - 1] || historicalData[0];
  const currentPrice = currentCandle.close;

  // Full screen state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const appContainerRef = useRef<HTMLDivElement>(null);

  // Register basic overlays once properly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('klinecharts').then(({ registerOverlay }) => {
        try {
          registerOverlay(BASIC_SEGMENT);
          registerOverlay(BASIC_RAY);
          registerOverlay(BASIC_PRICE);
          registerOverlay(BASIC_FIBONACCI);
        } catch (e) {
          // Ignore registration errors if already registered
        }
      });
    }
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      appContainerRef.current?.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Calculate current PnL from open positions
  const openPnL = positions.reduce((total, pos) => {
    const diff =
      pos.type === 'BUY'
        ? currentPrice - pos.entryPrice
        : pos.entryPrice - currentPrice;
    return total + diff * 100000 * pos.lotSize;
  }, 0);

  const equity = balance + openPnL;

  const changeTimeframe = (newTf: string) => {
    setTimeframe(newTf);
    const newData = generateData(2000, newTf);
    setHistoricalData(newData);
    setCurrentIndex(200);
    setIsPlaying(false);
    if (chartRef.current) {
      chartRef.current.applyNewData(newData.slice(0, 200));
    }
  };

  useEffect(() => {
    if (!isMounted || !chartContainerRef.current) return;

    const chart = init(chartContainerRef.current, {
      styles: {
        grid: {
          horizontal: { color: 'rgba(255, 255, 255, 0.05)' },
          vertical: { color: 'rgba(255, 255, 255, 0.05)' },
        },
        candle: {
          type: CandleType.CandleSolid,
          bar: {
            upColor: '#10b981',
            downColor: '#f43f5e',
            noChangeColor: '#888888',
            upBorderColor: '#10b981',
            downBorderColor: '#f43f5e',
            noChangeBorderColor: '#888888',
            upWickColor: '#10b981',
            downWickColor: '#f43f5e',
            noChangeWickColor: '#888888',
          },
        },
        xAxis: {
          tickText: { color: '#8b949e' },
          axisLine: { color: 'rgba(255, 255, 255, 0.1)' },
        },
        yAxis: {
          tickText: { color: '#8b949e' },
          axisLine: { color: 'rgba(255, 255, 255, 0.1)' },
        },
        crosshair: {
          horizontal: { line: { color: 'rgba(255, 255, 255, 0.5)' } },
          vertical: { line: { color: 'rgba(255, 255, 255, 0.5)' } },
        },
      },
    });

    if (chart) {
      chartRef.current = chart;
      chart.applyNewData(historicalData.slice(0, currentIndex));
      chart.setPriceVolumePrecision(5, 0);
    }

    const handleResize = () => {
      chart?.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartContainerRef.current) {
        dispose(chartContainerRef.current);
      }
    };
  }, [isMounted]);

  // Playback loop
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isPlaying && currentIndex < historicalData.length) {
      const delay = 1000 / speedMultiplier;
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIdx = prev + 1;
          if (nextIdx > historicalData.length) {
            setIsPlaying(false);
            return prev;
          }
          if (chartRef.current) {
            const newCandle = historicalData[nextIdx - 1];

            chartRef.current.updateData(newCandle);

            setPendingOrders((currentOrders) => {
              const remainingOrders = [];
              const newPositions: {
                type: string;
                entryPrice: number;
                lotSize: number;
              }[] = [];

              for (const o of currentOrders) {
                let executed = false;
                if (
                  o.type.includes('BUY LIMIT') &&
                  newCandle.low <= o.targetPrice
                ) {
                  executed = true;
                } else if (
                  o.type.includes('SELL LIMIT') &&
                  newCandle.high >= o.targetPrice
                ) {
                  executed = true;
                } else if (
                  o.type.includes('BUY STOP') &&
                  newCandle.high >= o.targetPrice
                ) {
                  executed = true;
                } else if (
                  o.type.includes('SELL STOP') &&
                  newCandle.low <= o.targetPrice
                ) {
                  executed = true;
                }

                if (executed) {
                  newPositions.push({
                    type: o.type.includes('BUY') ? 'BUY' : 'SELL',
                    entryPrice: o.targetPrice,
                    lotSize: o.lotSize,
                  });
                } else {
                  remainingOrders.push(o);
                }
              }

              if (newPositions.length > 0) {
                setPositions((p) => [...p, ...newPositions]);
              }

              return remainingOrders;
            });
          }
          return nextIdx;
        });
      }, delay);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, speedMultiplier, currentIndex, historicalData]);

  const handleBuy = () => {
    const size = parseFloat(lotSize) || 1;
    if (orderType === 'MARKET') {
      setPositions([
        ...positions,
        { type: 'BUY', entryPrice: currentPrice, lotSize: size },
      ]);
    } else {
      const target = parseFloat(targetPrice);
      if (!target) return;
      setPendingOrders([
        ...pendingOrders,
        { type: `BUY ${orderType}`, targetPrice: target, lotSize: size },
      ]);
      setTargetPrice('');
    }
  };

  const handleSell = () => {
    const size = parseFloat(lotSize) || 1;
    if (orderType === 'MARKET') {
      setPositions([
        ...positions,
        { type: 'SELL', entryPrice: currentPrice, lotSize: size },
      ]);
    } else {
      const target = parseFloat(targetPrice);
      if (!target) return;
      setPendingOrders([
        ...pendingOrders,
        { type: `SELL ${orderType}`, targetPrice: target, lotSize: size },
      ]);
      setTargetPrice('');
    }
  };

  const closeAllPositions = () => {
    setBalance((prev) => prev + openPnL);
    setPositions([]);
  };

  const cancelAllPending = () => {
    setPendingOrders([]);
  };

  const createOverlay = (name: string) => {
    if (chartRef.current) {
      chartRef.current.createOverlay(name);
    }
  };

  const clearOverlays = () => {
    if (chartRef.current) {
      chartRef.current.removeOverlay();
    }
  };

  if (!isMounted) {
    return <div className="h-screen w-full bg-[#0d1117]" />;
  }

  return (
    <div
      ref={appContainerRef}
      className="h-screen w-full bg-[#0d1117] flex flex-col overflow-hidden text-white font-sans"
    >
      <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-[#0d1117] shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href={`/dashboard/sessions/${id}`}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <ArrowLeft className="size-5 text-muted-foreground" />
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="font-black tracking-tight">EUR/USD</span>
            <select
              value={timeframe}
              onChange={(e) => changeTimeframe(e.target.value)}
              className="text-xs font-bold text-muted-foreground bg-white/5 px-2 py-1 rounded border-none outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors"
            >
              <option value="1M">1M</option>
              <option value="5M">5M</option>
              <option value="15M">15M</option>
              <option value="1H">1H</option>
              <option value="4H">4H</option>
              <option value="1D">1D</option>
            </select>
          </div>
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="flex text-xs font-mono text-muted-foreground gap-3">
            <span>
              O:{' '}
              <span className="text-white">
                {currentCandle.open.toFixed(5)}
              </span>
            </span>
            <span>
              H:{' '}
              <span className="text-emerald-500">
                {currentCandle.high.toFixed(5)}
              </span>
            </span>
            <span>
              L:{' '}
              <span className="text-rose-500">
                {currentCandle.low.toFixed(5)}
              </span>
            </span>
            <span>
              C:{' '}
              <span className="text-white">
                {currentCandle.close.toFixed(5)}
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/5 text-muted-foreground rounded-lg"
          >
            <Crosshair className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/5 text-muted-foreground rounded-lg"
          >
            <LayoutDashboard className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/5 text-muted-foreground rounded-lg"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 className="size-4" />
            ) : (
              <Maximize2 className="size-4" />
            )}
          </Button>
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="flex items-center bg-white/5 rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 rounded ${!isPlaying ? 'bg-white/10 text-white' : 'hover:bg-white/10 text-muted-foreground'}`}
              onClick={() => setIsPlaying(false)}
            >
              <Pause className="size-3 fill-current" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 rounded ${isPlaying && speedMultiplier === 1 ? 'bg-primary text-white' : 'hover:bg-primary text-primary hover:text-white'} transition-colors`}
              onClick={() => {
                setIsPlaying(true);
                setSpeedMultiplier(1);
              }}
            >
              <Play className="size-3 fill-current" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 rounded ${isPlaying && speedMultiplier > 1 ? 'bg-primary text-white' : 'hover:bg-white/10 text-muted-foreground'}`}
              onClick={() => {
                setIsPlaying(true);
                setSpeedMultiplier(4);
              }}
            >
              <FastForward className="size-3 fill-current" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-12 border-r border-white/5 bg-[#0d1117] flex flex-col items-center py-2 gap-2 shrink-0 z-10">
          <ToolbarButton
            icon={MousePointer2}
            tooltip="Cursor"
            onClick={() => { }}
            active
          />
          <div className="w-6 h-px bg-white/10 my-1" />
          <ToolbarButton
            icon={TrendLineIcon}
            tooltip="Trend Line"
            onClick={() => createOverlay('rayLine')}
          />
          <ToolbarButton
            icon={MoveHorizontal}
            tooltip="Horizontal Line"
            onClick={() => createOverlay('priceLine')}
          />
          <ToolbarButton
            icon={AlignEndHorizontal}
            tooltip="Fibonacci"
            onClick={() => createOverlay('fibonacciLine')}
          />
          <ToolbarButton
            icon={PenTool}
            tooltip="Segment"
            onClick={() => createOverlay('segment')}
          />
          <div className="w-6 h-px bg-white/10 my-1" />
          <ToolbarButton
            icon={Trash2}
            tooltip="Clear All"
            onClick={clearOverlays}
            isDanger
          />
        </aside>

        <div className="flex-1 relative bg-[#090b0e] cursor-crosshair">
          <div ref={chartContainerRef} className="absolute inset-0" />
        </div>
      </div>

      <footer className="relative px-12 h-8 border-t border-white/5 bg-[#0d1117] flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
        <ThemeProvider theme={darkTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-muted-foreground font-bold whitespace-nowrap opacity-80">
                VAQTGA O&apos;TISH:
              </span>
              <div className="bg-white/5 rounded-md px-2 flex items-center">
                <DatePicker
                  slotProps={{
                    textField: {
                      variant: 'standard',
                      fullWidth: false,
                      InputProps: {
                        disableUnderline: true,
                        sx: {
                          fontSize: '10px',
                          color: '#fff',
                          fontWeight: 'bold',
                          width: '100px',
                          '& .MuiInputBase-input': {
                            padding: '4px 0',
                            textAlign: 'center',
                          },
                          '& .MuiInputAdornment-root': {
                            marginLeft: '2px',
                          },
                          '& .MuiIconButton-root': {
                            padding: '2px',
                            color: 'rgba(255,255,255,0.5)',
                            '& svg': {
                              width: '14px',
                              height: '14px',
                            },
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </LocalizationProvider>
        </ThemeProvider>
        <div>
          <ChevronUp className="size-4" />
        </div>
      </footer>
    </div>
  );
};
