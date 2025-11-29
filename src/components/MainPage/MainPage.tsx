'use client';

import React from 'react';
import styles from './MainPage.module.scss';
import { HeroBlock } from "@/components/MainPage/HeroBlock/HeroBlock";
import { AboutBlock } from "@/components/MainPage/AboutBlock/AboutBlock";
import { InfoBlock } from "@/components/MainPage/InfoBlock/InfoBlock";
import { ReviewsSlider } from "@/components/MainPage/ReviewsSlider/ReviewsSlider";
import { ServiceBlock } from "@/components/MainPage/ServiceBlock/ServiceBlock";
import { PracticeBlock } from "@/components/MainPage/PracticeBlock/PracticeBlock";

const MainPage = () => {
  return (
    <div className={styles.teacherPage}>
      <HeroBlock />
      <AboutBlock />
      <InfoBlock />
      <PracticeBlock />
      <ServiceBlock />
      <ReviewsSlider />
    </div>
  );
};

export default MainPage;