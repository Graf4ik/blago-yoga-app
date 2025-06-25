'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TeacherPage.module.scss';

const reviews = [
  {
    name: 'Мария',
    text: 'Екатерина — потрясающий наставник! После ретрита появилось ощущение внутреннего покоя и вдохновения.'
  },
  {
    name: 'Иван',
    text: 'Очень чуткий и профессиональный подход. Рекомендую всем, кто ищет гармонию и развитие.'
  },
];

const TeacherPage = () => {
  return (
    <div className={styles.teacherPage}>
      {/* HERO */}
      <section className={styles.heroBlock}>
        <div className={styles.heroContent}>
          <div>
            <h1 className={styles.heroName}>Екатерина Благоева (Nadaroopa dasi)</h1>
            <div className={styles.heroStatus}>Сертифицированный преподаватель Федерации Йоги России (YTTC-300), художник, музыкант</div>
            <p className={styles.heroDesc}>
              Преподаю хатха-йогу, кундалини, йога-нидру, медитацию, гвоздетерапию. Организую ретриты, авторские программы и онлайн-курсы. Стаж преподавания — 6 лет.
            </p>
            <button className={styles.ctaBtn} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Задать вопрос</button>
          </div>
          <div className={styles.heroImgWrap}>
            <Image src="/teacher-placeholder.jpg" alt="Екатерина Благоева" width={320} height={420} className={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* О себе */}
      <section className={styles.bioBlock} id="about">
        <h2>О себе</h2>
        <p>
          Екатерина Благоева (Графова), духовное имя Nadaroopa dasi — сертифицированный преподаватель Федерации Йоги России по направлению Хатха-йога (YTTC-300). Преподаватель кундалини йоги, йога-нидры и медитации. Ведущая звуковой медитации ОМ-чантинг. Художник. Музыкант.
          <br/><br/>
          Проводит сеансы гвоздетерапии с применением знаний и навыков психологии. Организатор и ведущая ретритных трансформационных авторских программ, онлайн-курсов по наули-крии, медитации, здоровая спина и красивая осанка. Стаж преподавания с 2018 года (6 лет).
          <br/><br/>
          Екатерина сотрудничает с Департаментом спорта России, 3 года является постоянным топ-преподавателем проекта «Спортивные выходные». Проводила практики йоги в рамках Московского урбанистического форума, международных выставок и форумов.
        </p>
      </section>

      {/* Кому подойдут практики */}
      <section className={styles.infoBlockReverse} id="for-whom">
        <div className={styles.infoImg}>
          <Image src="/photos/7.jpg" alt="Кому подойдут практики" width={800} height={600} />
        </div>
        <div className={styles.infoText}>
          <h2>Кому подойдут практики?</h2>
          <ul>
            <li>Кто хочет встать на путь самопознания или уже на этом пути</li>
            <li>Отношения, выход из негативных сценариев, улучшение качества жизни</li>
            <li>Поиск предназначения, новые цели, раскрытие талантов</li>
            <li>Преодоление апатии, поиск смысла, эмоциональное восстановление</li>
          </ul>
          <h3>Примеры запросов:</h3>
          <ul>
            <li>Отношения, негативные сценарии, улучшение текущих отношений</li>
            <li>Достижение «потолка», поиск нового пути</li>
            <li>Определение предназначения, поиск радости</li>
            <li>Работа с эмоциональными блоками, вдохновение</li>
          </ul>
        </div>
      </section>

      {/* Методы и подход */}
      <section className={styles.infoBlock} id="methods">
        <div className={styles.infoText}>
          <h2>Методы и подход</h2>
          <ul>
            <li>Индивидуальный подбор программы</li>
            <li>Кундалини-йога, хатха-йога, техники работы с подсознанием, НЛП</li>
            <li>Звукотерапия, медитации, гвоздестояние</li>
            <li>Рекомендации и поддержка после ретрита</li>
          </ul>
        </div>
        <div className={styles.infoImg}>
          <Image src="/photos/7.jpg" alt="Методы и подход" width={800} height={600} />
        </div>
      </section>

      {/* Практики и программы */}
      <section className={styles.infoBlock} id="programs">
        <div className={styles.infoText}>
          <h2>Практики и программы</h2>
          <ul>
            <li>Индивидуальный ретрит (авторская программа, 2-3 часа, стоимость 15 000 руб.)</li>
            <li>Хатха-йога (индивидуальные занятия, персональная настройка, работа с осанкой, дыханием, гибкостью)</li>
            <li>Кундалини-йога, йога-нидра, медитация, гвоздетерапия</li>
            <li>Звукотерапия 432 Гц, ОМ-чантинг</li>
            <li>Онлайн-курсы: наули-крия, медитация, здоровая спина</li>
          </ul>
        </div>
        <div className={styles.infoImg}>
          <Image src="/photos/7.jpg" alt="Практики и программы" width={800} height={600} />
        </div>
      </section>

      {/* Результаты и преимущества */}
      <section className={styles.infoBlockReverse} id="results">
        <div className={styles.infoImg}>
          <Image src="/photos/7.jpg" alt="Результаты и преимущества" width={800} height={600} />
        </div>
        <div className={styles.infoText}>
          <h2>Результаты и преимущества</h2>
          <ul>
            <li>Глубокое расслабление, снижение стресса</li>
            <li>Углубление духовной практики, осознанность</li>
            <li>Новые навыки, личностный рост, внутренний покой</li>
            <li>Физическое здоровье, здоровое питание</li>
            <li>Социальные связи, поддержка сообщества</li>
            <li>Творческое вдохновение, эмоциональное очищение</li>
          </ul>
        </div>
      </section>

      {/* О себе — личное */}
      <section className={styles.personalBlock}>
        <h2>О себе — личное</h2>
        <p>
          В йогу пришла более 9 лет назад, на собственном опыте знаю, как техники йоги трансформируют сознание и жизнь. Моя личная практика включает кундалини, хатха-йогу, гвоздестояние, медитацию. Посещаю семинары, ретриты, мастер-классы, постоянно развиваюсь. Вдохновляют искусство, живопись, литература, природа, преподавание и обратная связь от учеников.
        </p>
      </section>

      {/* Отзывы */}
      <section className={styles.reviews} id="reviews">
        <h2>Отзывы учеников</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((review, idx) => (
            <div className={styles.reviewCard} key={idx}>
              <p className={styles.reviewText}>«{review.text}»</p>
              <span className={styles.reviewAuthor}>— {review.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeacherPage; 