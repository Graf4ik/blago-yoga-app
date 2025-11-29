import styles from "./AboutBlock.module.scss";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {accordionItems} from "@/components/MainPage/AboutBlock/AboutBlock.constants";

export const AboutBlock = () => (
    <>
        <section className={styles.aboutContent}>
            <div className={styles.aboutImgWrap}>
                <img src="/photos/12.jpg" alt="Екатерина Благоева" className={styles.aboutImg} />
            </div>
            <div className={styles.aboutTextWrap}>
                <div className={styles.aboutText}>
                    Екатерина Благоева (Графова), духовное имя Nadaroopa dasi - сертифицированный преподаватель
                    Федерации Йоги России по направлению Хатха-йога (YTTC-300).<br />
                    Преподаватель кундалини йоги, йога-нидры и медитации. Ведущая звуковой медитации ОМ-чантинг. Художник. Музыкант.
                </div>
            </div>
        </section>

        <section className={styles.aboutContent}>
            <div className={styles.accordionWrap}>
                <Accordion type="single" collapsible defaultValue="item-1" className={styles.accordion}>
                    {accordionItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>
                                <span className={styles.accordionHeader}>{item.header}</span>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                {item.content.map((line, idx) => (
                                    <p key={idx} className={styles.accordionContent}>{line}</p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className={styles.aboutImgWrap}>
                <img src="/photos/7.jpg" alt="Практика" className={styles.aboutImg} />
            </div>
        </section>
    </>
);