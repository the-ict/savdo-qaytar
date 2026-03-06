"use client";

import React from 'react'
import {
    useEffect,
} from 'react';
import {
    init,
    dispose,
    CandleType,
} from "klinecharts";


export default function BacktestingChart() {
    useEffect(() => {
        const chart = init('chart');

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
            xAxis: {
                show: false,
            }
        });

        return () => {
            dispose('chart');
        };
    }, [])
    return (
        <div id='chart' className='w-full h-full'></div>
    )
};