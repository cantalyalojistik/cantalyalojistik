'use client';

import { useEffect } from 'react';

const conversionDestination = 'AW-18420736857/-kbvCIOJu-scENnG2M9E';
const sessionConversionKey = 'cantalya-contact-conversion-reported';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });

  return window.gtag;
}

export function reportContactConversion(method: 'phone' | 'whatsapp') {
  if (typeof window === 'undefined') return;

  const gtag = getGtag();

  gtag('event', `${method}_click`, {
    event_category: 'contact',
    contact_method: method,
  });

  if (window.sessionStorage.getItem(sessionConversionKey)) return;

  window.sessionStorage.setItem(sessionConversionKey, method);
  gtag('event', 'conversion', {
    send_to: conversionDestination,
    value: 1,
    currency: 'TRY',
  });
}

export function GoogleAdsConversionTracker() {
  useEffect(() => {
    function handleContactClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a');
      const href = link?.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        reportContactConversion('phone');
      } else if (href.includes('wa.me/')) {
        reportContactConversion('whatsapp');
      }
    }

    document.addEventListener('click', handleContactClick, true);
    return () => document.removeEventListener('click', handleContactClick, true);
  }, []);

  return null;
}
