import { FC } from "react";
import styles from './Header.module.scss';
import Navbar from "../Navbar/Navbar";

const Header:FC = () => (
    <header className={styles.header}>
        <Navbar />
    </header>
);

export default Header;