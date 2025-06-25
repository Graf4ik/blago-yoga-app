import React, { useState } from 'react';
import styles from './ContactSidebar.module.scss';

interface ContactSidebarProps {
  open: boolean;
  onClose: () => void;
}

const ContactSidebar: React.FC<ContactSidebarProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, question });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setName('');
    setPhone('');
    setQuestion('');
    onClose();
  };

  return (
    <>
      {/* Затемнение фона */}
      <div
        className={styles.overlay + (open ? ' ' + styles.open : '')}
        onClick={onClose}
      />
      <aside className={styles.sidebar + (open ? ' ' + styles.open : '')}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">×</button>
        <h2 className={styles.title}>Задать вопрос</h2>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={styles.label} htmlFor="name">Имя</label>
          <input
            id="name"
            className={styles.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Ваше имя"
          />
          <label className={styles.label} htmlFor="phone">Телефон</label>
          <input
            id="phone"
            className={styles.input}
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            placeholder="+7 XXX XXX XX XX"
            pattern="\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}"
          />
          <label className={styles.label} htmlFor="question">Вопрос</label>
          <textarea
            id="question"
            className={styles.input}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
            placeholder="Ваш вопрос"
            rows={4}
          />
          <button className={styles.submitBtn} type="submit">Отправить</button>
        </form>
        {submitted && <div className={styles.success}>Спасибо! Мы свяжемся с вами.</div>}
      </aside>
    </>
  );
};

export default ContactSidebar; 