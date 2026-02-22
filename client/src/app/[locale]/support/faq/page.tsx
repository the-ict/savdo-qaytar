import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'next-intl';

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const faqs = [
        {
            q: "Qaytasavdo platformasi nima?",
            a: "Qaytasavdo - bu treyderlar uchun bozor tarixini qayta ko'rish va o'z strategiyalarini real vaqt rejimida sinab ko'rish imkonini beruvchi backtesting platformasi."
        },
        {
            q: "Bepul foydalanish mumkinmi?",
            a: "Ha, bizda bepul (Free) tarif mavjud bo'lib, u orqali siz platformaning asosiy funksiyalari bilan tanishishingiz mumkin."
        },
        {
            q: "Qaysi aktivlar mavjud?",
            a: "Tanlangan tarifga qarab, barcha FX juftliklari, kriptovalyutalar va aksiyalar tahlil uchun mavjud."
        },
        {
            q: "To'lov qanday amalga oshiriladi?",
            a: "To'lovlar xalqaro bank kartalari va mahalliy to'lov tizimlari orqali xavfsiz tarzda amalga oshiriladi."
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="size-16 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl mx-auto mb-6">
                        <HelpCircle className="size-8" />
                    </div>
                    <h1 className="text-4xl font-black mb-4">Ko&apos;p beriladigan savollar</h1>
                    <p className="text-muted-foreground text-lg">
                        Sizda savol bormi? Bizda javoblar bor.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="font-bold text-lg">{faq.q}</h3>
                                <ChevronDown className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 glass p-10 rounded-[2.5rem] border-primary/10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Savolingizga javob topmadingizmi?</h3>
                    <p className="text-muted-foreground mb-8">
                        Bizning qo&apos;llab-quvvatlash jamoamiz sizga yordam berishga tayyor.
                    </p>
                    <Button className="premium-gradient text-white rounded-xl h-12 px-8 font-bold">
                        Biz bilan bog&apos;lanish
                    </Button>
                </div>
            </div>
        </div>
    );
}
