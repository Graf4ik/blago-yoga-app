import styles from "./InfoBlock.module.scss";
import React from "react";

export const InfoBlock = () => (
    <section className={styles.infoContent}>
        <div className={styles.infoImgWrap}>
            <img src="/photos/4.jpg" alt="Екатерина Благоева" className={styles.infoImg}/>
        </div>
        <div className={styles.infoTextWrap}>
            <div className={styles.infoText}>
                <p>
                    <strong>От Осознания — к Воплощению</strong>
                </p>
                <p>
                    Философия — это основа, но реальные изменения происходят в действии. Мои интегративные практики —
                    это не
                    теория, а точные инструменты, которые помогут вам:
                </p>
                <ul>
                    <li><strong>ПЕРЕЙТИ</strong> от неясных желаний — к ясному намерению и плану.</li>
                    <li><strong>ПРЕОБРАЗИТЬ</strong> внутренние ограничения — в источник силы и ресурс.</li>
                    <li><strong>НАУЧИТЬСЯ</strong> не просто мечтать, а становиться творцом каждой сферы своей жизни: от
                        здоровья и отношений — до финансов и самореализации.
                    </li>
                </ul>
                <p>
                    Следующий шаг — выбрать формат нашей работы, который подходит именно вам. Изучите мои услуги ниже —
                    каждая из них является частью этой целостной системы преображения.
                </p>
            </div>
        </div>
    </section>
);
