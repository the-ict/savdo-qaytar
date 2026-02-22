'use client';

import React from 'react';
import { Button } from '@/shared/ui/button';
import { Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="hero-glow top-1/4 left-1/4 size-[500px]" />
      <div className="hero-glow bottom-1/4 right-1/4 size-[400px]" />

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            PROFESSIONAL BACKTESTING PLATFORMASI
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Savdo mahoratingizni <br />
            <span className="text-gradient">qaytadan kashf eting</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Bozorni qayta ko'ring, strategiyalaringizni sinab ko'ring va xatolar
            ustida ishlang. Haqiqiy pulingizni xavf ostiga qo'ymasdan
            professional treyderga aylaning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button
              size="lg"
              className="font-bold premium-gradient text-white h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20 group"
            >
              Bepul boshlang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold h-14 px-8 text-lg rounded-xl border-2"
            >
              <Play className="mr-2 fill-current" />
              Demoni ko'rish
            </Button>
          </div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="absolute -inset-1 premium-gradient opacity-20 blur-2xl rounded-[2rem]" />
          <div className="relative glass-dark rounded-[2rem] p-2 aspect-video overflow-hidden shadow-2xl border-white/10">
            <div className="w-full h-full bg-[#0d1117] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/50" />
                  <div className="size-3 rounded-full bg-yellow-500/50" />
                  <div className="size-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-6 w-32 bg-white/5 rounded-md" />
              </div>
              <div className="h-full w-full flex items-center justify-center opacity-20">
                <div className="grid grid-cols-12 gap-1 w-3/4">
                  {[
                    45, 62, 38, 71, 54, 29, 66, 41, 78, 52, 33, 61, 47, 69, 35,
                    58, 43, 75, 49, 31, 64, 56, 39, 67,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="h-20 bg-white/10 rounded-sm"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
