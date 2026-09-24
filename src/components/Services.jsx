import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <h2 className="section-title deals-title">Explore {SITE_CONFIG.brandName} services</h2>
        <p className="deals-sub">Start with Internet, then add Mobile and TV to build the plan that’s right for you.</p>

        <div className="services-grid">
          <article className="service-card">
            <div>
              <div className="service-head">
                <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.55a11 11 0 0 1 14 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                </svg>
                <h3>Internet</h3>
              </div>
              <p className="service-desc">Experience powerful speeds and whole-home coverage.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline">
                Explore Internet
              </a>
            </div>
          </article>

          <article className="service-card">
            <div>
              <div className="service-head">
                <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
                </svg>
                <h3>Mobile</h3>
              </div>
              <p className="service-desc">Try {SITE_CONFIG.brandName} Mobile free for a year when you add Internet.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline">
                Explore Mobile
              </a>
            </div>
          </article>

          <article className="service-card">
            <div>
              <div className="service-head">
                <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <polygon points="10 8 16 11 10 14 10 8" fill="#0066d4" stroke="none" />
                </svg>
                <h3>Streaming TV</h3>
              </div>
              <p className="service-desc">Enjoy live TV with top apps included at no extra cost.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline">
                Explore TV
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
