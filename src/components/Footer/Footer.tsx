'use client';

import React, { useState } from 'react';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaTelegramPlane, FaPhone } from 'react-icons/fa';
import { useNavScroll } from "@/lib/utils";
import { ScrollTopBtn } from "@/components/ui/ScrollTopBtn/ScrollTopBtn";

const Footer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const { handleNav } = useNavScroll();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
              <h3 className={styles.title}>BLAGO YOGA ART</h3>
              <div className={styles.footerSocials}>
                  <a href="#" aria-label="WhatsApp"><FaWhatsapp size={22}/></a>
                  <a href="#" aria-label="Telegram"><FaTelegramPlane size={22}/></a>
                  <a href="tel:+79991234567" aria-label="Телефон"><FaPhone size={22}/></a>
              </div>
          </div>
          <div className={styles.footerLinks}>
              <div>
                  <div className={styles.footerColTitle}></div>
                  <a onClick={() => handleNav('top')} style={{cursor: 'pointer'}}>Главная</a>
                  <a onClick={() => handleNav('services')} style={{cursor: 'pointer'}}>Услуги и цены</a>
                  <a onClick={() => handleNav('reviews')} style={{cursor: 'pointer'}}>Отзывы</a>
                  <button className={styles.contactBtn} onClick={() => setSidebarOpen(true)}>Связаться</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>© 2025 Все права защищены.</span>
      </div>
      <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      <ScrollTopBtn />
    </footer>
  );
};

export default Footer;
