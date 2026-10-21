'use client';

import { useCallback, MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useNav } from '@/contexts/NavContext';
import { resolveNavHref } from '@/utils/navLink';
import { scrollToTarget, scrollToBottom } from '@/utils/scrollTo';

/**
 * 헤더·Contact 메뉴 공통 앵커 이동 로직
 * - 홈: 해당 섹션으로 부드럽게 스크롤 (#contact 는 페이지 맨 아래)
 * - 상세 페이지: 홈의 섹션으로 라우팅 (#contact 는 같은 페이지 맨 아래)
 */
export function useSectionNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { setActiveLink } = useNav();
  const isHome = pathname === '/';

  const getHref = useCallback((url: string) => resolveNavHref(url, isHome), [isHome]);

  const handleAnchorClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, url: string) => {
      if (!url.startsWith('#') || url === '#') return;

      e.preventDefault();
      setActiveLink(url);

      if (url === '#contact') {
        scrollToBottom();
        return;
      }

      if (!isHome) {
        router.push(resolveNavHref(url, false));
        return;
      }

      const headerHeight = document.getElementById('header')?.offsetHeight ?? 0;
      scrollToTarget(url, { offsetY: -headerHeight });
    },
    [isHome, router, setActiveLink],
  );

  return { isHome, getHref, handleAnchorClick };
}
