import React from 'react';

export function TypesOfGuidance() {
  return (
    <section className="info" id="guidance">
      <div className="info-head">
        <h2>Types of Guidance We Offer</h2>
        <p>General informational support for connectivity-related topics</p>
      </div>

      <div className="grid-3">
        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <h3>Connectivity Information</h3>
          <p>General information about internet outages and service interruptions</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h3>Performance Guidance</h3>
          <p>Informational support regarding internet speed topics</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </div>
          <h3>Cable TV Information</h3>
          <p>General guidance related to cable and TV service topics.</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          </div>
          <h3>Equipment Information</h3>
          <p>General guidance about router and modem setup processes</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 20h.01" />
              <path d="M2 8.82a15 15 0 0 1 20 0" />
              <path d="M5 12.85a10 10 0 0 1 14 0" />
              <path d="M8.5 16.88a5 5 0 0 1 7 0" />
            </svg>
          </div>
          <h3>WiFi Guidance</h3>
          <p>Informational support for wireless network topics</p>
        </article>

        <article className="info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A2E2" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3>Service Information</h3>
          <p>Help navigating service provider processes and understanding options</p>
        </article>
      </div>
    </section>
  );
}
