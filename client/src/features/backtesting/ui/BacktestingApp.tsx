'use client';

import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import {
    createChart,
    ColorType,
    CrosshairMode,
    IChartApi,
    ISeriesApi
} from 'lightweight-charts';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
    ArrowLeft,
    Play,
    Pause,
    FastForward,
    Settings,
    LayoutDashboard,
    Maximize2,
    Minimize2,
    Crosshair
} from 'lucide-react';
import Link from 'next/link';

// Generate realistic-looking mock OHLC data
const generateData = (count = 500) => {
    let basePrice = 1.0850;
    const data = [];
    const now = new Date();
    // Start `count` periods ago
    for (let i = count; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 5 * 60 * 1000); // 5m timeframe
        const vol = Math.random() * 0.0020;
        const open = basePrice;
        const high = open + Math.random() * vol;
        const low = open - Math.random() * vol;
        const close = Math.random() > 0.5 ? low + Math.random() * (high - low) : high - Math.random() * (high - low);

        data.push({
            time: time.getTime() / 1000 as any,
            open: parseFloat(open.toFixed(5)),
            high: parseFloat(high.toFixed(5)),
            low: parseFloat(low.toFixed(5)),
            close: parseFloat(close.toFixed(5))
        });
        basePrice = close;
    }
    return data;
};

export const BacktestingApp = ({ id }: { id: string }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

    const [historicalData] = useState(() => generateData(1000));
    const [currentIndex, setCurrentIndex] = useState(200); // Start showing 200 candles

    // Playback state
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedMultiplier, setSpeedMultiplier] = useState(1);

    // Trading state
    const [balance, setBalance] = useState(10000.00);
    const [positions, setPositions] = useState<any[]>([]);
    const [pendingOrders, setPendingOrders] = useState<any[]>([]);

    // Form state
    const [lotSize, setLotSize] = useState("1.00");
    const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT' | 'STOP'>('MARKET');
    const [targetPrice, setTargetPrice] = useState("");

    const currentCandle = historicalData[currentIndex - 1] || historicalData[0];
    const currentPrice = currentCandle.close;

    // Full screen state
    const [isFullscreen, setIsFullscreen] = useState(false);
    const appContainerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            appContainerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
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
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Calculate current PnL from open positions
    const openPnL = positions.reduce((total, pos) => {
        const diff = pos.type === 'BUY' ? currentPrice - pos.entryPrice : pos.entryPrice - currentPrice;
        // Approximation: 1 standard lot (100k) pip value = $10. Or roughly diff * 100000.
        return total + (diff * 100000 * pos.lotSize);
    }, 0);

    const equity = balance + openPnL;

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            if (chartRef.current && chartContainerRef.current) {
                chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: '#0d1117' },
                textColor: '#8b949e',
            },
            grid: {
                vertLines: { color: 'rgba(255, 255, 255, 0.05)' },
                horzLines: { color: 'rgba(255, 255, 255, 0.05)' },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            rightPriceScale: {
                borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            timeScale: {
                borderColor: 'rgba(255, 255, 255, 0.1)',
                timeVisible: true,
                secondsVisible: false,
            },
        });
        chartRef.current = chart;

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#10b981',
            downColor: '#f43f5e',
            borderVisible: false,
            wickUpColor: '#10b981',
            wickDownColor: '#f43f5e',
        });
        seriesRef.current = candlestickSeries;

        candlestickSeries.setData(historicalData.slice(0, currentIndex));

        chart.subscribeCrosshairMove((param) => {
            if (chartContainerRef.current) {
                if (param.point && param.seriesData.get(candlestickSeries)) {
                    chartContainerRef.current.style.cursor = 'pointer';
                } else {
                    chartContainerRef.current.style.cursor = 'crosshair';
                }
            }
        });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, []);

    // Playback loop
    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isPlaying && currentIndex < historicalData.length) {
            const delay = 1000 / speedMultiplier;
            intervalId = setInterval(() => {
                setCurrentIndex(prev => {
                    const nextIdx = prev + 1;
                    if (nextIdx > historicalData.length) {
                        setIsPlaying(false);
                        return prev;
                    }
                    if (seriesRef.current) {
                        const newCandle = historicalData[nextIdx - 1];
                        seriesRef.current.update(newCandle);

                        // Check pending orders
                        setPendingOrders(currentOrders => {
                            const remainingOrders = [];
                            const newPositions: { type: string, entryPrice: number, lotSize: number }[] = [];

                            for (const o of currentOrders) {
                                let executed = false;
                                if (o.type.includes('BUY LIMIT') && newCandle.low <= o.targetPrice) {
                                    executed = true;
                                } else if (o.type.includes('SELL LIMIT') && newCandle.high >= o.targetPrice) {
                                    executed = true;
                                } else if (o.type.includes('BUY STOP') && newCandle.high >= o.targetPrice) {
                                    executed = true;
                                } else if (o.type.includes('SELL STOP') && newCandle.low <= o.targetPrice) {
                                    executed = true;
                                }

                                if (executed) {
                                    newPositions.push({
                                        type: o.type.includes('BUY') ? 'BUY' : 'SELL',
                                        entryPrice: o.targetPrice,
                                        lotSize: o.lotSize
                                    });
                                } else {
                                    remainingOrders.push(o);
                                }
                            }

                            if (newPositions.length > 0) {
                                setPositions(p => [...p, ...newPositions]);
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
            setPositions([...positions, { type: 'BUY', entryPrice: currentPrice, lotSize: size }]);
        } else {
            const target = parseFloat(targetPrice);
            if (!target) return;
            setPendingOrders([...pendingOrders, { type: `BUY ${orderType}`, targetPrice: target, lotSize: size }]);
            setTargetPrice(""); // clear after placement
        }
    };

    const handleSell = () => {
        const size = parseFloat(lotSize) || 1;
        if (orderType === 'MARKET') {
            setPositions([...positions, { type: 'SELL', entryPrice: currentPrice, lotSize: size }]);
        } else {
            const target = parseFloat(targetPrice);
            if (!target) return;
            setPendingOrders([...pendingOrders, { type: `SELL ${orderType}`, targetPrice: target, lotSize: size }]);
            setTargetPrice(""); // clear after placement
        }
    };

    const closeAllPositions = () => {
        setBalance(prev => prev + openPnL);
        setPositions([]);
    };

    const cancelAllPending = () => {
        setPendingOrders([]);
    };

    return (
        <div ref={appContainerRef} className="h-screen w-full bg-[#0d1117] flex flex-col overflow-hidden text-white font-sans">
            {/* Top Toolbar */}
            <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-[#0d1117] shrink-0">
                <div className="flex items-center gap-4">
                    <Link href={`/dashboard/sessions/${id}`} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ArrowLeft className="size-5 text-muted-foreground" />
                    </Link>
                    <div className="h-4 w-px bg-white/10" />
                    <div className="flex items-center gap-2">
                        <span className="font-black tracking-tight">EUR/USD</span>
                        <span className="text-xs font-bold text-muted-foreground bg-white/5 px-2 py-0.5 rounded">5M</span>
                    </div>
                    <div className="h-4 w-px bg-white/10 mx-2" />
                    <div className="flex text-xs font-mono text-muted-foreground gap-3">
                        <span>O: <span className="text-white">{currentCandle.open.toFixed(5)}</span></span>
                        <span>H: <span className="text-emerald-500">{currentCandle.high.toFixed(5)}</span></span>
                        <span>L: <span className="text-rose-500">{currentCandle.low.toFixed(5)}</span></span>
                        <span>C: <span className="text-white">{currentCandle.close.toFixed(5)}</span></span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-white/5 text-muted-foreground rounded-lg">
                        <Crosshair className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-white/5 text-muted-foreground rounded-lg">
                        <LayoutDashboard className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-white/5 text-muted-foreground rounded-lg" onClick={toggleFullscreen}>
                        {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
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
                            onClick={() => { setIsPlaying(true); setSpeedMultiplier(1); }}
                        >
                            <Play className="size-3 fill-current" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`h-7 w-7 rounded ${isPlaying && speedMultiplier > 1 ? 'bg-primary text-white' : 'hover:bg-white/10 text-muted-foreground'}`}
                            onClick={() => { setIsPlaying(true); setSpeedMultiplier(4); }}
                        >
                            <FastForward className="size-3 fill-current" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Area */}
            <div className="flex flex-1 overflow-hidden">

                {/* Chart Container */}
                <div className="flex-1 relative bg-[#090b0e] cursor-crosshair">
                    <div ref={chartContainerRef} className="absolute inset-0" />
                </div>

                {/* Trading Sidebar */}
                <aside className="w-[320px] border-l border-white/5 bg-[#0d1117] flex flex-col shrink-0">
                    <div className="p-4 border-b border-white/5 font-bold uppercase tracking-widest text-xs flex justify-between items-center text-muted-foreground">
                        Yangi Buyurtma
                        <Settings className="size-4" />
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto space-y-6">

                        {/* Order Type */}
                        <div className="bg-white/5 p-1 rounded-xl flex gap-1">
                            <button
                                onClick={() => setOrderType('MARKET')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${orderType === 'MARKET' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}
                            >
                                Market
                            </button>
                            <button
                                onClick={() => setOrderType('LIMIT')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${orderType === 'LIMIT' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}
                            >
                                Limit
                            </button>
                            <button
                                onClick={() => setOrderType('STOP')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${orderType === 'STOP' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'}`}
                            >
                                Stop
                            </button>
                        </div>

                        {/* Order Form */}
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex justify-between">
                                    <span>Hajmi (Lot)</span>
                                    <span>Loverage: 1:100</span>
                                </label>
                                <Input
                                    type="number"
                                    value={lotSize}
                                    onChange={(e) => setLotSize(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white text-lg h-12 rounded-xl text-center font-mono"
                                />
                            </div>

                            {orderType !== 'MARKET' && (
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex justify-between">
                                        <span>Target Price</span>
                                    </label>
                                    <Input
                                        type="number"
                                        value={targetPrice}
                                        onChange={(e) => setTargetPrice(e.target.value)}
                                        placeholder={currentPrice.toFixed(5)}
                                        className="bg-white/5 border-white/10 text-emerald-400 text-lg h-12 rounded-xl text-center font-mono focus-visible:ring-emerald-500"
                                    />
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Stop Loss</label>
                                    <Input type="number" placeholder="Pips" className="bg-white/5 border-white/10 text-white h-10 rounded-xl" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Take Profit</label>
                                    <Input type="number" placeholder="Pips" className="bg-white/5 border-white/10 text-white h-10 rounded-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Buy/Sell Buttons */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button
                                onClick={handleSell}
                                className="h-14 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 flex flex-col gap-0.5 group"
                            >
                                <span className="text-[10px] uppercase tracking-widest font-black opacity-80 group-hover:opacity-100">
                                    Sell {orderType !== 'MARKET' ? orderType : 'By Market'}
                                </span>
                                <span className="font-mono font-bold text-lg">{orderType !== 'MARKET' ? (targetPrice || '0.00000') : currentPrice.toFixed(5)}</span>
                            </Button>
                            <Button
                                onClick={handleBuy}
                                className="h-14 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 flex flex-col gap-0.5 group"
                            >
                                <span className="text-[10px] uppercase tracking-widest font-black opacity-80 group-hover:opacity-100">
                                    Buy {orderType !== 'MARKET' ? orderType : 'By Market'}
                                </span>
                                <span className="font-mono font-bold text-lg">{orderType !== 'MARKET' ? (targetPrice || '0.00000') : (currentPrice + 0.00002).toFixed(5)}</span>
                            </Button>
                        </div>

                        {/* Position Tracking Section */}
                        <div className="space-y-4">
                            {/* Open Positions Info */}
                            {positions.length > 0 && (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Open Positions ({positions.length})</span>
                                        <Button variant="ghost" size="sm" onClick={closeAllPositions} className="h-6 text-[10px] text-rose-500 hover:text-rose-400 hover:bg-rose-500/10">Close All</Button>
                                    </div>
                                    <div className="space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                        {positions.map((pos, i) => (
                                            <div key={i} className="bg-white/5 border border-white/5 p-2 rounded-lg flex justify-between items-center text-xs">
                                                <span className={`font-bold ${pos.type === 'BUY' ? 'text-emerald-500' : 'text-rose-500'}`}>{pos.type} {pos.lotSize}</span>
                                                <span className="font-mono text-muted-foreground">{pos.entryPrice.toFixed(5)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Pending Orders Info */}
                            {pendingOrders.length > 0 && (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">Pending Orders ({pendingOrders.length})</span>
                                        <Button variant="ghost" size="sm" onClick={cancelAllPending} className="h-6 text-[10px] text-muted-foreground hover:text-white hover:bg-white/10">Cancel All</Button>
                                    </div>
                                    <div className="space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                        {pendingOrders.map((pos, i) => (
                                            <div key={i} className="bg-white/5 border border-white/5 p-2 rounded-lg flex justify-between items-center text-xs opacity-70">
                                                <span className={`font-bold ${pos.type.includes('BUY') ? 'text-emerald-500' : 'text-rose-500'}`}>{pos.type} {pos.lotSize}</span>
                                                <span className="font-mono text-muted-foreground">@ {pos.targetPrice.toFixed(5)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Session Balances */}
                        <div className="pt-6 border-t border-white/5 space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground font-medium text-xs">Balans</span>
                                <span className="font-mono font-bold text-white">${balance.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground font-medium text-xs">Equity</span>
                                <span className={`font-mono font-bold ${openPnL > 0 ? 'text-emerald-500' : openPnL < 0 ? 'text-rose-500' : 'text-white'}`}>
                                    ${equity.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground font-medium text-xs">Open PnL</span>
                                <span className={`font-mono font-bold flex items-center gap-1 ${openPnL > 0 ? 'text-emerald-500' : openPnL < 0 ? 'text-rose-500' : 'text-white'}`}>
                                    {openPnL > 0 ? '+' : ''}{openPnL.toFixed(2)}
                                </span>
                            </div>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Bottom Status Bar */}
            <footer className="h-8 border-t border-white/5 bg-[#0d1117] flex items-center justify-between px-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1.5"><div className="size-1.5 rounded-full bg-emerald-500" /> Ulandis</span>
                    <span>Qaytasavdo Engine v1.0</span>
                </div>
                <div>
                    Date: 22 Feb 2024, 09:30 UTC
                </div>
            </footer>
        </div>
    );
};
