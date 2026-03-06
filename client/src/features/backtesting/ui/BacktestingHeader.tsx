import React from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Settings2
} from 'lucide-react';

interface BacktestingHeaderProps {
    onPrev: () => void;
    onNext: () => void;
    onPlay: () => void;
    onPause: () => void;
    onStop: () => void;
    isPlaying: boolean;
    speed: number;
    onSpeedChange: (speed: number) => void;
};

export const BacktestingHeader = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-[#131722] border-b border-gray-800 text-white">
            <div className="flex items-center gap-1">
                <h1 className="text-sm font-semibold mr-4 text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">ORTGA</h1>

                <div className="h-6 w-px bg-gray-800 mx-2" />

                <button onClick={() => { }} title="Previous Candle (Left Arrow)" className='cursor-pointer'>
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <button onClick={() => { }} title="Next Candle (Right Arrow)" className='cursor-pointer'>
                    <ChevronRight className="w-4 h-4" />
                </button>

                <div className="h-6 w-px bg-gray-800 mx-2" />

                {false ? (
                    <button onClick={() => { }} title="Pause" className='cursor-pointer'>
                        <Pause className="w-4 h-4 fill-current" />
                    </button>
                ) : (
                    <button onClick={() => { }} title="Play (Auto Skip)" className='cursor-pointer'>
                        <Play className="w-4 h-4 fill-current" />
                    </button>
                )}

                <div className="h-6 w-px bg-gray-800 mx-2" />

                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md">
                    <span className="text-xs text-gray-500">Speed:</span>
                    <select
                        value={100}
                        onChange={(e) => { }}
                        className="bg-transparent text-xs outline-none cursor-pointer hover:text-blue-400 transition-colors"
                    >
                        <option value={2000} className="bg-[#131722]">0.5s</option>
                        <option value={1000} className="bg-[#131722]">1s</option>
                        <option value={500} className="bg-[#131722]">2s</option>
                        <option value={200} className="bg-[#131722]">5s</option>
                        <option value={100} className="bg-[#131722]">10s</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button>
                    <Settings2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
