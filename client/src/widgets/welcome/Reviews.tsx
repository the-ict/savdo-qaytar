'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Davron Ahmedov',
        role: 'Full-time Treyder',
        text: 'Qaytasavdo orqali men o\'z strategiyamni 1 yil ichida qanday ishlashini 1 haftada sinab ko\'rdim. Bu haqiqiy game-changer!',
        rating: 5,
        avatar: 'D',
    },
    {
        name: 'Madina Ismoilova',
        role: 'SMC Treyder',
        text: 'Analitika bo\'limi juda mukammal. Xatolarimni ko\'rib, ularni tuzatishim uchun barcha kerakli ma\'lumotlar bor.',
        rating: 5,
        avatar: 'M',
    },
    {
        name: 'Bekzod Karimov',
        role: 'Boshlovchi treyder',
        text: 'Bepul versiyasi ham boshlash uchun juda foydali. Keyinchalik Start tarifiga o\'tdim va pushaymon emasman.',
        rating: 4,
        avatar: 'B',
    },
];

export const Reviews = () => {
    return (
        <section id="reviews" className="py-24">
            <div className="custom-container">
                <div className="flex flex-col md:row items-center justify-between mb-16 gap-6">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Treyderlar biz haqimizda</h2>
                        <p className="text-muted-foreground">
                            Minglab foydalanuvchilarimiz o\'z muvaffaqiyat hikoyalari bilan bo\'lishmoqda.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="glass size-12 rounded-full flex items-center justify-center hover:bg-primary/10 cursor-pointer transition-colors">&lt;</div>
                        <div className="glass size-12 rounded-full flex items-center justify-center hover:bg-primary/10 cursor-pointer transition-colors">&gt;</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="glass p-8 rounded-[2rem] relative group border-primary/5 hover:border-primary/20 transition-all">
                            <Quote className="absolute top-6 right-8 size-10 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={cn("size-4", i < t.rating ? "fill-primary text-primary" : "text-muted")} />
                                ))}
                            </div>
                            <p className="text-lg italic mb-8 relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full premium-gradient flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper for Star rating
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');
