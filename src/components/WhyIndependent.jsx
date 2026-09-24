import React from 'react';

export function WhyIndependent() {
  return (
    <section className="info" id="why-independent">
      <div className="info-head why-head">
        <h2>Why Independent Support Matters</h2>
        <p>As an independent third-party service, we provide unbiased assistance focused solely on helping you resolve your connectivity issues.</p>
      </div>

      <div className="grid-2 why-grid">
        <article className="info-card">
          <h3>No Sales Pressure</h3>
          <p>We don't push upgrades or new plans.</p>
        </article>
        <article className="info-card">
          <h3>Unbiased Guidance</h3>
          <p>Our advice is based on your needs, not commissions.</p>
        </article>
        <article className="info-card">
          <h3>Quick Response</h3>
          <p>Skip provider hold times and automated systems.</p>
        </article>
        <article className="info-card">
          <h3>Clear Communication</h3>
          <p>We explain issues in simple, straightforward terms.</p>
        </article>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="stat-number">5k+</div>
          <div className="stat-label">Issues Resolved</div>
        </div>
        <div className="stat">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">Independent</div>
        </div>
      </div>
    </section>
  );
}
