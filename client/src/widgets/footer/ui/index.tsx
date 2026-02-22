'use client';

import React, {
  useState
} from 'react';
import {
  Link
} from '@/shared/config/i18n/navigation';
import {
  CandlestickChart,
  Github,
  Twitter,
  Instagram,
  Send,
} from 'lucide-react';
import {
  usePathname
} from 'next/navigation';

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const pathname = usePathname();

  if (
    pathname.includes('login') ||
    pathname.includes('register') ||
    pathname.includes('reset-password') ||
    pathname.includes('dashboard') ||
    pathname.includes('backtesting')
  ) {
    return null;
  }

  const handleFollow = () => {
    alert("Email yozib olindi bizni tanlaganingiz uchun rahmat !");
    setEmail("");
  }

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
              Professional treyderlar uchun backtesting va strategiya tahlili
              platformasi. O&apos;z kelajagingizni biz bilan quring.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors"
              >
                <Twitter className="size-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors"
              >
                <Instagram className="size-5" />
              </Link>
              <Link
                href="https://t.me/usmanov_dev"
                target="_blank"
                className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors"
              >
                <Send className="size-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="glass size-10 rounded-xl flex items-center justify-center hover:text-primary transition-colors"
              >
                <Github className="size-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platforma</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Xususiyatlar
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-primary transition-colors">
                  Narxlar
                </Link>
              </li>
              <li>
                <Link href="/#stats" className="hover:text-primary transition-colors">
                  Statistika
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-primary transition-colors">
                  Treyderlar fikri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Yordam</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/support/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support/guide" className="hover:text-primary transition-colors">
                  Qo&apos;llanma
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/support/status" className="hover:text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-6">Yangiliklarga a&apos;zo bo&apos;ling</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Eng so&apos;nggi yangiliklar va maqolalarni elektron pochtangizga
              oling.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email manzilingiz"
                className="bg-background border border-border/50 rounded-xl px-4 py-2 text-sm flex-1 outline-none focus:border-primary/50 transition-colors"
                id="footer-email"
              />
              <button onClick={handleFollow} className="cursor-pointer premium-gradient text-white px-6 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition-all">
                A&apos;zo bo&apos;lish
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border/20 flex flex-col md:row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div>© 2026 qaytasavdo. Barcha huquqlar himoyalangan.</div>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Maxfiylik siyosati
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="hover:text-foreground transition-colors"
            >
              Foydalanish shartlari
            </Link>
            <Link
              href="/legal/cookie-policy"
              className="hover:text-foreground transition-colors"
            >
              Kuki siyosati
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
