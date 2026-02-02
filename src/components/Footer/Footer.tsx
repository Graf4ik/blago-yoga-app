'use client';

import React, { useState } from 'react';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaTelegramPlane, FaPhone, FaVk, FaYoutube } from 'react-icons/fa';
import { useNavScroll } from "@/lib/scroll-utils";
import { ScrollTopBtn } from "@/components/ui/ScrollTopBtn/ScrollTopBtn";
import Link from "next/link";

const Footer = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { handleNav } = useNavScroll();

    return (
        <footer className={styles.footer}>
            <h3 className={styles.logo}>BLAGO YOGA ART</h3>

            <div className={styles.footerContent}>

                <div className={styles.footerCol}>
                    <span className={styles.colTitle}>Я в соцсетях</span>
                    <div className={styles.footerSocials}>
                        <a href="https://t.me/BlagoYoga108" target="_blank" aria-label="Telegram"><FaTelegramPlane size={22} /></a>
                        <a href="https://wa.me/79291891973" target="_blank" aria-label="WhatsApp"><FaWhatsapp size={22} /></a>
                        <a href="https://vk.ru/club225967703" target="_blank" aria-label="VK"><FaVk size={22} /></a>
                        <a href="https://www.youtube.com/@blagoyoga108" target="_blank" aria-label="Youtube"><FaYoutube size={22} /></a>
                        <a href="tel:+79991234567" aria-label="Телефон"><FaPhone size={22} /></a>
                    </div>
                    <div className={styles.footerChannelsSocials}>
                        <Link href="https://t.me/BlagoYoga108" target="_blank">Телеграм BlagoYogaArt</Link>
                        <Link href="https://t.me/+OYydpDiJvnVlNzky" target="_blank">Телеграм Ом-чантинг</Link>
                    </div>
                </div>

                <div className={styles.footerCol}>
                    <span className={styles.colTitle}>Навигация</span>
                    <a onClick={() => handleNav('top')}>Главная</a>
                    <a onClick={() => handleNav('services')}>Услуги и цены</a>
                    <a onClick={() => handleNav('reviews')}>Отзывы</a>
                    <Link href="/about">Обо мне</Link>
                    <Link href="/music">Медитации</Link>
                    <a onClick={() => setSidebarOpen(true)}>Задать вопрос</a>
                </div>

                <div className={styles.footerCol}>
                    <span className={styles.colTitle}>Документы</span>
                    <Link href="/privacy-policy">Политика конфиденциальности</Link>
                    <Link href="/data-consent">Согласие на обработку персональных данных</Link>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <span className={styles.copyright}>© 2026 Все права защищены.</span>
            </div>

            <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <ScrollTopBtn />
        </footer>
    );
};

export default Footer;
