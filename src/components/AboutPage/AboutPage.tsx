'use client';

import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import ContactSidebar from "@/components/ContactSidebar/ContactSidebar";

const AboutPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <section className={styles.aboutPage}>
            <div className={styles.hero}>
                <h1 className={styles.name}>Екатерина Благоева</h1>
                <p className={styles.alias}>Nadaroopa Dasi</p>

                <p className={styles.heroText}>
                    Создательница <strong>BlagoYogaArt</strong>.
                    Там, где йога, искусство и звук становятся языком исцеления.
                </p>

                <p className={styles.heroSubtext}>
                    Ваш проводник в мир целостного преображения, где практика выходит
                    за рамки коврика, а гармония становится образом жизни.
                </p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    Моя философия — интеграция как ключ к целостности
                </h2>

                <p className={styles.text}>
                    Я создаю пространства, где встречаются три вектора исцеления:
                </p>

                <div className={styles.triad}>
                    <div className={styles.triadItem}>
                        <h3>Тело</h3>
                        <p>
                            Анатомически точные, безопасные практики йоги
                            для силы, гибкости и осознанности.
                        </p>
                    </div>

                    <div className={styles.triadItem}>
                        <h3>Сознание</h3>
                        <p>
                            Глубина мантр, резонанс ОМ-чантинга и целительные
                            частоты саунд-хилинга.
                        </p>
                    </div>

                    <div className={styles.triadItem}>
                        <h3>Энергия</h3>
                        <p>
                            Энергетические картины как форма медитации
                            и отражение внутренних состояний.
                        </p>
                    </div>
                </div>

                <p className={styles.text}>
                    Эта триада — основа уникальной методологии <strong>BlagoYogaArt</strong>,
                    позволяющей работать с человеком на всех уровнях одновременно.
                </p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    Мой профессиональный путь
                </h2>

                <div className={styles.experience}>
                    <div className={styles.expItem}>
                        <h3>Дисциплина тела и стресс современной жизни</h3>
                        <p>
                            15 лет спортивных танцев + 10 лет в IT-корпорациях.
                            Я понимаю тело как инструмент и знаю цену выгоранию
                            и хроническому стрессу.
                        </p>
                    </div>

                    <div className={styles.expItem}>
                        <h3>Образование и глубина практики</h3>
                        <ul>
                            <li>Хатха-йога (YTTC-300, Федерация Йоги России)</li>
                            <li>Кундалини-йога, йога-нидра</li>
                            <li>Ученица Парамахамсы Шри Свами Вишвананды</li>
                            <li>Организатор ретритов и автор онлайн-курсов</li>
                        </ul>
                    </div>

                    <div className={styles.expItem}>
                        <h3>Признание и доверие</h3>
                        <ul>
                            <li>Московский урбанистический форум, ВДНХ</li>
                            <li>Радио «Серебряный дождь»</li>
                            <li>Практики в Таиланде и Болгарии</li>
                            <li>Топ-преподаватель проекта Департамента спорта РФ</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    Мой образ жизни — продолжение практики
                </h2>

                <p className={styles.text}>
                    Я следую принципам осознанного потребления, веганского питания
                    и трезвости. Это моя личная садхана — источник энергии и ясности,
                    которые я передаю в каждой практике.
                </p>

                <p className={styles.text}>
                    Ваше развитие происходит в экологичном, чистом и
                    безопасном пространстве.
                </p>
            </div>

            <div className={styles.cta}>
                <p className={styles.ctaText}>
                    Готовы почувствовать интегративный подход на собственном опыте?
                </p>

                <button className={styles.ctaButton} onClick={() => setSidebarOpen(true)}>
                    Записаться на бесплатное пробное занятие
                </button>
            </div>
            <ContactSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
        </section>
    );
};

export default AboutPage;
