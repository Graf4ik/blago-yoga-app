import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import styles from "./HeroBlock.module.scss"
import React from "react";

export const HeroBlock = () => (
    <section className={styles.heroContent} id="home">
        <div className={styles.heroInner}>
            <div className={styles.heroStatusRef}>ЙОГА • МЕДИТАЦИИ • КАРТИНЫ • МУЗЫКА</div>
            <h1 className={styles.heroNameRef}>Екатерина Благоева</h1>
            <div className={styles.heroIcons}>
                <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
        </div>
    </section>
);
