import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function WhatWeDoNotDo() {
  return (
    <section className="info info--narrow" id="what-we-dont-do">
      <div className="notdo-head">
        <h2>What We Do NOT Do</h2>
        <p>To avoid confusion, please note the following limitations:</p>
      </div>

      <div className="notdo-list">
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          We are NOT an Internet Service Provider (ISP)
        </div>
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          We do NOT provide official customer support for any brand
        </div>
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          We are NOT affiliated, authorized, or endorsed by any telecom or cable company
        </div>
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          We do NOT sell internet or cable subscriptions
        </div>
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          We do NOT provide guaranteed technical fixes
        </div>
        <div className="notdo-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          All mentions of providers, if any, are strictly for informational purposes only
        </div>
      </div>

      <div className="notice">
        <div className="notice-title">⚠️ IMPORTANT NOTICE</div>
        <p>{SITE_CONFIG.brandName} is an independent third-party service assistance provider. We are not affiliated with,
          authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if
          mentioned, are used strictly for informational purposes only.</p>
      </div>
    </section>
  );
}
