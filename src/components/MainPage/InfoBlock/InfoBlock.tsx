import styles from "./InfoBlock.module.scss";
import React from "react";

export const InfoBlock = () => (
    <section className={styles.infoContent}>
        <div className={styles.infoLeft}>
            <div className={styles.spotifyStub}>
                <img src="/photos/10.jpg" alt="Mallory Meeks Vibe" className={styles.spotifyImg} />
            </div>
        </div>
        <div className={styles.infoRight}>
            <div className={styles.infoTitle}>КАКИЕ МЕТОДЫ Я ИСПОЛЬЗУЮ</div>
            <div className={styles.infoItem}><b>Influences</b><br />Kindness, subtle displays of human emotion, music, silence, literature, poetry, horizons.</div>
            <div className={styles.infoItem}><b>Training</b><br />Pure Barre, Trauma Training.</div>
            <div className={styles.infoItem}><b>Tell Us a Secret</b><br />I read about 50 books a year.</div>
            <div className={styles.infoItem}><b>Share some resonant words</b><br />&quot;We spend so much time trying to wrap our heads around things, when what we need to do is wrap our arms around them instead.&quot;<br />- David Carr</div>
        </div>
    </section>
);