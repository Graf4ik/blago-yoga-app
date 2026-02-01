import {FaTelegramPlane, FaVk, FaWhatsapp, FaYoutube} from "react-icons/fa";
import styles from "./HeroBlock.module.scss"
import React from "react";

export const HeroBlock = () => (
    <section className={styles.heroContent} id="home">
        <div className={styles.heroInner}>
            <div className={styles.heroStatusRef}>ЙОГА • МЕДИТАЦИИ • КАРТИНЫ • МУЗЫКА</div>
            <h1 className={styles.heroNameRef}>Екатерина Благоева</h1>
            <div className={styles.heroIcons}>
                <a href="https://t.me/EkaterinaBlagoeva" target="_blank" aria-label="Telegram"><FaTelegramPlane/></a>
                <a href="https://wa.me/79291891973" target="_blank" aria-label="WhatsApp"><FaWhatsapp/></a>
                <a href="https://vk.ru/club225967703" target="_blank" aria-label="VK"><FaVk/></a>
                <a href="https://www.youtube.com/@blagoyoga108" target="_blank" aria-label="Youtube"><FaYoutube/></a>
            </div>
        </div>
    </section>
);
