'use client';

import React from 'react';
import styles from './MainPage.module.scss';
import { HeroBlock } from "@/components/MainPage/HeroBlock/HeroBlock";
import { AboutBlock } from "@/components/MainPage/AboutBlock/AboutBlock";
import { InfoBlock } from "@/components/MainPage/InfoBlock/InfoBlock";
import { ServiceBlock } from "@/components/MainPage/ServiceBlock/ServiceBlock";
import { ReviewGallery } from "@/components/MainPage/ReviewsGallery/ReviewsGallery";

const MainPage = () => {
  return (
    <div className={styles.teacherPage}>
      <HeroBlock />
      <AboutBlock />
      <InfoBlock />
      <ServiceBlock />
      <ReviewGallery />
    </div>
  );
};

export default MainPage;
