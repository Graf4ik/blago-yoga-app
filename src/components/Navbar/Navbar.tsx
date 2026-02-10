'use client'

import React, { FC, useState } from 'react';
import styles from './Navbar.module.scss';
import { useNavScroll } from '@/lib/scroll-utils';
import ContactSidebar from '@/components/ContactSidebar/ContactSidebar';
import Link from 'next/link';

const Navbar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleNav } = useNavScroll();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.leftGroup}>
              <div className={styles.logo}>
                <Link href="/">
                  <img src="/logo.png" className={styles.logoImg} />
                </Link>
              </div>

              <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
                <button className={styles.linksBtn} onClick={() => { handleNav('top'); toggleMenu(); }}>
                  Главная
                </button>
                <button className={styles.linksBtn} onClick={() => { handleNav('services'); toggleMenu(); }}>
                  Услуги и цены
                </button>
                <button className={styles.linksBtn} onClick={() => { handleNav('reviews'); toggleMenu(); }}>
                  Отзывы
                </button>
                <button className={styles.linksBtn}>
                  <Link href="/about" onClick={toggleMenu}>Обо мне</Link>
                </button>
                <button className={styles.linksBtn}>
                  <Link href="/music" onClick={toggleMenu}>Медитации</Link>
                </button>

                <button
                    className={`${styles.linksBtn} ${styles.mobileQuestionBtn}`}
                    onClick={() => {
                      setSidebarOpen(true);
                      toggleMenu();
                    }}>
                  Задать вопрос
                </button>
              </div>
            </div>

            <button
                className={`${styles.linksBtn} ${styles.questionBtn}`}
                onClick={() => setSidebarOpen(true)}>
              Задать вопрос
            </button>

            <div className={styles.burgerMenu}>
              <button
                  className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
                  aria-label="Открыть меню"
                  onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
