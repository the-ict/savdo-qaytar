import React from 'react';
import { BookOpen, Play, CheckCircle2 } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'next-intl';

export default async function GuidePage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const steps = [
        {
            title: "Ro'yxatdan o'tish",
            desc: "Platformaga a'zo bo'ling va o'z hisobingizni yarating."
        },
        {
            title: "Aktivni tanlang",
            desc: "Tahlil qilmoqchi bo'lgan valyuta juftligi yoki aktivni tanlang."
        },
        {
            title: "Backtestingni boshlang",
            desc: "Tarixiy ma'lumotlarni yuklang va replay funksiyasini ishga tushiring."
        },
        {
            title: "Natijalarni tahlil qiling",
            desc: "Savdo natijalarini ko'rib chiqing va strategiyangizni optimallashtiring."
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="size-16 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl mx-auto mb-6">
                        <BookOpen className="size-8" />
                    </div>
                    <h1 className="text-4xl font-black mb-4">Platforma qo&apos;llanmasi</h1>
                    <p className="text-muted-foreground text-lg">
                        Qaytasavdo platformasidan samarali foydalanish bo&apos;yicha yo&apos;riqnoma.
                    </p>
                </div>

                <div className="grid gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="glass p-8 rounded-[2rem] border-white/5 flex gap-6 items-start">
                            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {step.desc}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-primary font-bold cursor-pointer hover:underline">
                                    <Play className="size-4 fill-current" />
                                    Videoni ko&apos;rish
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 glass p-8 rounded-[2rem] border-primary/5">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <CheckCircle2 className="text-primary size-6" />
                        Asosiy tavsiyalar
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                        <li className="flex gap-2">
                            <span className="text-primary font-bold">•</span>
                            Kuniga kamida 1 soat mashq qiling.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-primary font-bold">•</span>
                            Har bir savdo uchun jurnal yuriting.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-primary font-bold">•</span>
                            Turli vaqt intervallarini solishtiring.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-primary font-bold">•</span>
                            Xatolar ustida mustaqil ishlang.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
