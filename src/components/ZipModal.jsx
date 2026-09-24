import React, { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export function ZipModal({ isOpen, onClose, zipCode }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle ESC key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus the call CTA button on open
    const timer = setTimeout(() => {
      const btn = modalRef.current?.querySelector('.hotline-btn');
      if (btn) btn.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal is-open"
      id="zip-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="zip-modal-title"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) onClose();
      }}
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="modal-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#34A2E2"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="modal-congrats" id="zip-modal-title">
          <strong>Congratulations!</strong>
        </div>
        <p className="modal-agents">
          5 agents are available {zipCode ? `in ${zipCode}` : 'in your area'}
        </p>
        <a
          href={`tel:${SITE_CONFIG.hotline.tel}`}
          className="hotline-btn"
          data-label="Connect Hotline"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Connect Hotline
        </a>
      </div>
    </div>
  );
}
