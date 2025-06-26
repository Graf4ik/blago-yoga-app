import Header from '@/components/Header/Header';
import { FC, ReactNode } from 'react';
import "@/assets/styles/globals.scss";
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: ReactNode
};

const Layout:FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
        <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;