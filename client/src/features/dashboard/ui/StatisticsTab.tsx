'use client';

import React from 'react';
import {
    TrendingUp,
    TrendingDown,
    BarChart3,
    Target,
    Zap,
    Activity
} from 'lucide-react';

const stats = [
    { label: 'Umumiy foyda', value: '+$12,450.00', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Win Rate', value: '68.5%', icon: Target, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Profit Factor', value: '2.4', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Max Drawdown', value: '4.2%', icon: TrendingDown, color: 'text-rose-500', bg: 'bg-rose-500/10' },
];

export const StatisticsTab = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <div key={i} className="p-6 glass-dark border-white/5 hover:border-primary/20 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className={`size-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="size-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                                <p className="text-2xl font-black text-white mt-1">{item.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-8 glass-dark border-white/5 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 premium-gradient opacity-5" />
                <div className="text-center relative z-10">
                    <BarChart3 className="size-16 text-muted/20 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Equity Curve</h3>
                    <p className="text-muted-foreground">Grafik ma'lumotlari tez orada paydo bo'ladi...</p>
                </div>
                {/* Abstract Chart Shape for visual interest */}
                <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C20,80 40,90 60,40 C80,20 90,30 100,0 L100,100 L0,100 Z" fill="currentColor" className="text-primary" />
                </svg>
            </div>
        </div>
    );
};
