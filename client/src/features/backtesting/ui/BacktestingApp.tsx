'use client';

import {
  BacktestingHeader
} from './BacktestingHeader';
import {
  MousePointer2,
  Slash,
  TrendingUp,
  Minus,
  Square,
  Hash,
  Type,
  Trash2,
  Maximize2
} from 'lucide-react';

import {
  useEffect,
  useState,
} from 'react';
import {
  init,
  dispose,
  CandleType,
} from "klinecharts";

const DRAWING_TOOLS = [
  { id: 'cursor', icon: <MousePointer2 className="w-4 h-4" />, name: 'Cursor' },
  { id: 'segment', icon: <Slash className="w-4 h-4" />, name: 'Segment' },
  { id: 'rayLine', icon: <TrendingUp className="w-4 h-4" />, name: 'Ray Line' },
  { id: 'priceLine', icon: <Minus className="w-4 h-4" />, name: 'Price Line' },
  { id: 'fibonacciLine', icon: <Hash className="w-4 h-4" />, name: 'Fibonacci' },
  { id: 'rectangle', icon: <Square className="w-4 h-4" />, name: 'Rectangle' },
  { id: 'text', icon: <Type className="w-4 h-4" />, name: 'Text' },
];

export default function BacktestingApp() {
  const [chartData, setChartData] = useState<any>(null);
  const handleChangeTimeFrame = (chart: any, newData: { timestamp: number, open: number, low: number, high: number, close: number, volume: number }[]) => {
    chart.applyNewData(newData);
    console.log('newData: ', newData);
  };

  useEffect(() => {
    const chart = init('chart');
    setChartData(chart);

    chart?.applyNewData([
      { timestamp: 1517846400000, open: 7424.6, high: 7511.3, low: 6032.3, close: 7310.1, volume: 224461 },
      { timestamp: 1517932800000, open: 7310.1, high: 8499.9, low: 6810, close: 8165.4, volume: 148807 },
      { timestamp: 1518019200000, open: 8166.7, high: 8700.8, low: 7400, close: 8245.1, volume: 24467 },
      { timestamp: 1518105600000, open: 8244, high: 8494, low: 7760, close: 8364, volume: 29834 },
      { timestamp: 1518192000000, open: 8363.6, high: 9036.7, low: 8269.8, close: 8311.9, volume: 28203 }
    ]);

    chart?.setStyles({
      candle: {
        type: CandleType.CandleSolid,
        bar: {
          upColor: '#2DC08E',
          downColor: '#F92855',
          noChangeColor: '#888888',
          upBorderColor: '#2DC08E',
          downBorderColor: '#F92855',
          noChangeBorderColor: '#888888',
          upWickColor: '#2DC08E',
          downWickColor: '#F92855',
          noChangeWickColor: '#888888'
        },
      },
      grid: {
        show: false,
      },
    });

    return () => {
      dispose('chart');
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#131722] overflow-hidden">
      <BacktestingHeader handleChangeTimeFrame={handleChangeTimeFrame} chart={chartData} />

      <div className="flex flex-1 overflow-hidden gap-2 py-2">
        <div className="w-12 border-right border-gray-800 flex flex-col items-center py-4 gap-4 bg-[#131722]">
          {DRAWING_TOOLS.map((tool) => (
            <h1 key={tool.id}>{tool.icon}</h1>
          ))}
          <div className="h-px w-8 bg-gray-800 my-2" />
          <button onClick={() => { }} title="Clear All">
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
          <div className="mt-auto mb-4">
            <button title="Full Screen">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div id='chart' className='w-full h-full'></div>
      </div>
    </div >
  );
}