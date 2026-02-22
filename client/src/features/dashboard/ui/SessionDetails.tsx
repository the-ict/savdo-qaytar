'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
  ArrowLeft,
  Play,
  Settings,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  Target,
  Activity,
  BarChart3,
} from 'lucide-react';

interface SessionDetailsProps {
  id: string;
}

// Mock data based on ID
const getSessionData = (id: string) => ({
  id,
  pair: 'EUR/USD',
  date: '22-Fevral, 2024',
  trades: 12,
  pnl: '+$450.00',
  status: 'active',
  strategy: 'ICT Matrix',
  winRate: '68.5%',
  profitFactor: '2.4',
  maxDrawdown: '4.2%',
});

export const SessionDetails = ({ id }: SessionDetailsProps) => {
  const session = getSessionData(id);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 pb-20 px-8 container mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="size-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="size-5 text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black uppercase tracking-tight">
                {session.pair}
              </h1>
              <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                {session.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium mt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" /> {session.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" /> {session.trades} trades
              </span>
              <span className="text-primary/80">
                Strategy: {session.strategy}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <Settings className="size-4 mr-2" />
            Sozlamalar
          </Button>
          <Link href={`/backtesting/${session.id}`}>
            <Button className="premium-gradient text-white border-0 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-base h-12">
              Davom Etish
              <Play className="ml-2 size-5 fill-current" />
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 glass-dark border-white/5">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <TrendingUp className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Sof Foyda
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {session.pnl}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6 glass-dark border-white/5">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Target className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Win Rate
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {session.winRate}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6 glass-dark border-white/5">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Activity className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Profit Factor
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {session.profitFactor}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6 glass-dark border-white/5">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
              <TrendingDown className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Max Drawdown
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {session.maxDrawdown}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Chart placeholder for session */}
      <Card className="p-8 glass-dark border-white/5 h-[400px] flex items-center justify-center relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="text-center relative z-10">
          <BarChart3 className="size-16 text-muted/20 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Equity Curve</h3>
          <p className="text-muted-foreground">
            Grafik ma'lumotlari tez orada paydo bo'ladi...
          </p>
        </div>
      </Card>

      <div className="hero-glow top-0 left-0 size-[800px] opacity-[0.03] pointer-events-none" />
    </div>
  );
};
