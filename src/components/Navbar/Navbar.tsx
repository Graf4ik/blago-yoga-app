'use client'

import React, { FC, useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  const [isActive, setActive] = useState(false);
  const openMenu = () => setActive(true);
  const closeMenu = () => setActive(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src="/logo.png" className={styles.logoImg} />
          </div>
          {/* Кнопки студий */}
          <div className={styles.studios}>
            {/* <button className={styles.studioBtn}>Digital Studio</button>
            <button className={styles.studioBtn}>NYC Studio</button> */}
            {/*<button className={styles.studioBtn}>Связаться</button>*/}
          </div>

          <div className={styles.burgerMenu}>
            <button onClick={openMenu} className={styles.menuButton} aria-label="Открыть меню">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isActive && (
        <div className={styles.sideMenu}>
          <button className={styles.closeBtn} onClick={closeMenu} aria-label="Закрыть меню">×</button>
          <div className={styles.menuSection}>
            <div className={styles.menuTitle}>DIGITAL STUDIO</div>
            <div className={styles.menuLink}>Start Free Trial</div>
            <div className={styles.menuLink}>Login</div>
          </div>
          <hr className={styles.menuDivider} />
          <div className={styles.menuSection}>
            <div className={styles.menuTitle}>IN PERSON</div>
            <div className={styles.menuRow}>
              <span>NYC Studio</span>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
            {/*<div className={styles.menuRow}><button className={styles.contactBtn} onClick={() => {}}>Связаться</button></div>*/}
          </div>
          <hr className={styles.menuDivider} />
          <div className={styles.menuSection}>
            <div className={styles.menuLink}>The Method</div>
            <div className={styles.menuLink}>The Teachers</div>
            <div className={styles.menuLink}>Retreatments</div>
            <div className={styles.menuLink}>Teacher Training</div>
            <div className={styles.menuLink}>Shop</div>
          </div>
          <div className={styles.menuHelp}>
            <button>Помощь</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
