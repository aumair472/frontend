import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: `What exactly does ${SITE_CONFIG.brandName} do?`,
      a: `${SITE_CONFIG.brandName} provides independent, third-party guidance and troubleshooting assistance for internet, WiFi, and cable connectivity issues.`
    },
    {
      q: 'Are you affiliated with my internet or cable provider?',
      a: 'No. We are an independent service provider and are not affiliated with, authorized by, or endorsed by any telecom, internet, or cable company.'
    },
    {
      q: 'How much does your service cost?',
      a: 'Our phone support and initial connectivity assistance options are explained directly when you contact our team.'
    },
    {
      q: 'Can you fix my internet connection remotely?',
      a: 'We provide step-by-step troubleshooting guidance over the phone to help resolve connection issues, equipment setups, and outage queries.'
    },
    {
      q: 'Do I need to cancel my current service?',
      a: 'No. We do not sell internet or cable services and we are not asking you to change providers. We help you resolve issues with your existing service.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="info info--narrow" id="faq">
      <div className="info-head faq-head">
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to common questions</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={idx} style={{ marginBottom: '12px' }}>
              <button
                type="button"
                className="faq-q"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 600,
                  color: 'inherit',
                  padding: '16px 20px'
                }}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform .2s ease',
                    flexShrink: 0,
                    width: '20px',
                    height: '20px'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && (
                <div className="faq-a" style={{ padding: '0 20px 16px 20px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
