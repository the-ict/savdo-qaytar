import React from 'react';
import { Cookie, Info, Settings, Shield } from 'lucide-react';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface Props {
    params: Promise<{ locale: Locale }>;
}

export default async function CookiePolicyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="size-16 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl">
                        <Cookie className="size-8" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight uppercase">Kuki siyosati</h1>
                        <p className="text-muted-foreground mt-2 font-medium">Oxirgi yangilanish: 22-fevral, 2024-yil</p>
                    </div>
                </div>

                <div className="glass-dark border-border/50 rounded-3xl p-8 md:p-12 space-y-10 leading-relaxed text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Info className="size-5 text-primary" /> 1. Kuki nima?
                        </h2>
                        <p>
                            Kukilar (Cookies) - bu siz platformadan foydalanishingizda kompyuteringiz yoki mobil qurilmangizda saqlanadigan kichik matnli fayllardir. Ular saytning ishlashini ta&apos;minlash va foydalanuvchi tajribasini yaxshilashga yordam beradi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Settings className="size-5 text-primary" /> 2. Biz qanday kukilardan foydalanamiz?
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-foreground font-bold opacity-90">Zaruriy kukilar:</h3>
                                <p>Platformaning asosiy funksiyalari (masalan, tizimga kirish) ishlashi uchun talab qilinadi.</p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold opacity-90">Tahliliy kukilar:</h3>
                                <p>Foydalanuvchilar platformadan qanday foydalanishini tushunish va xizmat sifatini oshirishga yordam beradi.</p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold opacity-90">Funktsional kukilar:</h3>
                                <p>Siz tanlagan sozlamalarni (til, mavzu) eslab qolish uchun xizmat qiladi.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Shield className="size-5 text-primary" /> 3. Kukilarni boshqarish
                        </h2>
                        <p>
                            Siz o&apos;z brauzeringiz sozlamalari orqali kukilarni o&apos;chirib qo&apos;yishingiz yoki cheklashingiz mumkin. Biroq, kukilarni o&apos;chirib qo&apos;yish platformaning ba&apos;zi funksiyalari to&apos;g&apos;ri ishlamasligiga olib kelishi mumkin.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <Cookie className="size-5 text-primary" /> 4. Siyosatdagi o&apos;zgarishlar
                        </h2>
                        <p>
                            Ushbu kuki siyosati vaqti-vaqti bilan yangilab turilishi mumkin. Har qanday o&apos;zgarishlar ushbu sahifada e&apos;lon qilinadi.
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
