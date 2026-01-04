"use client";
import React, { useState, useEffect } from 'react';
import styles from './homeSection3.module.css';

const HomeSection3 = () => {
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const purposes = [
    { id: 1, title: 'Job', icon: '💼', description: 'Advance your career with language skills', color: '#ef4444' },
    { id: 2, title: 'Higher Studies', icon: '🎓', description: 'Excel in academic excellence abroad', color: '#3b82f6' },
    { id: 3, title: 'Skill Enhanced & Interest', icon: '🚀', description: 'Follow your passion and grow', color: '#10b981' },
  ];

  const fullText = `Understanding why you're learning a language is the first step toward success. Whether you’re aiming for a dream job, preparing for higher studies, or simply exploring a new passion — defining your purpose helps us build a personalized learning path just for you.
Every goal requires a unique approach, and our expert team ensures you receive the right guidance at every step of your journey.`;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 968);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        
        {/* LEFT: Purpose Cards (unchanged) */}
        <div className={styles.leftSection}>
          {purposes.map((purpose) => (
            <div
              key={purpose.id}
              className={`${styles.purposeBox} ${selectedPurpose === purpose.id ? styles.selected : ''}`}
              onClick={() => setSelectedPurpose(purpose.id)}
              style={{ '--card-color': purpose.color }}
            >
              <div className={styles.purposeGlow} aria-hidden="true"></div>

              <div className={styles.iconCircle}>
                <span className={styles.icon}>{purpose.icon}</span>
              </div>

              <div className={styles.purposeInfo}>
                <span className={styles.purposeTitle}>{purpose.title}</span>
                <span className={styles.purposeDescription}>{purpose.description}</span>
              </div>

              {selectedPurpose === purpose.id && (
                <div className={styles.selectedIndicator}>
                  <span className={styles.checkmark}>Checkmark</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: Title + Paragraph + Read More (only on mobile) */}
        <div className={styles.rightSection}>
          <h1 className={styles.title}>Define the Purpose</h1>

          <div className={styles.textWrapper}>
            <p className={`${styles.para} ${isMobile && !isExpanded ? styles.truncated : ''}`}>
              {isMobile && !isExpanded
                ? fullText.split('\n')[0].substring(0, 120) + '...'  // Only first ~2 lines
                : fullText}
            </p>

            {/* Read More Button - Shows ONLY on mobile */}
            {isMobile && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles.readMoreBtn}
              >
                <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                <span className={`${styles.arrowIcon} ${isExpanded ? styles.rotated : ''}`}>▼</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;