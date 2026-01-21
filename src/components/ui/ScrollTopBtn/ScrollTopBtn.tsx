import React, { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.scss";

export const ScrollTopBtn = () => {
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
