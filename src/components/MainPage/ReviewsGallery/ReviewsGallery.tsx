'use client';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';

import Image from 'next/image';
import styles from './ReviewGallery.module.scss';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import {constants} from "@/components/MainPage/ReviewsGallery/constants";
import {useState} from "react";

const PREVIEW_COUNT = 6;

export const ReviewGallery = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={styles.galleryBlock} id="reviews">
            <h2 className={styles.title}>ОТЗЫВЫ</h2>

            <div className={`${styles.galleryWrapper} ${
                 expanded ? styles.expanded : styles.collapse }`}>
                <LightGallery
                    plugins={[lgZoom, lgThumbnail, lgFullscreen, lgShare]}
                    speed={400}
                    download={false}
                    getCaptionFromTitleOrAlt={false}
                    elementClassNames={styles.grid}
                >
                    {constants.slice(0, expanded ? constants.length : PREVIEW_COUNT).map((r, i) => (
                        <a
                            key={i}
                            data-src={r.src}
                            data-sub-html={`<p>${r.alt}</p>`}
                            data-animated={expanded && i >= PREVIEW_COUNT}
                            className={styles.item}
                        >
                            <Image
                                src={r.src}
                                alt={r.alt}
                                width={300}
                                height={400}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className={styles.img}
                            />
                        </a>
                    ))}
                </LightGallery>
            </div>

            <button
                className={styles.showMore}
                onClick={() => setExpanded(v => !v)}>
                {expanded ? 'Скрыть отзывы' : 'Показать все отзывы'}
            </button>
        </section>
    );
}
