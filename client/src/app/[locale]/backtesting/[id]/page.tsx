'use client';

import React from 'react';
import { BacktestingApp } from '@/features/backtesting/ui/BacktestingApp';
import { useParams } from 'next/navigation';

export default function BacktestingPage() {
    const params = useParams();
    const id = params.id as string;

    return (
        <BacktestingApp id={id || '1'} />
    );
}
