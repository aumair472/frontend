import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Gig speeds for <br className="hero-br" /> $60/month</h1>
          <p className="hero-desc">
            Powerful speeds and whole-home coverage – get {SITE_CONFIG.brandName} Gig with Advanced WiFi
            included. No contracts, no hidden fees.
          </p>
        </div>
        <div className="hero-mobile-img">
          <img src="/assets/hero.jpg" alt={`${SITE_CONFIG.brandName} home internet`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
