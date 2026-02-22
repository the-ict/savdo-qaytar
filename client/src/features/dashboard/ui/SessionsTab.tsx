'use client';

import React from 'react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
    Play,
    Calendar,
    Clock,
    ArrowUpRight,
    MoreVertical,
    ChevronRight
} from 'lucide-react';

const sessions = [
    {
        id: 1,
        pair: 'EUR/USD',
        date: '22-Fevral, 2024',
        trades: 12,
        pnl: '+$450.00',
        status: 'active',
        strategy: 'ICT Matrix'
    },
    {
        id: 2,
        pair: 'GBP/JPY',
        date: '18-Fevral, 2024',
        trades: 8,
        pnl: '-$120.50',
        status: 'completed',
        strategy: 'Breakout Pro'
    },
    {
        id: 3,
        pair: 'GOLD',
        date: '15-Fevral, 2024',
        trades: 24,
        pnl: '+$2,100.00',
        status: 'completed',
        strategy: 'Scalp Hunter'
    },
];

export const SessionsTab = () => {
    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Sizning Sessiyalaringiz</h2>
                <Button className="premium-gradient text-white border-0 px-6 rounded-xl font-bold shadow-lg shadow-primary/20">
                    Yangi Sessiya
                    <Play className="ml-2 size-4 fill-current" />
                </Button>
            </div>

            <div className="grid gap-4">
                {sessions.map((session) => (
                    <Card key={session.id} className="glass-dark border-white/5 p-3 cursor-pointer hover:border-white/10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                                    <span className="text-xl font-black text-white">{session.pair.split('/')[0][0]}</span>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-white">{session.pair}</h3>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${session.status === 'active' ? 'bg-primary/20 text-primary' : 'bg-white/5 text-muted-foreground'
                                            }`}>
                                            {session.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {session.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {session.trades} trades</span>
                                        <span className="text-primary/80">Strategy: {session.strategy}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="text-right">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">PnL</p>
                                    <p className={`text-xl font-black ${session.pnl.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {session.pnl}
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon" className="rounded-xl">
                                    <ChevronRight className="size-5 text-muted-foreground" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
