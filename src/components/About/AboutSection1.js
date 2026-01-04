"use client";
import React, { useState, useEffect } from 'react';
import styles from './aboutSection1.module.css';

const AboutSection1 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '10K+', label: 'Happy Students', icon: '👨‍🎓' },
    { number: '500+', label: 'Expert Tutors', icon: '👨‍🏫' },
    { number: '15+', label: 'Languages', icon: '🌍' },
    { number: '95%', label: 'Success Rate', icon: '🎯' }
  ];

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.bgAnimation}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>✨</span>
            <span className={styles.badgeText}>About Us</span>
          </div>

          <h1 className={styles.mainTitle}>
            We're Transforming
            <span className={styles.highlight}> Language Learning</span>
            <br />
            For Everyone
          </h1>

          <p className={styles.description}>
            Founded in 2020, we've built a global community of passionate language learners 
            and expert tutors. Our mission is to break down language barriers and connect 
            people across cultures through personalized, engaging, and effective education.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>
              <span>Our Story</span>
              <span className={styles.btnIcon}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              <span className={styles.playIcon}>▶</span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statGlow}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
};

export default AboutSection1;