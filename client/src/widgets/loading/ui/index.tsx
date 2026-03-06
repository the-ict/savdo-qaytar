"use client";

import React from 'react';

export default function Loader() {
    const gradientId = React.useId()

    return (
        <div className='flex items-center justify-center h-full w-full min-h-[200px]'>
            <div className='relative flex flex-col items-center gap-6 p-10 rounded-2xl glass dark:glass-dark shadow-2xl'>
                <div className='absolute inset-0 bg-primary/5 blur-3xl rounded-full' />

                <div className='relative w-16 h-16'>
                    <svg className='absolute inset-0 w-full h-full' viewBox='0 0 50 50'>
                        <circle
                            className='stroke-muted/20'
                            cx='25' cy='25' r='20'
                            fill='none' strokeWidth='4'
                        />
                    </svg>

                    <svg
                        className='absolute inset-0 w-full h-full animate-spin'
                        viewBox='0 0 50 50'
                        style={{ animationDuration: '1s' }}
                    >
                        <defs>
                            <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
                                <stop offset='0%' stopColor='var(--primary)' />
                                <stop offset='100%' stopColor='#2563eb' />
                            </linearGradient>
                        </defs>
                        <circle
                            cx='25' cy='25' r='20'
                            fill='none'
                            stroke={`url(#${gradientId})`}
                            strokeWidth='4'
                            strokeLinecap='round'
                            strokeDasharray='80, 200'
                        />
                    </svg>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]' />
                    </div>
                </div>

                <div className='relative flex flex-col items-center gap-1'>
                    <span className='text-lg font-semibold tracking-tight text-foreground/90'>
                        Loading...
                    </span>
                    <span className='text-xs text-muted-foreground font-medium uppercase tracking-widest'>
                        FX Replay
                    </span>
                </div>
            </div>
        </div>
    )
}
;
