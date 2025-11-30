"use client";
import React, { useState } from 'react';
import styles from './aboutSection2.module.css';

const AboutSection2 = () => {
  const [activeTimeline, setActiveTimeline] = useState(null);

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a vision to make language learning accessible to everyone. Launched our first platform with 3 languages and 20 tutors.',
      icon: '🚀',
      color: '#ef4444'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded to 10 languages with 200+ expert tutors. Reached 5,000 students across 30 countries worldwide.',
      icon: '🌍',
      color: '#f59e0b'
    },
    {
      year: '2022',
      title: 'Innovation Era',
      description: 'Introduced AI-powered learning tools, live interactive classes, and personalized curriculum for each student.',
      icon: '💡',
      color: '#10b981'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Won "Best Language Learning Platform" award. Achieved 95% student satisfaction rate with 10,000+ happy learners.',
      icon: '🏆',
      color: '#3b82f6'
    },
    {
      year: '2024',
      title: 'The Future',
      description: 'Now serving 15+ languages with 500+ tutors. Building the most comprehensive language learning ecosystem.',
      icon: '✨',
      color: '#a855f7'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Our Journey</span>
          <h2 className={styles.mainTitle}>
            The Story Behind <span className={styles.highlight}>Our Success</span>
          </h2>
          <p className={styles.description}>
            From a small team with big dreams to a global platform transforming lives. 
            Here's how we've grown over the years to become a leader in language education.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${activeTimeline === index ? styles.active : ''}`}
              onMouseEnter={() => setActiveTimeline(index)}
              onMouseLeave={() => setActiveTimeline(null)}
              onClick={() => setActiveTimeline(activeTimeline === index ? null : index)}
              style={{ 
                '--item-color': item.color,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.yearBadge}>
                  <span className={styles.yearText}>{item.year}</span>
                  <div className={styles.yearGlow}></div>
                </div>

                <div className={styles.contentCard}>
                  <div className={styles.cardIcon}>
                    <span className={styles.iconEmoji}>{item.icon}</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  
                  <div className={styles.cardGlow}></div>
                </div>
              </div>

              <div className={styles.timelineDot}>
                <div className={styles.dotInner}></div>
                <div className={styles.dotRing}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>🎯</div>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Want to be part of our story?</h3>
              <p className={styles.ctaText}>Join thousands of learners achieving their language goals</p>
            </div>
            <button className={styles.ctaButton}>
              <span>Start Your Journey</span>
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;