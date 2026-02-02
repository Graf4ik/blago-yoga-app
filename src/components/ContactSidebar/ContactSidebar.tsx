'use client'

import React, { useState } from 'react';
import styles from './ContactSidebar.module.scss';
import { PhoneInput } from "@/components/ui/PhoneInput/PhoneInput";
import { sendContactForm } from "@/lib/api-utils";

interface ContactSidebarProps {
  open: boolean;
  onClose: () => void;
}

const ContactSidebar: React.FC<ContactSidebarProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendContactForm({ name, phone, question })
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);

      setName('');
      setPhone('');
      setQuestion('');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Не удалось отправить форму. Попробуйте позже.');
    }
  };

  return (
    <>
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
              maxLength={35}
              placeholder="Ваше имя"
          />
          <label className={styles.label} htmlFor="phone">Телефон</label>
          <PhoneInput
              value={phone}
              onChange={(val: string) => setPhone(val)}
          />
          <label className={styles.label} htmlFor="question">Сообщение</label>
          <textarea
              id="question"
              className={styles.input}
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
              placeholder="Пожелание или вопрос"
              maxLength={255}
              rows={4}
          />

          <label className={styles.consent}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                required
            />
            <span>
              Я согласен(а) с {' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности
              </a>{' '}
              и даю согласие на обработку персональных данных
            </span>
          </label>

          <label className={styles.consent} htmlFor="dataProcessing">
            <input
                type="checkbox"
                id="dataProcessing"
                checked={dataConsent}
                className={styles.checkbox}
                onChange={(e) => setDataConsent(e.target.checked)}
                required
            />
            <span>
                  Я даю согласие на обработку моих персональных данных (имя, телефон, сообщение)
              </span>
          </label>

          <button className={styles.submitBtn} disabled={!(privacyConsent && dataConsent)} type="submit">Отправить</button>
        </form>
        {submitted && <div className={styles.success}>Спасибо! Мы свяжемся с вами.</div>}
      </aside>
    </>
  );
};

export default ContactSidebar;
