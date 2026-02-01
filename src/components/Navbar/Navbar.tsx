'use client'

import React, { FC, useState } from 'react';
import styles from './Navbar.module.scss';
import { useNavScroll} from "@/lib/scroll-utils";
import ContactSidebar from "@/components/ContactSidebar/ContactSidebar";
import Link from "next/link";

const Navbar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { handleNav } = useNavScroll();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.leftGroup}>
            <div className={styles.logo}>
              <Link href="/">
                <img src="/logo.png" className={styles.logoImg}/>
              </Link>
            </div>

            <div className={styles.links}>
              <button className={styles.linksBtn} onClick={() => handleNav('top')}>Главная</button>
              <button className={styles.linksBtn} onClick={() => handleNav('services')}>Услуги и цены</button>
              <button className={styles.linksBtn} onClick={() => handleNav('reviews')}>Отзывы</button>
              <button className={styles.linksBtn}>
                <Link href="/about">Обо мне</Link>
              </button>
              <button className={styles.linksBtn}>
                <Link href="/music">Медитации</Link>
              </button>
            </div>
          </div>

          <div className={styles.burgerMenu}>
            <button className={styles.menuButton} aria-label="Открыть меню" onClick={() => setSidebarOpen(true)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
          <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
