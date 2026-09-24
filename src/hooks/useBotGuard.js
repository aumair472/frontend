import { useState, useEffect } from 'react';

/**
 * useBotGuard
 * Zero-SEO Defense Barrier:
 * Prevents automated scrapers, headless crawlers, and search engine bots
 * from extracting marketing copy or keywords from the DOM.
 */
export function useBotGuard() {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // In local development mode, allow immediate preview and testing
    if (import.meta.env.DEV) {
      setIsAllowed(true);
      return;
    }

    // 1. Check for automated webdriver flag (Googlebot WRS, Selenium, Puppeteer)
    const isWebDriver = !!navigator.webdriver;

    // 2. Check user-agent patterns for crawlers or spiders
    const ua = (navigator.userAgent || '').toLowerCase();
    const botPatterns = [
      'googlebot',
      'bingbot',
      'baiduspider',
      'yandex',
      'duckduckbot',
      'slurp',
      'headlesschrome',
      'phantomjs',
      'lighthouse',
      'semrush',
      'ahrefs',
      'bytespider'
    ];
    const isBotUA = botPatterns.some((pattern) => ua.includes(pattern));

    // If bot detected, do not render marketing copy
    if (isWebDriver || isBotUA) {
      console.warn('Access restricted');
      setIsAllowed(false);
      return;
    }

    // Legitimate human visitor confirmed
    setIsAllowed(true);
  }, []);

  return isAllowed;
}
