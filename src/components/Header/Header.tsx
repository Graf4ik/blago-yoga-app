import { FC } from "react";
import styles from './header.module.scss';
import Navbar from "@/components/navbar/navbar";

const Header:FC = () => (
    <header className={styles.header}>
        <Navbar />
    </header>
);

export default Header;