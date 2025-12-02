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
                <div className={styles.aboutText}>
                    <p>
                        <strong>С детства меня вела потребность не просто изучать мир, а создавать его заново — через движение, цвет и звук.</strong>
                    </p>
                    <p>
                        Я поняла, что это не три разных увлечения, а <strong>три ключа к единой цели: пробуждению творца в каждом из нас.</strong>
                    </p>
                    <p>
                        <strong>BlagoYogaArt</strong> — это материализованное намерение моего «Я». Это не проект в классическом понимании, а живая система, где:
                    </p>
                    <ul>
                        <li><strong>Йога (Тело)</strong> — заземление вашей воли и построение прочного фундамента для свершений.</li>
                        <li><strong>Живопись (Цвет)</strong> — язык души, который позволяет проявить глубинные энергии и желания.</li>
                        <li><strong>Вокал и Звук</strong> — вибрация, которая настраивает систему на гармонию и разрушает старые блоки.</li>
                    </ul>
                    <p>
                        Я верю, что истинное изобилие приходит, когда мы перестаем «зарабатывать деньги» и начинаем <strong>творить свою реальность</strong>.
                        И я знаю, как вам в этом помочь.
                    </p>
                </div>
            </div>
            <div className={styles.aboutImgWrap}>
                <img src="/photos/2.jpg" alt="Практика" className={styles.aboutImg} />
            </div>
        </section>
    </>
);