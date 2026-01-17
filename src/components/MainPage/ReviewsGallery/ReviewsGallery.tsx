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
import { constants } from "@/components/MainPage/ReviewsGallery/constants";


export const ReviewGallery = () => {
    return (
        <section className={styles.galleryBlock}>
            <h2 className={styles.title}>МОИ ОТЗЫВЫ</h2>

            <LightGallery
                plugins={[lgZoom, lgThumbnail, lgFullscreen, lgShare]}
                speed={400}
                download={false}
                getCaptionFromTitleOrAlt={false}
                elementClassNames={styles.grid}
            >
                {constants.map((r, i) => (
                    <a
                        key={i}
                        data-src={r.src}
                        data-sub-html={`<p>${r.alt}</p>`}
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
        </section>
    );
}
