'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/shared/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
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
  History,
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

const MOCK_TRADES = [
  {
    id: '1',
    pair: 'EUR/USD',
    type: 'BUY',
    entryTime: '22 Feb, 09:30',
    exitTime: '22 Feb, 10:45',
    entryPrice: 1.0854,
    exitPrice: 1.0872,
    pnl: 180.0,
    pips: 18,
  },
  {
    id: '2',
    pair: 'EUR/USD',
    type: 'SELL',
    entryTime: '22 Feb, 11:15',
    exitTime: '22 Feb, 11:50',
    entryPrice: 1.0865,
    exitPrice: 1.085,
    pnl: 150.0,
    pips: 15,
  },
  {
    id: '3',
    pair: 'GBP/USD',
    type: 'BUY',
    entryTime: '22 Feb, 13:00',
    exitTime: '22 Feb, 13:20',
    entryPrice: 1.264,
    exitPrice: 1.263,
    pnl: -100.0,
    pips: -10,
  },
  {
    id: '4',
    pair: 'EUR/USD',
    type: 'SELL',
    entryTime: '22 Feb, 14:30',
    exitTime: '22 Feb, 15:45',
    entryPrice: 1.088,
    exitPrice: 1.0855,
    pnl: 250.0,
    pips: 25,
  },
  {
    id: '5',
    pair: 'USD/JPY',
    type: 'BUY',
    entryTime: '22 Feb, 16:10',
    exitTime: '22 Feb, 16:30',
    entryPrice: 150.2,
    exitPrice: 150.15,
    pnl: -50.0,
    pips: -5,
  },
  {
    id: '6',
    pair: 'EUR/USD',
    type: 'BUY',
    entryTime: '22 Feb, 17:00',
    exitTime: '22 Feb, 18:00',
    entryPrice: 1.085,
    exitPrice: 1.089,
    pnl: 400.0,
    pips: 40,
  },
];

export const SessionDetails = ({ id }: SessionDetailsProps) => {
  const session = getSessionData(id);
  const [selectedTrade, setSelectedTrade] = React.useState<
    (typeof MOCK_TRADES)[0] | null
  >(null);

  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-8 container mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
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

      <Tabs defaultValue="overview" className="w-full">
        <TabsContent
          value="overview"
          className="space-y-8 animate-in mt-0 fade-in zoom-in-95 duration-300"
        >
          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <Card className="p-8 glass-dark border-white/5 h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="text-center relative z-10">
              <BarChart3 className="size-16 text-muted-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Equity Curve
              </h3>
              <p className="text-muted-foreground">
                Grafik ma&apos;lumotlari tez orada paydo bo&apos;ladi...
              </p>
            </div>
          </Card>
        </TabsContent>

        <div className="animate-in fade-in zoom-in-95 duration-300 mt-10">
          <Card className="glass-dark border-white/5 overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#1a202c]/50 text-muted-foreground text-xs uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4 font-bold border-b border-white/5">
                      Savdo
                    </th>
                    <th className="px-6 py-4 font-bold border-b border-white/5">
                      Vaqt (Entry - Exit)
                    </th>
                    <th className="px-6 py-4 font-bold border-b border-white/5">
                      Narx (Entry - Exit)
                    </th>
                    <th className="px-6 py-4 font-bold border-b border-white/5 text-right">
                      Foyda / Zarar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_TRADES.map((trade) => (
                    <tr
                      key={trade.id}
                      onClick={() => setSelectedTrade(trade)}
                      className="hover:bg-white/[0.05] transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-8 rounded flex items-center justify-center font-bold text-[10px] ${trade.type === 'BUY'
                              ? 'bg-emerald-500/10 text-emerald-500'
                              : 'bg-rose-500/10 text-rose-500'
                              }`}
                          >
                            {trade.type}
                          </div>
                          <span className="font-bold text-white">
                            {trade.pair}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <div className="flex flex-col gap-0.5">
                          <span>{trade.entryTime}</span>
                          <span className="text-xs opacity-60">
                            {trade.exitTime}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-white">
                            {trade.entryPrice.toFixed(4)}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {trade.exitPrice.toFixed(4)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex flex-col gap-0.5 items-end">
                          <span
                            className={`font-mono font-bold ${trade.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}
                          >
                            {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                          </span>
                          <span
                            className={`text-xs ${trade.pips >= 0 ? 'text-emerald-500/70' : 'text-rose-500/70'}`}
                          >
                            {trade.pips >= 0 ? '+' : ''}
                            {trade.pips} pips
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {MOCK_TRADES.length === 0 && (
              <div className="p-12 text-center text-muted-foreground">
                <History className="size-12 opacity-20 mx-auto mb-4" />
                <p>Hozircha savdo tarixi mavjud emas.</p>
              </div>
            )}
          </Card>
        </div>
      </Tabs>

      <div className="hero-glow top-0 left-0 size-[800px] opacity-[0.03] pointer-events-none" />

      {/* Trade Details Modal */}
      <Dialog
        open={!!selectedTrade}
        onOpenChange={(open) => !open && setSelectedTrade(null)}
      >
        <DialogContent className="bg-[#0f141b] border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${selectedTrade?.type === 'BUY'
                  ? 'bg-emerald-500/10 text-emerald-500'
                  : 'bg-rose-500/10 text-rose-500'
                  }`}
              >
                {selectedTrade?.type}
              </span>
              <span>{selectedTrade?.pair} - Savdo Tafsiloti</span>
            </DialogTitle>
          </DialogHeader>
          {selectedTrade && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    Entry
                  </p>
                  <p className="font-mono text-lg font-bold">
                    {selectedTrade.entryPrice.toFixed(4)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {selectedTrade.entryTime}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    Exit
                  </p>
                  <p className="font-mono text-lg font-bold">
                    {selectedTrade.exitPrice.toFixed(4)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {selectedTrade.exitTime}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    Natija
                  </p>
                  <p
                    className={`font-mono text-2xl font-black ${selectedTrade.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}
                  >
                    {selectedTrade.pnl >= 0 ? '+' : ''}$
                    {selectedTrade.pnl.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    Pips
                  </p>
                  <p
                    className={`font-mono font-bold ${selectedTrade.pips >= 0 ? 'text-emerald-500/70' : 'text-rose-500/70'}`}
                  >
                    {selectedTrade.pips >= 0 ? '+' : ''}
                    {selectedTrade.pips}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <Button
                  className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                  onClick={() => setSelectedTrade(null)}
                >
                  Yopish
                </Button>
                <Link href={`/backtesting/${session.id}`} className="flex-1">
                  <Button className="w-full rounded-xl premium-gradient text-white font-bold border-0">
                    Grafikda ko&apos;rish{' '}
                    <Play className="size-4 ml-2 fill-current" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
