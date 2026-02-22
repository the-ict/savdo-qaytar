import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'next-intl';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const contacts = [
        {
            icon: Mail,
            title: "Email",
            value: "support@qaytasavdo.uz",
            desc: "Sizga 24 soat ichida javob beramiz."
        },
        {
            icon: Send,
            title: "Telegram",
            value: "@qaytasavdo_support",
            desc: "Tezkor yordam kerak bo'lsa yozing."
        },
        {
            icon: Phone,
            title: "Telefon",
            value: "+998 90 123 45 67",
            desc: "Dush-Juma, 9:00 - 18:00"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Biz bilan bog&apos;laning</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Sizning fikringiz biz uchun muhim. Savollaringiz yoki takliflaringiz bo&apos;lsa, biz bilan bog&apos;lanishdan tortinmang.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {contacts.map((contact, idx) => (
                        <div key={idx} className="glass p-8 rounded-[2rem] border-white/5 text-center group hover:border-primary/20 transition-all">
                            <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <contact.icon className="size-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                            <div className="font-bold text-primary mb-2">{contact.value}</div>
                            <p className="text-sm text-muted-foreground">{contact.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="glass p-8 md:p-12 rounded-[3rem] border-primary/5 max-w-3xl mx-auto">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Ismingiz</label>
                                <input
                                    type="text"
                                    placeholder="Ismingizni kiriting"
                                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email manzilingiz"
                                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Xabar</label>
                            <textarea
                                placeholder="Xabaringizni yozing..."
                                rows={5}
                                className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 outline-none focus:border-primary/50 transition-colors resize-none"
                            ></textarea>
                        </div>
                        <Button className="w-full h-14 rounded-2xl premium-gradient text-white font-bold text-lg shadow-xl shadow-primary/20">
                            Xabarni yuborish
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
