'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
    Mail,
    Lock,
    ArrowRight,
    Github,
    Chrome,
    ChevronLeft,
    CandlestickChart
} from 'lucide-react';

export default function Login() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0d1117]">
            <div className="absolute top-8 left-8">
                <Link href="/">
                    <Button variant="ghost" className="gap-2 px-4 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all text-muted-foreground hover:text-foreground">
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

            <div className="relative z-10 w-full px-4 flex flex-col items-center">
                {/* Top Branding/Back Link */}

                <div className="mb-12 text-center flex flex-col items-center">
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
                                <h2 className="text-3xl font-black tracking-tight mb-2">Hush kelibsiz</h2>
                                <p className="text-muted-foreground text-sm">
                                    Davom etish uchun hisobingizga kiring
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground" htmlFor="email">
                                        Email / Login
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                                            <Mail className="size-5" />
                                        </div>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                            className="h-14 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between ml-1">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="password">
                                            Parol
                                        </label>
                                        <Link href="/reset-password" className="text-xs font-bold text-primary hover:underline">
                                            Unutdingizmi?
                                        </Link>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                                            <Lock className="size-5" />
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-14 pl-12 bg-background/50 border-white/5 rounded-2xl focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full h-14 rounded-2xl premium-gradient text-white border-0 shadow-lg shadow-primary/20 font-bold text-lg group">
                                    Kirish
                                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>

                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-white/5" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                                    <span className="bg-transparent px-4 text-muted-foreground">Yoki orqali kiring</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" className="h-12 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10">
                                    <Chrome className="mr-2 size-5" />
                                    Google
                                </Button>
                                <Button variant="outline" className="h-12 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10">
                                    <Github className="mr-2 size-5" />
                                    Github
                                </Button>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="text-sm text-muted-foreground">
                                    Hisobingiz yo'qmi?{' '}
                                    <Link href="#" className="text-primary font-bold hover:underline">
                                        Ro'yxatdan o'ting
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-muted-foreground flex gap-6 italic">
                    <Link href="#" className="hover:text-primary transition-colors">Yordam</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Maxfiylik</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Shartlar</Link>
                </div>
            </div>
        </main>
    );
};
