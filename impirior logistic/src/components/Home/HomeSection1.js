// components/Home/HomeSection1.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./homeSection1.module.css";

const flags = [
  { code: "FR", name: "France", src: "/uploads/icons8-france-48.png" },
  { code: "DE", name: "Germany", src: "/uploads/icons8-germany-96.png" },
  { code: "ES", name: "Spain", src: "/uploads/icons8-spain-48.png" },
  { code: "JP", name: "Japan", src: "/uploads/icons8-japan-48.png" },
  { code: "KR", name: "Korea", src: "/uploads/icons8-south-korea-48.png" },
  { code: "GB", name: "United Kingdom", src: "/uploads/icons8-usa-48.png" },
  { code: "CN", name: "China", src: "/uploads/icons8-china-48.png" },
  { code: "IT", name: "Italy", src: "/uploads/icons8-italy-48.png" },
];

const HomeSection1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          {/* Main Heading */}
          <div className={styles.headingWrapper}>
            <h1 className={styles.mainHeading}>
              Your Gateway to
              <br />
              <span className={styles.gradientText}>Global Communication</span>
            </h1>
          </div>
            <p className={styles.subtitle1}>
            
              French | German | Spanish | Japanese | Korean <br/> IELTS | TOEFL | PTE | GRE 
               </p>
          {/* Subtitle */}
          <p className={styles.subtitle}>
            Learn languages that open doors to international opportunities
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              Explore Courses
              <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.ctaButtonSecondary}>
              Get Visa Certified
            </button>
          </div>
        </div>
      </div>

      {/* Floating Frying Pan Image */}
      <div className={styles.floatingImage}>
        <Image
          src="/uploads/frying.png"
          alt="Language Learning"
          width={400}
          height={400}
          className={styles.fryingImage}
        />
      </div>

      {/* Floating Flags (SVG files) */}
      <div className={styles.floatingFlags}>
        {flags.map((flag, index) => (
          <div
            key={flag.code}
            className={`${styles.flag} ${styles[`flag${index + 1}`]}`}
            style={{
              animationDelay: `${index * 0.5}s`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            aria-label={flag.name}
          >
            <Image
              src={flag.src}
              alt={flag.name}
              width={32}
              height={24}
              className={styles.flagImage}
            />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatCircle} ${styles.circle1}`}></div>
        <div className={`${styles.floatCircle} ${styles.circle2}`}></div>
        <div className={`${styles.floatCircle} ${styles.circle3}`}></div>
      </div>
    </section>
  );
};

export default HomeSection1;
