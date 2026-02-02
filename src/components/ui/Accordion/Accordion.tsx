"use client";

import { useState, useRef } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionItem {
    header: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
    return (
        <div className={styles.accordion}>
            {items.map((item, i) => (
                <AccordionItem key={i} header={item.header} content={item.content} />
            ))}
        </div>
    );
};

const AccordionItem = ({ header, content }: AccordionItem) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
        const el = wrapperRef.current;
        if (!el) return;

        if (open) {
            el.style.height = el.scrollHeight + "px";
            requestAnimationFrame(() => {
                el.style.height = "0px";
            });
        } else {
            el.style.height = el.scrollHeight + "px";
        }

        setOpen(!open);
    };

    return (
        <div className={styles.item}>
            <button className={styles.title} onClick={toggle} aria-expanded={open}>
                {header}
                <span className={`${styles.icon} ${open ? styles.open : ""}`}>+</span>
            </button>

            <div
                ref={wrapperRef}
                className={styles.contentWrapper}
                style={{ height: "0px", overflow: "hidden", transition: "height 0.35s ease" }}
                onTransitionEnd={() => {
                    if (open) wrapperRef.current!.style.height = "auto";
                }}
            >
                <div className={`${styles.content} ${open ? styles.visible : ""}`}>
                    {content}
                </div>
            </div>
        </div>
    );
};
