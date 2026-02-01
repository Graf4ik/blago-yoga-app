'use client';

import React from 'react';
import styles from './MusicPage.module.scss';
import { musicCards } from "@/components/MusicPage/constants";
import MusicCard from "@/components/MusicCard/MusicCard";

const MusicPage = () => {
    return (
        <section className={styles.musicPage}>
            {musicCards.map(({ id, title, author, year, link, img }) => (
                <MusicCard
                    key={id}
                    title={title}
                    author={author}
                    year={year}
                    link={link}
                    img={img}
                />
            ))}
        </section>
    );
};

export default MusicPage;
