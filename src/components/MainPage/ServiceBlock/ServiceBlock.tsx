import styles from "./ServiceBlock.module.scss";
import React from "react";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { accordionItems } from "@/components/MainPage/ServiceBlock/constants";

export const ServiceBlock = () => {
    return (
        <section className={styles.serviceBlock}>
            <h2 className={styles.serviceTitle}>МОИ УСЛУГИ И ЦЕНЫ</h2>
            <Accordion items={accordionItems}></Accordion>
        </section>
    );
};
