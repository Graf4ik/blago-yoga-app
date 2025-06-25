'use client';

import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContacts}>
        <div>
          <div className={styles.footerLabel}>Телефон</div>
          <a href="tel:+79991234567" className={styles.footerLink}>+7 (999) 123-45-67</a>
        </div>
        <div>
          <div className={styles.footerLabel}>Почта</div>
          <a href="mailto:katya@yoga.ru" className={styles.footerLink}>katya@yoga.ru</a>
        </div>
        <div>
          <div className={styles.footerLabel}>WhatsApp</div>
          <a href="https://wa.me/79991234567" className={styles.footerLink}>WhatsApp</a>
        </div>
      </div>
      <div className={styles.footerCopy}>© {new Date().getFullYear()} Екатерина Благоева</div>
      <button className={styles.scrollTopBtn} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Наверх">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="14" fill="#b8a47a"/>
          <path d="M14 19V9M14 9L9 14M14 9L19 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer; 