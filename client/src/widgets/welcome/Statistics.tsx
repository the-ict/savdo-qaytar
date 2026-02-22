'use client';

import React from 'react';
import Image from 'next/image';

const stats = [
    { label: 'Faol treyderlar', value: '10,000+', description: 'Dunyo bo\'ylab 10,000 dan ortiq treyderlar bizga ishonishadi.' },
    { label: 'Strategiyalar', value: '50,000+', description: 'Muvaffaqiyatli sinovdan o\'tkazilgan savdo strategiyalari.' },
    { label: 'Tezlik', value: '100x', description: 'Real vaqtga qaraganda 100 baravar tezroq backtesting.' },
];

export const Statistics = () => {
    return (
        <section id="stats" className="py-24 relative overflow-hidden">
            <div className="custom-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Statistika va Natijalar</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Raqamlar bizning platformamizning samaradorligini isbotlaydi. Mukammallikka biz bilan erishing.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group">
                            <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                                {stat.value}
                            </div>
                            <div className="text-lg font-bold mb-2">{stat.label}</div>
                            <p className="text-sm text-muted-foreground">{stat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center glass p-8 md:p-12 rounded-[3rem] border-primary/5">
                    <div className="max-w-md">
                        <h3 className="text-3xl font-bold mb-6">Muvaffaqiyatli treyder bo'lish siri nimada?</h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            "Professional treyderlar bozor tarixini qayta-qayta ko'rishadi. Strategiyani yuzlab marta sinab ko'rmasdan turib, real hisobda savdo qilish - bu tavakkaldir."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                Q
                            </div>
                            <div>
                                <div className="font-bold">Qaytasavdo Akademiyasi</div>
                                <div className="text-xs text-primary uppercase tracking-widest font-bold">Ekspert maslahati</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square max-w-[400px] mx-auto lg:ml-auto">
                        <div className="absolute inset-0 premium-gradient blur-[100px] opacity-20 animate-pulse" />
                        <Image
                            src="/Users/davlatbek/.gemini/antigravity/brain/68a8ea2a-e7ab-478d-8826-fd847f4a31a3/trader_success_illustration_1771707235744.png"
                            alt="Trader Success"
                            width={400}
                            height={400}
                            className="relative z-10 drop-shadow-2xl rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
