import React from 'react';
import { Activity, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'next-intl';

export default async function StatusPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const services = [
        { name: "Platforma Web App", status: "operational" },
        { name: "Backtesting Engine", status: "operational" },
        { name: "Ma'lumotlar bazasi", status: "operational" },
        { name: "To'lov tizimi", status: "operational" },
        { name: "API Service", status: "operational" },
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="glass p-10 rounded-[3rem] border-green-500/20 mb-12 flex flex-col items-center text-center">
                    <div className="size-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6 animate-pulse">
                        <CheckCircle2 className="size-10" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black mb-4">Barcha tizimlar ishlamoqda</h1>
                    <p className="text-muted-foreground text-lg">
                        Hozirda barcha xizmatlar barqaror va hech qanday muammolar aniqlanmagan.
                    </p>
                    <div className="mt-8 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-bold flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500 animate-ping" />
                        Operational
                    </div>
                </div>

                <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <h3 className="font-bold flex items-center gap-2">
                            <Activity className="size-4 text-primary" />
                            Tizim holati
                        </h3>
                        <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold font-mono">
                            Oxirgi yangilanish: 2 daqiqa avval
                        </span>
                    </div>
                    <div className="divide-y divide-white/5">
                        {services.map((service, idx) => (
                            <div key={idx} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                                <span className="font-medium">{service.name}</span>
                                <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                                    Operational
                                    <CheckCircle2 className="size-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <div className="glass p-8 rounded-[2rem] border-yellow-500/10">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-yellow-500">
                            <Clock className="size-5" />
                            Rejalashtirilgan ishlar
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Keyingi 7 kun ichida hech qanday texnik ishlar rejalashtirilmagan. Siz platformadan cheklovsiz foydalanishingiz mumkin.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-[2rem] border-blue-500/10">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-500">
                            <AlertTriangle className="size-5" />
                            Hisobot yuborish
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Agar sizda platforma bilan bog&apos;liq muammo bo&apos;lsa, iltimos bizga xabar bering.
                        </p>
                        <button className="text-xs font-bold text-blue-500 uppercase tracking-widest hover:underline">
                            Xizmat haqida xabar berish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
