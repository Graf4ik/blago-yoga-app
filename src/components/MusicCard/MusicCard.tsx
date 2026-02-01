'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import styles from './MusicCard.module.scss'

interface MusicCardProps {
    title?: string
    author?: string
    year?: number
    link?: string
    img?: string
}

const MusicCard: FC<MusicCardProps> = ({ title, author, img, link, year }) => {
    return (
        <a
            className={styles.card}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={img as string}
                height={300}
                width={300}
                alt="musicLogo"
                className={styles.image}
            />

            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.author}>{author}</div>
                <div className={styles.year}>{year}</div>
            </div>
        </a>
    )
}

export default MusicCard
