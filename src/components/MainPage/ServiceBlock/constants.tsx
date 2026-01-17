import React from 'react';
import styles from "./ServiceBlock.module.scss";
import { AccordionItem } from "@/components/ui/Accordion/Accordion";

export const accordionItems: AccordionItem[] = [
    {
        header: "Персональные занятия",
        content: (
            <>
                <p className={styles.description}>
                    Индивидуальные занятия по Хатха-йоге, кундалини-йоге и медитации.
                </p>
                <p className={styles.price}>2000 ₽ / занятие</p>
                <p className={styles.subscriptionPrice}>1800 ₽ / занятие по абонементу</p>
            </>
        ),
    },
    {
        header: "Групповые занятия онлайн",
        content: (
            <>
                <p className={styles.description}>
                    Групповые занятия по Хатха-йоге, кундалини-йоге и медитации.
                </p>
                <p className={styles.price}>2000 ₽ / занятие</p>
                <p className={styles.subscriptionPrice}>1700 ₽ / занятие по абонементу</p>
            </>
        ),
    },
    {
        header: "ОМ-чантинг и sound healing",
        content: (
            <>
                <p className={styles.description}>
                    ОМ-чантинг и практики работы с голосом для снятия стресса и гармонизации энергии.
                </p>
                <p className={styles.price}>1500 ₽ / занятие</p>
                <p className={styles.subscriptionPrice}>1400 ₽ / занятие по абонементу</p>
            </>
        ),
    },
    {
        header: "Персональные консультации",
        content: (
            <>
                <p className={styles.description}>
                    Индивидуальный подход с учетом целей, физического и эмоционального состояния.
                </p>
                <p className={styles.price}>3000 ₽ / консультация</p>
                <p className={styles.subscriptionPrice}>2700 ₽ / консультация по абонементу</p>
            </>
        ),
    },
    {
        header: "Индивидуальный ретрит",
        content: (
            <>
                <p className={styles.description}>
                    Индивидуальный подход с учетом целей, физического и эмоционального состояния.
                </p>
                <p className={styles.price}>3000 ₽ / консультация</p>
                <p className={styles.subscriptionPrice}>2700 ₽ / консультация по абонементу</p>
            </>
        ),
    },
    {
        header: "Корпоративная йога",
        content: (
            <>
                <p className={styles.description}>
                    Групповые занятия по Хатха-йоге, кундалини-йоге и медитации.
                </p>
                <p className={styles.price}>2000 ₽ / занятие</p>
                <p className={styles.subscriptionPrice}>1800 ₽ / занятие по абонементу</p>
            </>
        ),
    },
    {
        header: "Индивидуальные сессия sound healing и медитации с участием Ivailo Blagoev",
        content: (
            <>
                <p className={styles.description}>
                    Индивидуальная сессия sound healing и медитации.
                </p>
                <p className={styles.price}>2000 ₽ / занятие</p>
                <p className={styles.subscriptionPrice}>1800 ₽ / занятие по абонементу</p>
            </>
        ),
    },
];
