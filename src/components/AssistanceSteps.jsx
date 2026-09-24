import React from 'react';

export function AssistanceSteps() {
  return (
    <section className="info" id="how-it-works">
      <div className="info-head">
        <h2>How Our Assistance Works</h2>
        <p>Fast, simple help when your internet is down or not connecting</p>
      </div>

      <div className="grid-4">
        <article className="step-card">
          <span className="step-badge">Step 1</span>
          <h3>Contact Our Team</h3>
          <p>Call us immediately when experiencing internet outages, WiFi problems, or connectivity issues. We're available 24/7.</p>
        </article>
        <article className="step-card">
          <span className="step-badge">Step 2</span>
          <h3>Describe Your Issue</h3>
          <p>Tell us about your internet trouble - whether it's down completely, WiFi keeps dropping, slow speeds, or connection problems.</p>
        </article>
        <article className="step-card">
          <span className="step-badge">Step 3</span>
          <h3>Get Instant Guidance</h3>
          <p>Receive immediate troubleshooting steps, outage information for your area, and expert guidance to resolve your connectivity issues.</p>
        </article>
        <article className="step-card">
          <span className="step-badge">Step 4</span>
          <h3>Get Back Online</h3>
          <p>Follow our expert recommendations to restore your internet connection or get directed to the right provider support resources.</p>
        </article>
      </div>
    </section>
  );
}
