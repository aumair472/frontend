import React, { useState } from 'react';

export function ZipChecker({ onValidZip, title, subtitle }) {
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZip(val);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zip.length === 5) {
      setError('');
      onValidZip(zip);
    } else {
      setError('Please enter a valid 5-digit US ZIP code.');
    }
  };

  return (
    <section className="zip-finder">
      <div className="zip-inner">
        <div className="zip-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 22s8-7.05 8-13a8 8 0 1 0-16 0c0 5.95 8 13 8 13Z" stroke="#34A2E2" strokeWidth="1.6" />
            <circle cx="12" cy="9" r="2.6" stroke="#34A2E2" strokeWidth="1.6" />
          </svg>
        </div>
        <div className="zip-text">
          <h2>{title || 'Find the best providers in your area'}</h2>
          <p>{subtitle || 'Over 1.5 million customers connected across the US'}</p>
        </div>
        <form className="zip-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            value={zip}
            onChange={handleChange}
            placeholder="Enter 5-digit ZIP code"
            aria-label="Enter 5-digit ZIP code"
            autoComplete="postal-code"
            required
          />
          <button type="submit" className="zip-submit">Check Availability</button>
        </form>
      </div>
      {error && (
        <div style={{ color: 'var(--danger)', fontSize: '13px', textAlign: 'center', marginTop: '6px' }} role="alert">
          {error}
        </div>
      )}
    </section>
  );
}
