"use client";
import React, { useState } from 'react';
import styles from './homeSection7.module.css';

const HomeSection7 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const quizFeatures = [
    {
      id: 1,
      icon: '⏱️',
      text: 'Only 2 Minutes'
    },
    {
      id: 2,
      icon: '🎯',
      text: 'Instant Results'
    },
    {
      id: 3,
      icon: '📊',
      text: 'Detailed Analysis'
    },
    {
      id: 4,
      icon: '🏆',
      text: 'Free Certificate'
    }
  ];

  const handleStartQuiz = () => {
    // Redirect to your quiz website
    window.open('https://your-quiz-website.com', '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Animated Background Elements */}
        <div className={styles.floatingElement1}>🌟</div>
        <div className={styles.floatingElement2}>✨</div>
        <div className={styles.floatingElement3}>💫</div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Heading */}
          <h1 className={styles.mainTitle}>
            Test Your <span className={styles.highlight}>Favourite Language</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Discover your language proficiency level in just 2 minutes!
          </p>

          {/* Quiz Card */}
          <div className={styles.quizCard}>
            <div className={styles.cardGlow}></div>
            
            <div className={styles.iconContainer}>
              <div className={styles.quizIcon}>
                <span className={styles.iconText}>📝</span>
              </div>
              <div className={styles.iconRing1}></div>
              <div className={styles.iconRing2}></div>
            </div>

            <h2 className={styles.cardTitle}>Start Your 2 Min Quiz</h2>
            <p className={styles.cardDescription}>
              Take our quick assessment to evaluate your language skills. 
              Get personalized recommendations and unlock your learning path!
            </p>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {quizFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className={`${styles.featureItem} ${hoveredCard === feature.id ? styles.featureHovered : ''}`}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={styles.ctaButton} onClick={handleStartQuiz}>
              <span className={styles.buttonGlow}></span>
              <span className={styles.buttonContent}>
                <span className={styles.buttonText}>Start Quiz Now</span>
                <span className={styles.buttonIcon}>→</span>
              </span>
            </button>

            {/* Trust Badge */}
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}>✓</span>
              <span className={styles.trustText}>Trusted by 50,000+ learners worldwide</span>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>Quiz Takers</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>⭐</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>4.9/5</div>
                <div className={styles.statLabel}>Average Rating</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🎓</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;