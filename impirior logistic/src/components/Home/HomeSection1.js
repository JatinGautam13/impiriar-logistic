// components/Home/HomeSection1.js
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './homeSection1.module.css';

const HomeSection1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Content */}
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Logo with Glow */}
          <div className={styles.logoWrapper}>
            <div className={styles.logoGlow}></div>
            <Image
              src="/uploads/Imperialmain-logo Ling..png"
              alt="Imperial Logistics"
              width={400}
              height={200}
              className={styles.logo}
              priority
            />
          </div>

          {/* Tagline */}
          <p className={styles.tagline}>
            Speak the language of global excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;