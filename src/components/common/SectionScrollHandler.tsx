'use client';

import React, { useEffect } from 'react';

export const SectionScrollHandler: React.FC = () => {
  useEffect(() => {
    // 1. Check if user navigated here with a queued scroll target in sessionStorage
    const queuedTarget = sessionStorage.getItem('scroll_target');
    if (queuedTarget) {
      sessionStorage.removeItem('scroll_target');
      const timer = setTimeout(() => {
        const el = document.getElementById(queuedTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', '/');
      }, 150);
      return () => clearTimeout(timer);
    }

    // 2. If the user loaded or refreshed with a hash in URL (e.g. /#projects),
    // scroll smoothly to it, then remove the hash from the browser address bar!
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', '/');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Also clean URL if hashchange is ever fired
    const onHashChange = () => {
      if (window.location.hash) {
        const hashId = window.location.hash.replace('#', '');
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', '/');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
};
