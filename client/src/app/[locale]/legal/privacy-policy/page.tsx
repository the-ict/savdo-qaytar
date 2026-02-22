import React from 'react';
import { Link } from '@/shared/config/i18n/navigation';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Activity } from 'lucide-react';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface Props {
    params: Promise<{ locale: Locale }>;
}

export default async function PrivacyPolicyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Bosh sahifaga qaytish</span>
                </Link>

                <div className="flex items-center gap-4 mb-12">
                    <div className="size-16 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl">
                        <ShieldCheck className="size-8" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight uppercase">Maxfiylik Siyosati</h1>
                        <p className="text-muted-foreground mt-2 font-medium">Oxirgi yangilanish: 22-fevral, 2024-yil</p>
                    </div>
                </div>

                <div className="glass-dark border-border/50 rounded-3xl p-8 md:p-12 space-y-10 leading-relaxed text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Eye className="size-5 text-primary" /> 1. Ma&apos;lumotlarni yig&apos;ish
                        </h2>
                        <p>
                            Biz sizning platformamizdan foydalanishingiz jarayonida quyidagi ma&apos;lumotlarni yig&apos;ishimiz mumkin:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Shaxsiy ma&apos;lumotlar (ism, elektron pochta manzili)</li>
                            <li>Hisob ma&apos;lumotlari va sozlamalari</li>
                            <li>Platformadagi savdo tarixi va tahlillari</li>
                            <li>Texnik ma&apos;lumotlar (IP-manzil, brauzer turi, qurilma haqida ma&apos;lumot)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Lock className="size-5 text-primary" /> 2. Ma&apos;lumotlardan foydalanish
                        </h2>
                        <p>
                            Yig&apos;ilgan ma&apos;lumotlar quyidagi maqsadlarda ishlatiladi:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Xizmatlarni taqdim etish va yaxshilash</li>
                            <li>Foydalanuvchi tajribasini shaxsiylashtirish</li>
                            <li>Xavfsizlikni ta&apos;minlash va firibgarlikning oldini olish</li>
                            <li>Texnik yordam ko&apos;rsatish va xabardor qilish</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <ShieldCheck className="size-5 text-primary" /> 3. Ma&apos;lumotlar xavfsizligi
                        </h2>
                        <p>
                            Biz sizning ma&apos;lumotlaringizni himoya qilish uchun zamonaviy shifrlash texnologiyalari va xavfsizlik protokollaridan foydalanamiz. Biroq, internet orqali ma&apos;lumot uzatishning 100% xavfsiz ekanligini kafolatlay olmaymiz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <FileText className="size-5 text-primary" /> 4. Uchinchi tomon xizmatlari
                        </h2>
                        <p>
                            Xizmat sifatini oshirish maqsadida biz ba&apos;zi hollarda ishonchli uchinchi tomon tahliliy xizmatlaridan foydalanishimiz mumkin. Ushbu xizmatlar o&apos;zlarining maxfiylik siyosatlariga ega.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Activity className="size-5 text-primary" /> 5. Bog&apos;lanish
                        </h2>
                        <p>
                            Maxfiylik siyosati bo&apos;yicha savollaringiz bo&apos;lsa, biz bilan <span className="text-primary font-bold">support@qaytasavdo.uz</span> manzili orqali bog&apos;lanishingiz mumkin.
                        </p>
                    </section>
                </div>

                <div className="mt-12 text-center text-sm text-muted-foreground">
                    © 2026 Qaytasavdo. Barcha huquqlar himoyalangan.
                </div>
            </div>

            <div className="hero-glow top-0 right-0 size-[600px] opacity-[0.05] pointer-events-none" />
            <div className="hero-glow bottom-0 left-0 size-[400px] opacity-[0.03] pointer-events-none" />
        </div>
    );
}
