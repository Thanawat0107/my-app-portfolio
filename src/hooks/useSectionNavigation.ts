'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

export const useSectionNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, onAfterNavigate?: () => void) => {
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) {
        if (onAfterNavigate) onAfterNavigate();
        return;
      }

      const targetId = href.substring(hashIndex + 1);
      e.preventDefault();

      if (pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        // Always strip '#' and keep clean URL '/'
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, '', '/');
        }
        if (onAfterNavigate) onAfterNavigate();
      } else {
        // When navigating from a subpage like /projects/[slug] to /
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('scroll_target', targetId);
        }
        if (onAfterNavigate) onAfterNavigate();
        router.push('/');
      }
    },
    [pathname, router]
  );

  return { navigateToSection };
};
