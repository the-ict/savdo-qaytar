'use client';

import React from 'react';
import {
  Hero
} from './Hero';
import {
  WhyUs
} from './WhyUs';
import {
  Statistics
} from './Statistics';
import {
  Pricing
} from './Pricing';
import {
  Reviews
} from './Reviews';

const Welcome = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Hero />
      <WhyUs />
      <Statistics />
      <Pricing />
      <Reviews />
    </div>
  );
};

export default Welcome;
