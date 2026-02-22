'use client';

import React from 'react';
import { Button } from '@/shared/ui/button';
import { Check, Zap } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Boshlovchilar uchun',
    features: [
      '1ta aktiv (EUR/USD)',
      'Cheklangan tarix',
      'Kunlik 1 soat replay',
      'Basic analitika',
    ],
    cta: 'Hozir boshlang',
    popular: false,
  },
  {
    name: 'Start',
    price: '$29',
    description: 'Jiddiy treyderlar uchun',
    features: [
      'Barcha FX aktivlar',
      "To'liq tarix",
      'Cheksiz replay',
      'Advanced analitika',
      'Multi-chart support',
    ],
    cta: "Sinab ko'ring",
    popular: true,
  },
  {
    name: 'Premium',
    price: '$49',
    description: 'Professional institutlar uchun',
    features: [
      'FX + Crypto + Stocks',
      'API access',
      'Shaxsiy maslahatchi',
      'Premium indikatorlar',
      'Portfolio tahlili',
    ],
    cta: 'Sotib oling',
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card/30">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gradient">
            Mos narxni tanlang
          </h2>
          <p className="text-muted-foreground text-lg">
            Sizning darajangizga mos keladigan tariflar. Bepul boshlang va
            xohlagan vaqtda yangilang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:-translate-y-2',
                plan.popular
                  ? 'bg-foreground text-background shadow-2xl scale-105 z-10 shadow-primary/20'
                  : 'glass hover:border-primary/30',
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 premium-gradient text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Zap className="size-3 fill-current" /> ENG MASHHUR
                </div>
              )}

              <div className="mb-8">
                <div
                  className={cn(
                    'text-xl font-bold mb-2',
                    plan.popular ? 'text-primary' : 'text-primary',
                  )}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span
                    className={cn(
                      'text-sm',
                      plan.popular
                        ? 'text-background/60'
                        : 'text-muted-foreground',
                    )}
                  >
                    /oy
                  </span>
                </div>
                <p
                  className={cn(
                    'text-sm mt-4',
                    plan.popular
                      ? 'text-background/60'
                      : 'text-muted-foreground',
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className={cn(
                        'size-5 rounded-full flex items-center justify-center shrink-0',
                        plan.popular ? 'bg-primary/30' : 'bg-primary/50',
                      )}
                    >
                      <Check
                        className={cn(
                          'size-3',
                          plan.popular ? 'text-white' : 'text-primary',
                        )}
                      />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  'w-full h-12 rounded-2xl font-bold text-sm transition-all',
                  plan.popular
                    ? 'premium-gradient text-white border-0 hover:scale-105'
                    : 'variant-outline border-2 border-primary/20 hover:border-primary/40',
                )}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
