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
  return (
    <div className="flex flex-col h-screen bg-[#131722] overflow-hidden">
      <BacktestingHeader />

      <div className="flex flex-1 overflow-hidden gap-2 py-2">
        <div className="w-12 border-right border-gray-800 flex flex-col items-center py-4 gap-4 bg-[#131722]">
          {DRAWING_TOOLS.map((tool) => (
            <h1>{tool.icon}</h1>
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

        <div>
          this is where chart will shown up
        </div>
      </div>
    </div >
  );
}