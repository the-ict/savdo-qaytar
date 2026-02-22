"use client"

import React from 'react';
import Link from 'next/link';
import {
  Button
} from '@/shared/ui/button';
import {
  ThemeToggle
} from '@/shared/ui/theme-toggle';
import {
  cn
} from '@/shared/lib/utils';


import { CandlestickChart } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const pathname = usePathname();


  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled ? 'glass py-3 border-border/50' : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="custom-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-10 premium-gradient rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-primary/30">
            <CandlestickChart className="size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none text-foreground">
              QAYTA<span className="text-primary italic">SAVDO</span>
            </span>
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-none mt-1">
              Smart Replay
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Xususiyatlar', id: 'features' },
            { name: 'Statistika', id: 'stats' },
            { name: 'Narxlar', id: 'pricing' },
            { name: 'Sharhlar', id: 'reviews' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden sm:inline-flex font-bold">
            Kirish
          </Button>
          <Button className="premium-gradient text-white border-0 shadow-lg hover:shadow-primary/25 rounded-xl px-6 font-bold h-11">
            Boshlash
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
