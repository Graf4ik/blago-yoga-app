'use client';

import React, { useState, useEffect } from 'react';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaTelegramPlane, FaPhone } from 'react-icons/fa';

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button className={styles.scrollTopBtn} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Наверх">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#b8a47a"/>
        <path d="M16 22V10M16 10L10 16M16 10L22 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const Footer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          {/* SVG круг-логотип */}
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="45" r="36" stroke="#fff" strokeWidth="4" fill="none" />
            <line x1="18" y1="45" x2="72" y2="45" stroke="#fff" strokeWidth="3" />
          </svg>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <div className={styles.footerColTitle}></div>
            <a href="#">Digital Studio</a>
            <a href="#">NYC Studio</a>
            <button className={styles.contactBtn} onClick={() => setSidebarOpen(true)}>Связаться</button>
            <a href="#">The Method</a>
            <a href="#">The Teachers</a>
            <a href="#">Retreatments</a>
          </div>
          <div>
            <a href="#">Contact Us</a>
            <a href="#">Code of Conduct</a>
          </div>
          <div className={styles.footerSubscribe}>
            <span>Подпишись на группу в телеграмме </span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>© 2025 Все права защищены.</span>
        <div className={styles.footerSocials}>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp size={22} /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane size={22} /></a>
          <a href="tel:+79991234567" aria-label="Телефон"><FaPhone size={22} /></a>
        </div>
      </div>
      <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ScrollTopBtn />
    </footer>
  );
};

export default Footer; 