'use client';

import React, { useState } from 'react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import styles from './TeacherPage.module.scss';

const reviewsSlider = [
  {
    text: 'THIS WAS AN EXQUISITE PRACTICE, MALLORY! GENTLE, POWERFUL, AND CHALLENGING. IT FELT LIKE A REAL BALM FOR A STRESSFUL AND UNCERTAIN WEEK. I PARTICULARLY LOVED THE AB WORK!',
    author: 'Courtney',
    link: 'The Class for Centering with Mallory',
    linkUrl: '#',
  },
  {
    text: 'MALLORY&apos;S PRESENCE IS LIFE CHANGING. I LOVE HOW SHE LEADS WITH GRACE, AND INVITES US INTO A FULLER BECOMING, FULL OF SELF-LOVE AND INTEGRITY TOWARD HOW THAT RIPPLES OUT TO THE COLLECTIVE. SETTLED BODIES SETTLE OTHER BODIES. WHAT A NOURISHMENT THIS WAS.',
    author: 'Lindsay',
    link: 'The Class for Light Impact with Mallory',
    linkUrl: '#',
  },
  {
    text: 'THANK YOU MALLORY, YOU ELEGANT AND SINCERE SOUL, FOR MAKING ME FEEL ENTITLED TO GIVE VOICE TO THESE NUANCES, WHILE PUTTING THE SPOTLIGHT WHERE IT IS HONEST TO ORIENT. PLEASE, TAKE THIS CLASS WHENEVER YOU FEEL ANGRY, SAD OR, OF COURSE, GRATEFUL. MALLORY&apos;S LESSONS ARE NEVER BANAL OR OBVIOUS, AND FOR SURE, SHE&apos;S ALWAYS IN OUR LIST OF GRATITUDE.',
    author: 'Chiara',
    link: 'The Class for Gratitude with Mallory',
    linkUrl: '#',
  },
];

const HeroBlock = () => (
  <section className={styles.heroContent}>
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

const AboutBlock = () => (
  <section className={styles.aboutContext}>
    <div className={styles.aboutImgWrap}>
      <img src="/photos/12.jpg" alt="Mallory Meeks" className={styles.aboutImg} />
    </div>
    <div className={styles.aboutTextWrap}>
      <div className={styles.aboutText}>
        Екатерина Благоева (Графова), духовное имя Nadaroopa dasi - сертифицированный преподаватель Федерации Йоги России по направлению Хатха-йога (YTTC-300).<br />
        Преподаватель кундалини йоги, йога-нидры и медитации. Ведущая звуковой медитации ОМ-чантинг. Художник. Музыкант.
      </div>
    </div>
  </section>
);

const AboutBlock2 = () => (
  <section className={styles.aboutContext}>
    <div className={styles.aboutTextWrap}>
      <div className={styles.aboutText}>
        Проводит сеансы гвоздетерапии с применением знаний и навыков психологии. Организатор и ведущая ретритных трансформационных авторских программ, он-лайн курсов по наули-крии, медитации, здоровая спина и красивая осанка. Стаж преподавание с 2018 года (6 лет).
      </div>
    </div>
    <div className={styles.aboutImgWrap}>
      <img src="/photos/7.jpg" alt="Mallory Meeks" className={styles.aboutImg} />
    </div>
  </section>
);

const InfoBlock = () => (
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

const ReviewsSlider = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? reviewsSlider.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === reviewsSlider.length - 1 ? 0 : i + 1));
  const review = reviewsSlider[idx];
  return (
    <section className={styles.sliderBlock}>
      <button className={styles.sliderArrow} onClick={prev} aria-label="Предыдущий отзыв">&#60;</button>
      <div className={styles.sliderContent}>
        <div className={styles.sliderText}>&ldquo;{review.text}&rdquo;</div>
        <div className={styles.sliderAuthor}>- {review.author}</div>
        <a href={review.linkUrl} className={styles.sliderLink}>{review.link}</a>
      </div>
      <button className={styles.sliderArrow} onClick={next} aria-label="Следующий отзыв">&#62;</button>
      <div className={styles.sliderBtns}>
        <button className={styles.sliderBtnBlack}>Move with Mallory Digitally</button>
        <button className={styles.sliderBtnBlack}>Move with Mallory in NYC</button>
      </div>
    </section>
  );
};

const TeacherPage = () => {
  return (
    <div className={styles.teacherPage}>
      <HeroBlock />
      <AboutBlock />
      <AboutBlock2 />
      <InfoBlock />
      <ReviewsSlider />
    </div>
  );
};

export default TeacherPage; 