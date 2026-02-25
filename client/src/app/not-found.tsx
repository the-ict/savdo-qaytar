'use client';

import React from 'react';
import { FileQuestion } from 'lucide-react';

export default function GlobalNotFound() {
    return (
        <html lang="uz">
            <body>
                <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center px-4">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="mb-8 relative inline-flex items-center justify-center">
                            <div className="size-32 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shadow-2xl">
                                <FileQuestion className="size-16" />
                            </div>
                        </div>

                        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            404
                        </h1>

                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Sahifa topilmadi
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
                            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko&apos;chirilgan.
                        </p>

                    </div>
                </div>
            </body>
        </html>
    );
}
