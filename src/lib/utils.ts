'use client'

import { usePathname, useRouter } from 'next/navigation';

export const useNavScroll = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (id: string) => {
    if (pathname !== '/') {
      router.push('/');

      setTimeout(() => {
        handleScroll(id);
      }, 100);
    } else {
      handleScroll(id);
    }
  };

  return { handleNav };
};

const handleScroll = (id: string): void => {
  const offset = 92;
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
};
