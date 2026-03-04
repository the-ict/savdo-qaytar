import React from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Square,
    Settings2
} from 'lucide-react';
import {
    ToolbarButton
} from './ToolbarButton';

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

export const BacktestingHeader: React.FC<BacktestingHeaderProps> = ({
    onPrev,
    onNext,
    onPlay,
    onPause,
    onStop,
    isPlaying,
    speed,
    onSpeedChange,
}) => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-[#131722] border-b border-gray-800 text-white">
            <div className="flex items-center gap-1">
                <h1 className="text-sm font-semibold mr-4 text-gray-400 uppercase tracking-wider">Backtesting</h1>

                <div className="h-6 w-[1px] bg-gray-800 mx-2" />

                <ToolbarButton onClick={onPrev} title="Previous Candle (Left Arrow)">
                    <ChevronLeft className="w-4 h-4" />
                </ToolbarButton>

                <ToolbarButton onClick={onNext} title="Next Candle (Right Arrow)">
                    <ChevronRight className="w-4 h-4" />
                </ToolbarButton>

                <div className="h-6 w-[1px] bg-gray-800 mx-2" />

                {isPlaying ? (
                    <ToolbarButton onClick={onPause} active title="Pause">
                        <Pause className="w-4 h-4 fill-current" />
                    </ToolbarButton>
                ) : (
                    <ToolbarButton onClick={onPlay} title="Play (Auto Skip)">
                        <Play className="w-4 h-4 fill-current" />
                    </ToolbarButton>
                )}

                <ToolbarButton onClick={onStop} title="Stop and Reset">
                    <Square className="w-4 h-4 fill-current" />
                </ToolbarButton>

                <div className="h-6 w-[1px] bg-gray-800 mx-2" />

                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md">
                    <span className="text-xs text-gray-500">Speed:</span>
                    <select
                        value={speed}
                        onChange={(e) => onSpeedChange(Number(e.target.value))}
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
                <ToolbarButton>
                    <Settings2 className="w-4 h-4" />
                </ToolbarButton>
            </div>
        </div>
    );
};
