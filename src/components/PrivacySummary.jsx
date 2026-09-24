import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function PrivacySummary() {
  return (
    <section className="privacy-summary" id="privacy-policy">
      <div className="privacy-summary-header">
        <div className="privacy-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Privacy &amp; Data Protection
        </div>
        <h2>Privacy Policy Summary</h2>
        <p>{SITE_CONFIG.brandName} respects your privacy. Here is a clear summary of how we collect, use, and protect your
          personal information across our website and consultation assistance services.</p>
      </div>

      <div className="privacy-grid">
        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h3>1. Information We Collect</h3>
          <p>We only collect information reasonably necessary to assist you—including your name, phone number, email
            address, inquiry or connectivity issue details, and standard website analytics.</p>
        </article>

        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3>2. How We Use Information</h3>
          <p>We use your information to respond to consultation requests, provide requested connectivity guidance,
            communicate about your inquiry, improve our website, and prevent fraud or abuse.</p>
        </article>

        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <h3>3. Zero Data Sale &amp; Sharing</h3>
          <p><strong>We do not sell your personal information.</strong> Data is shared only with vetted operational
            service providers (hosting, telephone, CRM, security) to provide services to you, or when required by law.
          </p>
        </article>

        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.12-4.18 2 2 0 0 1 4.11-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3>4. Telephone &amp; SMS Terms</h3>
          <p>If you provide your phone number, we use it only for requested communications. You may opt out of
            promotional SMS at any time by replying <strong>STOP</strong>. Message &amp; data rates may apply.</p>
        </article>

        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <h3>5. Cookies &amp; Analytics</h3>
          <p>We use standard cookies and analytics tools to measure performance and improve browsing experience. You can disable or manage cookies anytime via browser settings.</p>
        </article>

        <article className="privacy-card">
          <div className="privacy-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h3>6. Security &amp; Your Rights</h3>
          <p>We apply administrative and technical safeguards to keep your data secure. You have the right to request
            access, correction, or deletion of your personal data, or opt out of marketing communications.</p>
        </article>
      </div>

      <div className="privacy-footer-banner">
        <div className="privacy-footer-text">
          <strong>{SITE_CONFIG.brandName} Privacy Policy &middot; Effective September 2026</strong>
          <p>To submit a privacy inquiry, request data deletion, or ask any questions, contact our team:</p>
        </div>
        <div className="privacy-contact-links">
          <a href={`mailto:${SITE_CONFIG.email}`} className="privacy-contact-btn privacy-contact-btn--secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{SITE_CONFIG.email}</span>
          </a>
          <a href={`tel:${SITE_CONFIG.hotline.tel}`} className="privacy-contact-btn privacy-contact-btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.12-4.18 2 2 0 0 1 4.11-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{SITE_CONFIG.hotline.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
