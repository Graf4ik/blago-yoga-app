import styles from "./AboutBlock.module.scss";
import React from "react";

export const AboutBlock = () => (
    <>
        <section className={styles.aboutContent}>
            <div className={styles.aboutImgWrap}>
                <img src="/photos/1.jpg" alt="Екатерина Благоева" className={styles.aboutImg} />
            </div>
            <div className={styles.aboutTextWrap}>
                <div className={styles.aboutText}>
                    <p>
                        <strong>BlagoYogaArt — это искусство преобразования реальности</strong> через тело, цвет и звук.
                    </p>
                    <p>
                        Меня зовут Екатерина <em>(Nadaroopa Dasi)</em>, и я — творец интегративных практик.
                        Я не просто преподаю йогу, пишу картины или пою —
                        <strong>я объединяю эти направления в единое пространство трансформации.</strong>
                    </p>
                    <p>
                        Я создаю мосты между материальным и духовным,
                        помогая вам раскрыть внутреннюю силу <strong>(Мага) </strong>
                        и выстроить жизнь, наполненную смыслом, изобилием и гармонией.
                    </p>
                    <p>
                        <strong>Моя миссия</strong> — быть проводником,
                        который помогает каждому осознать и воплотить свою
                        <em>уникальную формулу счастья</em>.
                    </p>
                </div>
            </div>
        </section>

        <section className={styles.aboutContent}>
            <div className={styles.aboutTextWrap}>
                Обо мне
            </div>
            <div className={styles.aboutImgWrap}>
                <img src="/photos/7.jpg" alt="Практика" className={styles.aboutImg} />
            </div>
        </section>
    </>
);