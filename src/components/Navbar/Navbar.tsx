'use client'

import React, { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import { navigation } from './constants';

const Logo: FC = () => (
  <div className={styles.logoSvg}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фон лотоса */}
      <circle cx="20" cy="20" r="18" fill="#b8a47a" opacity="0.1"/>
      
      {/* Лепестки лотоса - внешний круг */}
      <path d="M20 2C22.5 2 24.5 4 24.5 6.5C24.5 9 22.5 11 20 11C17.5 11 15.5 9 15.5 6.5C15.5 4 17.5 2 20 2Z" fill="#b8a47a" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M20 29C22.5 29 24.5 31 24.5 33.5C24.5 36 22.5 38 20 38C17.5 38 15.5 36 15.5 33.5C15.5 31 17.5 29 20 29Z" fill="#b8a47a" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M2 20C2 17.5 4 15.5 6.5 15.5C9 15.5 11 17.5 11 20C11 22.5 9 24.5 6.5 24.5C4 24.5 2 22.5 2 20Z" fill="#b8a47a" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M29 20C29 17.5 31 15.5 33.5 15.5C36 15.5 38 17.5 38 20C38 22.5 36 24.5 33.5 24.5C31 24.5 29 22.5 29 20Z" fill="#b8a47a" stroke="#b8a47a" strokeWidth="0.5"/>
      
      {/* Лепестки лотоса - средний круг */}
      <path d="M20 8C22.5 8 24.5 10 24.5 12.5C24.5 15 22.5 17 20 17C17.5 17 15.5 15 15.5 12.5C15.5 10 17.5 8 20 8Z" fill="#b8a47a" opacity="0.8" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M20 23C22.5 23 24.5 25 24.5 27.5C24.5 30 22.5 32 20 32C17.5 32 15.5 30 15.5 27.5C15.5 25 17.5 23 20 23Z" fill="#b8a47a" opacity="0.8" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M8 20C8 17.5 10 15.5 12.5 15.5C15 15.5 17 17.5 17 20C17 22.5 15 24.5 12.5 24.5C10 24.5 8 22.5 8 20Z" fill="#b8a47a" opacity="0.8" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M23 20C23 17.5 25 15.5 27.5 15.5C30 15.5 32 17.5 32 20C32 22.5 30 24.5 27.5 24.5C25 24.5 23 22.5 23 20Z" fill="#b8a47a" opacity="0.8" stroke="#b8a47a" strokeWidth="0.5"/>
      
      {/* Лепестки лотоса - внутренний круг */}
      <path d="M20 14C21.5 14 22.5 15 22.5 16.5C22.5 18 21.5 19 20 19C18.5 19 17.5 18 17.5 16.5C17.5 15 18.5 14 20 14Z" fill="#b8a47a" opacity="0.6" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M20 21C21.5 21 22.5 22 22.5 23.5C22.5 25 21.5 26 20 26C18.5 26 17.5 25 17.5 23.5C17.5 22 18.5 21 20 21Z" fill="#b8a47a" opacity="0.6" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M14 20C14 18.5 15 17.5 16.5 17.5C18 17.5 19 18.5 19 20C19 21.5 18 22.5 16.5 22.5C15 22.5 14 21.5 14 20Z" fill="#b8a47a" opacity="0.6" stroke="#b8a47a" strokeWidth="0.5"/>
      <path d="M21 20C21 18.5 22 17.5 23.5 17.5C25 17.5 26 18.5 26 20C26 21.5 25 22.5 23.5 22.5C22 22.5 21 21.5 21 20Z" fill="#b8a47a" opacity="0.6" stroke="#b8a47a" strokeWidth="0.5"/>
      
      {/* Центр лотоса */}
      <circle cx="20" cy="20" r="2" fill="#b8a47a" stroke="#b8a47a" strokeWidth="0.5"/>
      
      {/* Золотая обводка */}
      <circle cx="20" cy="20" r="19" fill="none" stroke="#b8a47a" strokeWidth="1" opacity="0.8"/>
    </svg>
  </div>
);

const Navbar: FC = () => {
  const [isActive, setActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const { pathname } = usePathname();
  const toggleClass = () => setActive(!isActive);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Логотип */}
          <div className={styles.logo}>
            <Link href='/'>
              <Logo />
            </Link>
          </div>

          {/* Навигация */}
          <div className={styles.navMenu}>
            <div className={styles.navList}>
              {navigation.map(({
                id,
                title,
                path,
              }) => (
                <div key={id} className={styles.navItem}>
                  <a
                    href={path}
                    onClick={(e) => handleClick(e, path)}
                    className={styles.anchor}
                  >
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка "Связаться" */}
          <button className={styles.contactBtn} onClick={() => setSidebarOpen(true)}>
            Связаться
          </button>

          {/* Мобильное меню */}
          <div className={styles.mobileMenu}>
            <button
              onClick={toggleClass}
              className={styles.menuButton}
            >
              <span className="sr-only">Открыть главное меню</span>
              <svg
                className={`${isActive ? 'hidden' : 'block'} ${styles.menuIcon}`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
              <svg
                className={`${isActive ? 'block' : 'hidden'} ${styles.menuIcon}`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>

            {/* Мобильное меню панель */}
            <div className={`${isActive ? 'block' : 'hidden'} ${styles.menuPanel}`}>
              <div className={styles.menuList}>
                {navigation.map(({
                  id,
                  title,
                  path,
                }) => (
                  <div key={id} className={styles.menuItem}>
                    <a
                      href={path}
                      onClick={(e) => handleClick(e, path)}
                      className={styles.anchor}
                    >
                      {title}
                    </a>
                  </div>
                ))}
                {/* Кнопка "Связаться" в мобильном меню */}
                <button className={styles.contactBtn} onClick={() => setSidebarOpen(true)}>
                  Связаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
