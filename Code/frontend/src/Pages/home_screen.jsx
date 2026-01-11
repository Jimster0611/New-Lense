import React from 'react';
import styles from './home_screen.module.css';
import { Link } from 'react-router-dom';

import shockedbaby from '../assets/Images/shockedbaby.png';
import monopoly_money from '../assets/Images/monopoly.png';
import {
  PlayRenaiBrooklyn,
  PlayMontagemMiau,
  PlayFahh,
} from '../Componets/Songs';
import backgroundVid from '../assets/Videos/sakura_garden_background.mp4';

export function HomeScreen() {
  return (
    <div className={styles.appWrapper}>
      {/* Background video */}
      {/* Uncomment if you want it visible */}
      {/* 
      <video
        className={styles.backgroundVideo}
        src={backgroundVid}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      */}

      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#page1">Page1_temp</a>
            </li>
            <li className={styles.navItem}>
              <a href="#page2">Page2_temp</a>
            </li>
            <li className={styles.navItem}>
              <a href="#page3">Page3_temp</a>
            </li>
            <li className={styles.navItem}>
              <a href="#page4">Page4_temp</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className={styles.main}>
        <section id="page1" className={styles.page}>
          <h1 className={styles.title}>Lenses!</h1>

          <Link className={styles.link_page_2} to="/output">
            <button type="button">
              Click me to proceed to Result Page
            </button>
          </Link>

          {/* Extra media / components, optional */}
          {/* 
          <PlayRenaiBrooklyn />
          <PlayMontagemMiau />
          <PlayFahh />

          <img src={monopoly_money} alt="Monopoly money" />
          <img
            src={shockedbaby}
            alt="Shocked baby"
            style={{ width: '400px', height: 'auto' }}
          />
          */}
        </section>

        <section id="page2" className={styles.page}>
          {/* Page 2 content */}
        </section>

        <section id="page3" className={styles.page}>
          {/* Page 3 content */}
        </section>

        <section id="page4" className={styles.page}>
          {/* Page 4 content */}
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lenses. All rights reserved.</p>
      </footer>
    </div>
  );
}
