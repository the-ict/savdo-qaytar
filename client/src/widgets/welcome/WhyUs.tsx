'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { CheckCircle2, Layout, BarChart, History } from 'lucide-react';

const features = [
    {
        id: 'backtest',
        title: 'Backtest',
        label: 'Backtesting',
        description: 'Bozor tarixini soniyalar ichida o\'tkazing. O\'tmishdagi har bir shamni (candle) xuddi real vaqtdagidek tahlil qiling.',
        points: ['Milli-soniyalik aniqlik', 'Custom periodlar', 'Multi-chart ko\'rinishi'],
        icon: History,
    },
    {
        id: 'analytics',
        title: 'Analitika',
        label: 'Analitika',
        description: 'Sizning savdo natijalaringiz chuqur tahlil qilinadi. Win-rate, Risk/Reward va Drawdown kabi ko\'rsatkichlarni ko\'ring.',
        points: ['Avtomatik hisobotlar', 'Equity curve', 'Xatolar statistikasi'],
        icon: BarChart,
    },
    {
        id: 'journal',
        title: 'Journaling',
        label: 'Jurnal',
        description: 'Har bir savdoni suratlar va izohlar bilan saqlang. O\'z hissiyotlaringizni va qarorlaringizni yozib boring.',
        points: ['Screenshotlar saqlash', 'Psixologik tahlil', 'Taglar tizimi'],
        icon: Layout,
    },
];

export const WhyUs = () => {
    return (
        <section id="features" className="py-24 bg-card/50">
            <div className="custom-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Nega aynan <span className="text-primary italic">qaytasavdo</span>?</h2>
                    <p className="text-muted-foreground text-lg">
                        Biz treyderlar uchun treyderlar tomonidan yaratilgan eng mukammal backtesting platformasini taklif etamiz.
                    </p>
                </div>

                <Tabs defaultValue="backtest" className="w-full">
                    <TabsList className="mb-12">
                        {features.map((f) => (
                            <TabsTrigger key={f.id} value={f.id} className='cursor-pointer'>
                                {f.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {features.map((f) => (
                        <TabsContent key={f.id} value={f.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    <div className="size-12 rounded-2xl premium-gradient text-white flex items-center justify-center mb-6 shadow-lg">
                                        <f.icon className="size-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                        {f.description}
                                    </p>
                                    <ul className="space-y-4">
                                        {f.points.map((p, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="size-5 text-primary" />
                                                <span className="font-medium">{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="relative aspect-square md:aspect-video glass rounded-3xl overflow-hidden shadow-2xl border-white/5 bg-background/20 p-4">
                                        <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                                            <f.icon className="size-20 text-muted/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};
