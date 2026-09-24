import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function WhatWeDo() {
  return (
    <section className="info" id="what-we-do">
      <div className="info-head">
        <h2>What We Do</h2>
        <p>Our role is limited to independent guidance and assistance only</p>
      </div>

      <div className="grid-2">
        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path
                d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
              <line x1="2" y1="20" x2="2.01" y2="20" />
            </svg>
          </div>
          <h3>Understand Service Options</h3>
          <p>Get clear explanations about internet and broadband service options available to you through {SITE_CONFIG.brandName}.</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <h3>Practical Connectivity Guidance</h3>
          <p>Receive practical guidance on common connectivity issues and topics from the {SITE_CONFIG.brandName} support team.</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3>Navigate Provider Processes</h3>
          <p>Learn how to effectively navigate service provider processes and procedures with help from {SITE_CONFIG.brandName}.</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </div>
          <h3>Cable TV Support Information</h3>
          <p>Receive general informational support related to cable TV service topics provided by {SITE_CONFIG.brandName}.</p>
        </article>
      </div>

      <div className="info-note">Our role is limited to independent guidance and assistance only.</div>
    </section>
  );
}
