'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StatisticsTab } from './StatisticsTab';
import { SessionsTab } from './SessionsTab';
import { cn } from '@/shared/lib/utils';
import {
  CandlestickChart,
  User,
  Bell,
  Search,
  Settings,
  LogOut,
  ChevronDown,
  Zap,
  UserIcon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'statistics' | 'sessions'>(
    'sessions',
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 inset-x-0 h-20 border-b border-white/5 bg-[#0d1117]/80 backdrop-blur-md z-50">
        <div className="h-full px-8 flex items-center justify-between">
          {/* Logo Region */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-10 premium-gradient rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
              <CandlestickChart className="size-6" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-black tracking-tighter leading-none text-white uppercase">
                QAYTA<span className="text-primary italic">SAVDO</span>
              </span>
              <span className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-none mt-1">
                Dashboard
              </span>
            </div>
          </Link>

          {/* Central Switcher */}
          <div className="relative p-1 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('statistics')}
              className={cn(
                'px-6 py-2 cursor-pointer rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300',
                activeTab === 'statistics'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-white',
              )}
            >
              Statistics
            </button>
            <button
              onClick={() => setActiveTab('sessions')}
              className={cn(
                'px-6 py-2 cursor-pointer rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300',
                activeTab === 'sessions'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-white',
              )}
            >
              Sessions
            </button>
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-4">
            <button className="size-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
              <Search className="size-5" />
            </button>
            <button className="size-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white transition-colors relative">
              <Bell className="size-5" />
              <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-[#0d1117]" />
            </button>

            <div className="h-8 w-px bg-white/5 mx-2" />

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center cursor-pointer gap-3 p-1.5 pr-3 hover:bg-white/5 rounded-2xl transition-all group">
                  <UserIcon className="size-9 rounded-xl border border-white/10" />
                  <div className="hidden lg:block text-left">
                    <p className="text-xs font-black leading-none">Davlatbek</p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Sizga xush kelibsiz
                    </p>
                  </div>
                  <ChevronDown className="size-4 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 glass-dark border-white/10 rounded-2xl p-2 mt-2"
              >
                <DropdownMenuLabel className="px-3 py-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Mening Hisobim
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/5" />
                <DropdownMenuItem className="rounded-xl focus:bg-white/5 focus:text-white cursor-pointer py-2.5">
                  <User className="mr-2 size-4" /> Profil sozlamalari
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl focus:bg-white/5 focus:text-white cursor-pointer py-2.5 text-primary font-bold">
                  <Zap className="mr-2 size-4" /> Pro Reja
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl focus:bg-white/5 focus:text-white cursor-pointer py-2.5">
                  <Settings className="mr-2 size-4" /> Platforma sozlamalari
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/5" />
                <DropdownMenuItem className="rounded-xl focus:bg-rose-500/10 focus:text-rose-500 cursor-pointer py-2.5">
                  <LogOut className="mr-2 size-4" /> Chiqish
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-32 pb-20 px-8 container mx-auto">
        {activeTab === 'statistics' ? <StatisticsTab /> : <SessionsTab />}
      </main>

      {/* Background Glows */}
      <div className="hero-glow top-0 left-0 size-[800px] opacity-[0.03] pointer-events-none" />
      <div className="hero-glow bottom-0 right-0 size-[600px] opacity-[0.02] pointer-events-none" />
    </div>
  );
};
