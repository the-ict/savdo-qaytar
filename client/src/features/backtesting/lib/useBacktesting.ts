import { useState, useEffect, useCallback, useRef } from 'react';

export interface CandleData {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export function useBacktesting(allData: CandleData[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000); // ms per candle
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const visibleData = allData.slice(0, currentIndex + 1);

    const nextCandle = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, allData.length - 1));
    }, [allData.length]);

    const prevCandle = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const play = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const pause = useCallback(() => {
        setIsPlaying(false);
    }, []);

    const stop = useCallback(() => {
        setIsPlaying(false);
        setCurrentIndex(0);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                if (currentIndex < allData.length - 1) {
                    nextCandle();
                } else {
                    setIsPlaying(false);
                }
            }, speed);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, currentIndex, allData.length, nextCandle, speed]);

    return {
        visibleData,
        currentIndex,
        isPlaying,
        speed,
        setSpeed,
        nextCandle,
        prevCandle,
        play,
        pause,
        stop,
        setCurrentIndex,
    };
}
