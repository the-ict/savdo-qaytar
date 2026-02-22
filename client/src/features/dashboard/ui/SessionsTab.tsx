'use client';

import Link from 'next/link';
import React from 'react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
  Play,
  Calendar,
  Clock,
  ChevronRight,
  Wallet,
  Target,
  ChevronDown,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';

const sessions = [
  {
    id: 1,
    pair: 'EUR/USD',
    date: '22-Fevral, 2024',
    trades: 12,
    pnl: '+$450.00',
    status: 'active',
    strategy: 'ICT Matrix',
  },
  {
    id: 2,
    pair: 'GBP/JPY',
    date: '18-Fevral, 2024',
    trades: 8,
    pnl: '-$120.50',
    status: 'completed',
    strategy: 'Breakout Pro',
  },
  {
    id: 3,
    pair: 'GOLD',
    date: '15-Fevral, 2024',
    trades: 24,
    pnl: '+$2,100.00',
    status: 'completed',
    strategy: 'Scalp Hunter',
  },
];

export const SessionsTab = () => {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight">
          Sizning Sessiyalaringiz
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="premium-gradient text-white border-0 px-6 cursor-pointer rounded-xl font-bold shadow-lg shadow-primary/20">
              Yangi Sessiya
              <Play className="ml-2 size-4 fill-current" />
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-dark border-white/10 text-white sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight">
                Yangi Sessiya Ochish
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Backtesting uchun yangi savdo sessiyasini sozlang.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="pair"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                  >
                    Valyuta Juftligi
                  </label>
                  <div className="relative w-full">
                    <select className="bg-white/5 w-full appearance-none border border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary pl-4 pr-10 outline-none">
                      <option value="EUR/USD">EUR/USD</option>
                      <option value="GBP/USD">GBP/USD</option>
                      <option value="XAU/USD">XAU/USD</option>
                    </select>

                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="balance"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                  >
                    Boshlang'ich Balans
                  </label>
                  <div className="relative">
                    <Input
                      id="balance"
                      type="number"
                      placeholder="10000"
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary pl-10"
                    />
                    <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="start-date"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                  >
                    Boshlanish Sanasi
                  </label>
                  <Input
                    id="start-date"
                    type="date"
                    className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="end-date"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                  >
                    Tugash Sanasi
                  </label>
                  <Input
                    id="end-date"
                    type="date"
                    className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="strategy"
                  className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                >
                  Strategiya (Majburiy emas)
                </label>
                <Input
                  id="strategy"
                  placeholder="Sizning strategiyangiz nomi"
                  className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary"
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="premium-gradient text-white border-0 w-full h-12 rounded-xl font-bold shadow-lg hover:shadow-primary/25 transition-all text-base cursor-pointer">
                Sessiyani Boshlash
                <Play className="ml-2 size-5 fill-current" />
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {sessions.map((session) => (
          <Link
            key={session.id}
            href={`/dashboard/sessions/${session.id}`}
            className="block"
          >
            <Card className="glass-dark border-white/5 p-3 cursor-pointer hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <span className="text-xl font-black text-white">
                      {session.pair.split('/')[0][0]}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        {session.pair}
                      </h3>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                          session.status === 'active'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-white/5 text-muted-foreground'
                        }`}
                      >
                        {session.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" /> {session.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {session.trades} trades
                      </span>
                      <span className="text-primary/80">
                        Strategy: {session.strategy}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                      PnL
                    </p>
                    <p
                      className={`text-xl font-black ${session.pnl.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}
                    >
                      {session.pnl}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl pointer-events-none"
                  >
                    <ChevronRight className="size-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
