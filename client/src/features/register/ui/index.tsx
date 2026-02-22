'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Github,
  Chrome,
  CandlestickChart,
  ChevronLeft,
} from 'lucide-react';

export default function Register() {
  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0d1117]">
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="gap-2 px-4 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            Bosh sahifa
          </Button>
        </Link>
      </div>

      {/* Background Elements */}
      <div className="hero-glow top-0 left-0 size-[800px] opacity-20" />
      <div className="hero-glow -bottom-20 -right-20 size-[600px] opacity-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Animated Lines/Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 py-12 flex flex-col items-center">
        {/* Top Branding/Back Link */}
        <div className="mb-8 text-center flex flex-col items-center">
          <Link href="/" className="flex items-center gap-3 group mb-4">
            <div className="size-12 premium-gradient rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-300">
              <CandlestickChart className="size-7" />
            </div>
          </Link>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-white uppercase">
              QAYTA<span className="text-primary italic">SAVDO</span>
            </span>
            <span className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase leading-none mt-2">
              Smart Replay
            </span>
          </div>
        </div>

        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="glass-dark p-8 md:p-10 rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-48 premium-gradient blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black tracking-tight mb-2">
                  Hisob ochish
                </h2>
                <p className="text-muted-foreground text-sm">
                  Qaytasavdo hamjamiyatiga qo'shiling
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1 text-muted-foreground/70"
                    htmlFor="name"
                  >
                    Foydalanuvchi ismi
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <User className="size-5" />
                    </div>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="h-12 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1 text-muted-foreground/70"
                    htmlFor="email"
                  >
                    Email manzili
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <Mail className="size-5" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="h-12 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1 text-muted-foreground/70"
                    htmlFor="password"
                  >
                    Parol
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <Lock className="size-5" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="h-12 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1 text-muted-foreground/70"
                    htmlFor="confirm-password"
                  >
                    Parolni tasdiqlang
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <Lock className="size-5" />
                    </div>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      className="h-12 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <Button className="w-full h-12 rounded-2xl premium-gradient text-white border-0 shadow-lg shadow-primary/20 font-bold text-base group mt-4">
                  Ro'yxatdan o'tish
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/5" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span className="bg-transparent px-4 text-muted-foreground/70">
                    Yoki orqali kiring
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-11 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-xs"
                >
                  <Chrome className="mr-2 size-4" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-xs"
                >
                  <Github className="mr-2 size-4" />
                  Github
                </Button>
              </div>

              <div className="mt-8 text-center border-t border-white/5 pt-6">
                <p className="text-sm text-muted-foreground">
                  Allaqachon hisobingiz bormi?{' '}
                  <Link
                    href="/login"
                    className="text-primary font-bold hover:underline"
                  >
                    Kirish
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
