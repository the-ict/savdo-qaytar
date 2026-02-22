import React from 'react';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] opacity-20 pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Icon/Illustration */}
                <div className="mb-8 relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 premium-gradient blur-3xl opacity-30 rounded-full" />
                    <div className="size-32 rounded-[2.5rem] glass-dark border border-white/10 flex items-center justify-center text-primary shadow-2xl relative z-10 animate-bounce-slow">
                        <FileQuestion className="size-16" />
                    </div>
                </div>

                {/* 404 Text */}
                <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 text-gradient tabular-nums">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
                    Sahifa topilmadi
                </h2>

                <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko&apos;chirilgan bo&apos;lishi mumkin.
                </p>

            </div>

            {/* Code-style background element for flavor */}
            <div className="absolute bottom-20 left-10 opacity-[0.03] select-none pointer-events-none font-mono text-sm hidden lg:block">
                <pre>
                    {` {
    "error": "not_found",
    "message": "Resource not located",
    "requested_at": "${new Date().toISOString()}"
  }`}
                </pre>
            </div>
        </div>
    );
}
