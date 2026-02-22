import React from 'react';
import { Link } from '@/shared/config/i18n/navigation';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface Props {
    params: Promise<{ locale: Locale }>;
}

export default async function TermsOfServicePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">

                <div className="flex items-center gap-4 mb-12">
                    <div className="size-16 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl">
                        <Scale className="size-8" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight uppercase">Foydalanish shartlari</h1>
                        <p className="text-muted-foreground mt-2 font-medium">Oxirgi yangilanish: 22-fevral, 2024-yil</p>
                    </div>
                </div>

                <div className="glass-dark border-border/50 rounded-3xl p-8 md:p-12 space-y-10 leading-relaxed text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <CheckCircle className="size-5 text-primary" /> 1. Shartlar qabul qilinishi
                        </h2>
                        <p>
                            Qaytasavdo platformasidan foydalanish orqali siz ushbu foydalanish shartlariga to&apos;liq roziligingizni bildirasiz. Agar siz ushbu shartlarga rozi bo&apos;lmasangiz, iltimos, platformadan foydalanmang.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <FileText className="size-5 text-primary" /> 2. Xizmat ko&apos;rsatish doirasi
                        </h2>
                        <p>
                            Platforma treyderlar uchun tahliliy vositalar va backtesting xizmatlarini taqdim etadi. Biz taqdim etayotgan ma&apos;lumotlar faqat o&apos;quv va tahliliy maqsadlar uchun bo&apos;lib, moliyaviy maslahat deb hisoblanmaydi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <AlertCircle className="size-5 text-primary" /> 3. Mas&apos;uliyatni cheklash
                        </h2>
                        <p>
                            Moliyaviy bozorlarda savdo qilish yuqori darajadagi xavf bilan bog&apos;liq. Qaytasavdo platformasi foydalanuvchilarning savdo qarorlari natijasida yuzaga kelishi mumkin bo&apos;lgan har qanday moliyaviy yo&apos;qotishlar uchun javobgarlikni o&apos;z zimmasiga olmaydi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <CheckCircle className="size-5 text-primary" /> 4. Foydalanuvchi majburiyatlari
                        </h2>
                        <p>
                            Foydalanuvchi o&apos;z hisob ma&apos;lumotlarining maxfiyligini saqlashga va platformadan qonun hujjatlariga muvofiq foydalanishga majburdir. Platformani noqonuniy maqsadlarda ishlatish yoki uning ishiga zarar yetkazish qat&apos;iyan man etiladi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                            <AlertCircle className="size-5 text-primary" /> 5. O&apos;zgartirishlar
                        </h2>
                        <p>
                            Biz ushbu shartlarni istalgan vaqtda o&apos;zgartirish huquqini o&apos;zimizda saqlab qolamiz. O&apos;zgarishlar platformaga joylashtirilgan paytdan boshlab kuchga kiradi.
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
