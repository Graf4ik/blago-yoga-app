import React, { useState } from "react";
import styles from "./ReviewsSlider.module.scss";
import { reviewsSlider } from "@/components/MainPage/ReviewsSlider/constants";

export const ReviewsSlider = () => {
    const [idx, setIdx] = useState(0);
    const prev = () =>
        setIdx((i) => (i === 0 ? reviewsSlider.length - 1 : i - 1));
    const next = () =>
        setIdx((i) => (i === reviewsSlider.length - 1 ? 0 : i + 1));
    const review = reviewsSlider[idx];

    return (
        <section className={styles.sliderBlock}>
            <button className={styles.sliderArrow} onClick={prev} aria-label="Предыдущий отзыв">
                &#10094;
            </button>

            <div className={styles.sliderContent}>
                <div className={styles.reviewCard}>
                    <div className={styles.sliderText}>{review.text}</div>
                    <div className={styles.sliderAuthor}>- {review.author}</div>
                </div>
            </div>

            <button className={styles.sliderArrow} onClick={next} aria-label="Следующий отзыв">
                &#10095;
            </button>
        </section>
    );
};