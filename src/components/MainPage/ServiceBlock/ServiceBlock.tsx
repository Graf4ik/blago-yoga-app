import styles from "./ServiceBlock.module.scss";
import React from "react";
import { services } from "@/components/MainPage/ServiceBlock/constants";

export const ServiceBlock = () => {
    return (
        <section className={styles.serviceBlock}>
            <h2 className={styles.serviceTitle}>МОИ УСЛУГИ И ЦЕНЫ</h2>
            <table className={styles.serviceTable}>
                <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Описание</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.description}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};