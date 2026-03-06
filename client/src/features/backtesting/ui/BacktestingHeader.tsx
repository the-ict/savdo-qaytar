"use client";

import React from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Settings2,
} from 'lucide-react';
import {
    timeFrameOptions
} from '../lib/data';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/shared/ui/select";

export const BacktestingHeader = ({ handleChangeTimeFrame, chart }: { handleChangeTimeFrame: (chart: any, newData: any) => void, chart: any }) => {
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

                <div className="h-6 w-px bg-gray-800 mx-2" onClick={() => {
                    console.log("changing state");
                    handleChangeTimeFrame(chart, [
                        { timestamp: 1518278400000, open: 8312.4, high: 8450.6, low: 7900.2, close: 8125.7, volume: 198321 },
                        { timestamp: 1518364800000, open: 8126.1, high: 8604.9, low: 8050.4, close: 8540.3, volume: 176554 },
                        { timestamp: 1518451200000, open: 8542.8, high: 8801.2, low: 8205.5, close: 8688.9, volume: 132440 },
                        { timestamp: 1518537600000, open: 8689.1, high: 9105.7, low: 8600.3, close: 9022.4, volume: 215903 },
                        { timestamp: 1518624000000, open: 9025.6, high: 9400.8, low: 8950.2, close: 9333.7, volume: 248771 }
                    ]);
                }} />

                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md border border-white/10 glass">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">TF:</span>
                    <Select onValueChange={() => {
                        console.log("hello")
                    }} defaultValue="1h" >
                        <SelectTrigger className="h-7 border-none bg-transparent hover:bg-white/5 transition-colors text-xs font-semibold min-w-[60px] shadow-none ring-0 focus:ring-0">
                            <SelectValue placeholder="Timeframe" />
                        </SelectTrigger>
                        <SelectContent className="glass-dark border-white/10">
                            {timeFrameOptions.map((option) => (
                                <SelectItem
                                    key={option.timeFrameValue}
                                    value={option.timeFrameTitle}
                                    className="text-xs focus:bg-primary/20 focus:text-primary transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center justify-between w-full gap-4">
                                        <span className='flex-1'>{option.timeFrameTitle}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
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
