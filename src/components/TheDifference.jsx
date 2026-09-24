import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function TheDifference() {
  return (
    <section className="section" id="difference">
      <div className="section-inner">
        <h2 className="section-title diff-title">The {SITE_CONFIG.brandName} difference</h2>
        <div className="diff-grid">
          <article className="diff-card">
            <div>
              <h3>Price lock for<br />up to 3 years</h3>
              <p>No unexpected increases and no surprises on your bill.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline btn-outline--sm">
                Explore packages
              </a>
            </div>
          </article>

          <article className="diff-card">
            <div>
              <h3>100% US-<br />based support</h3>
              <p>Real help from real people, any time you need it.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline btn-outline--sm">
                Contact us
              </a>
            </div>
          </article>

          <article className="diff-card">
            <div>
              <h3>Fiber-Powered<br />Internet</h3>
              <p>Fast, reliable Internet powered by the latest technology.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline btn-outline--sm">
                Explore more
              </a>
            </div>
          </article>

          <article className="diff-card">
            <div>
              <h3>{SITE_CONFIG.brandName}<br />Assist</h3>
              <p>Low-income households can qualify for high-speed Internet starting at $15/mo.</p>
            </div>
            <div>
              <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="btn-outline btn-outline--sm">
                Explore more
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
