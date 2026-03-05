'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'klinecharts';
import { useBacktesting } from '../lib/useBacktesting';
import { generateData } from '../lib/data';
import { BacktestingHeader } from './BacktestingHeader';
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
import { ToolbarButton } from './ToolbarButton';

// Drawing tools configuration
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
  const chartInstance = useRef<Chart | null>(null);
  const [activeTool, setActiveTool] = useState('cursor');

  // Initialize with some data
  const [allData] = useState(() => generateData(1000));
  const {
    visibleData,
    nextCandle,
    prevCandle,
    play,
    pause,
    stop,
    isPlaying,
    speed,
    setSpeed
  } = useBacktesting(allData);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.applyNewData(visibleData);
    }
  }, [visibleData]);

  const handleToolClick = (toolId: string) => {
    setActiveTool(toolId);
    if (chartInstance.current) {
      if (toolId === 'cursor') {
      } else {
        chartInstance.current.createOverlay({
          name: toolId,
        });
      }
    }
  };

  const handleClear = () => {
    if (chartInstance.current) {
      chartInstance.current.removeOverlay();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#131722] overflow-hidden">
      <BacktestingHeader
        onNext={nextCandle}
        onPrev={prevCandle}
        onPlay={play}
        onPause={pause}
        onStop={stop}
        isPlaying={isPlaying}
        speed={speed}
        onSpeedChange={setSpeed}
      />

      <div className="flex flex-1 overflow-hidden gap-2 py-2">
        <div className="w-12 border-right border-gray-800 flex flex-col items-center py-4 gap-4 bg-[#131722]">
          {DRAWING_TOOLS.map((tool) => (
            <ToolbarButton
              key={tool.id}
              onClick={() => handleToolClick(tool.id)}
              active={activeTool === tool.id}
              title={tool.name}
              className='cursor-pointer'
            >
              {tool.icon}
            </ToolbarButton>
          ))}
          <div className="h-px w-8 bg-gray-800 my-2" />
          <ToolbarButton onClick={handleClear} title="Clear All">
            <Trash2 className="w-4 h-4 text-red-500" />
          </ToolbarButton>
          <div className="mt-auto mb-4">
            <ToolbarButton title="Full Screen">
              <Maximize2 className="w-4 h-4" />
            </ToolbarButton>
          </div>
        </div>

        <div>
          this is where chart will shown up
        </div>
      </div>
    </div>
  );
}