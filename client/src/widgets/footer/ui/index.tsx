'use client';

import React from 'react';
import Link from 'next/link';
import {
  CandlestickChart,
  Github,
  Twitter,
  Instagram,
  Send
} from 'lucide-react';
import {
  usePathname
} from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if (
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("reset-password") ||
    pathname.includes("dashboard") ||
    pathname.includes("backtesting")
  ) {
    return null;
  };
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border/50">
      <div className="custom-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="size-10 premium-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                <CandlestickChart className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none text-foreground uppercase">
                  QAYTA<span className="text-primary italic">SAVDO</span>
                </span>
                <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-none mt-1">
                  Smart Replay
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-8">
              Professional treyderlar uchun backtesting va strategiya tahlili platformasi.
              O'z kelajagingizni biz bilan quring.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors">
                <Send className="size-5" />
              </Link>
              <Link href="#" className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors">
                <Github className="size-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platforma</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Xususiyatlar</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Narxlar</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Akademiya</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Hamkorlar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Yordam</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Qo'llanma</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Status</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-6">Yangiliklarga a'zo bo'ling</h4>
            <p className="text-sm text-muted-foreground mb-4">Eng so'nggi yangiliklar va maqolalarni elektron pochtangizga oling.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="bg-background border border-border/50 rounded-xl px-4 py-2 text-sm flex-1 outline-none focus:border-primary/50 transition-colors"
                id="footer-email"
              />
              <button className="cursor-pointer premium-gradient text-white px-6 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition-all">
                A'zo bo'lish
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border/20 flex flex-col md:row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div>
            © 2026 qaytasavdo. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Maxfiylik siyosati</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Foydalanish shartlari</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Kuki siyosati</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
