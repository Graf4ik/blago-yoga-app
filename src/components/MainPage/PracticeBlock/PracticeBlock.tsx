import styles from "./PracticeBlock.module.scss";
import React from "react";
import {Accordion} from "@/components/ui/Accordion/Accordion";
import {accordionItems} from "@/components/MainPage/AboutBlock/AboutBlock.constants";

export const PracticeBlock = () => {
    return (
        <section className={styles.practiceBlock}>
            <h2 className={styles.practiceTitle}>Индивидуальная практика</h2>
            <Accordion items={accordionItems}></Accordion>
        </section>
    );
};