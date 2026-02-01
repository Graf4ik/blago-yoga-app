import { IMaskInput } from "react-imask";
import styles from "@/components/ContactSidebar/ContactSidebar.module.scss";
import React from "react";

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const PhoneInput = ({value, onChange}: PhoneInputProps) => {
    return (
        <IMaskInput
            mask="+7 (000) 000-00-00"
            value={value}
            onAccept={onChange}
            placeholder="+7 (___) ___-__-__"
            className={styles.input}
        />
    )
}
