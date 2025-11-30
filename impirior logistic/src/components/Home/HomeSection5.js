'use client';
import React, { useState } from 'react';
import styles from './homeSection5.module.css';

const HomeSection5 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: '👨‍🏫',
      title: 'Expert Tutors',
      description: 'Learn from certified native speakers with years of teaching experience'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Custom curriculum tailored to your goals, pace, and learning style'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience, anytime, anywhere in the world'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and milestone tracking'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Heading */}
        <h1 className={styles.mainTitle}>Experience Transformation</h1>
        
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              Transform Your Language Skills with <span className={styles.highlight}>1:1 Expert Guidance</span>
            </h2>
            <p className={styles.heroDescription}>
              Unlock your full potential with personalized one-on-one sessions designed specifically for you. 
              Our expert tutors provide dedicated attention, immediate feedback, and a customized learning path 
              that accelerates your progress like never before.
            </p>
            
            <div className={styles.statsContainer}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>10K+</div>
                <div className={styles.statLabel}>Students</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Expert Tutors</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>

            <button className={styles.ctaButton}>
              <span className={styles.buttonText}>Book 1:1 Now</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageCircle}>
              <img 
                src="/uploads/domboldor.png" 
                alt="1:1 Tutoring Session" 
                className={styles.tutorImage}
              />
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.badgeEmoji}>🎓</span>
              <span className={styles.badgeText}>Live Sessions</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${styles.featureCard} ${hoveredCard === feature.id ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.featureGlow}></div>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;