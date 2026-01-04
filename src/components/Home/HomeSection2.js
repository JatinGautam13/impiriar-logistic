"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './homeSection2.module.css';

const HomeSection2 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [imageLoadError, setImageLoadError] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Languages to show in the language box
  const languages = [
    { name: 'French', emoji: '🇬🇧', image: '/uploads/icons8-france-48.png' },
    { name: 'German', emoji: '🇩🇪', image: '/uploads/icons8-germany-96.png' },
    { name: 'Spanish', emoji: '🇪🇸', image: '/uploads/icons8-spain-48.png' },
    { name: 'Japanese', emoji: '🇯🇵', image: '/uploads/icons8-japan-48.png' },
    { name: 'Korean', emoji: 'kr', image: '/uploads/icons8-south-korea-48.png' },
  ];

  const fullParagraph = "Master any global language with world-class tutors, immersive practice, and a premium learning experience built for your success. Whether you're learning for studies, career, travel, or personal passion — our tailored programs and interactive tools help you become fluent faster than ever. Select your language and start your journey today.";

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get truncated text (approximately 2 lines - around 120 characters)
  const getTruncatedText = (text) => {
    if (text.length <= 120) return text;
    return text.substring(0, 120) + '...';
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            Choose the language you dream to learn & turn your dream into reality.
          </h1>
          
          <div className={styles.paraWrapper}>
            <p className={`${styles.para} ${!isExpanded && isMobile ? styles.truncated : ''}`}>
              {isMobile && !isExpanded ? getTruncatedText(fullParagraph) : fullParagraph}
            </p>
            
            {isMobile && (
              <button 
                className={styles.expandButton}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span className={styles.expandText}>
                  {isExpanded ? 'Show Less' : 'Read More'}
                </span>
                <span className={`${styles.expandIcon} ${isExpanded ? styles.rotated : ''}`}>
                  ▼
                </span>
              </button>
            )}
          </div>
        </div>

        <div className={styles.rightSection}>
          {languages.map((language, index) => (
            <div
              key={index}
              className={`${styles.languageBox} ${
                selectedLanguage === language.name ? styles.selected : ''
              }`}
              onClick={() => setSelectedLanguage(language.name)}
            >
              <div className={styles.languageGlow} aria-hidden="true"></div>
              <div className={styles.flagCircle}>
                {language.image && !imageLoadError[language.name] ? (
                  <Image
                    src={language.image}
                    alt={`${language.name} flag`}
                    width={36}
                    height={36}
                    className={styles.flagImg}
                    onError={() => setImageLoadError((prev) => ({ ...prev, [language.name]: true }))}
                  />
                ) : (
                  <span className={styles.flag}>{language.emoji}</span>
                )}
              </div>
              {selectedLanguage === language.name ? (
                <span className={styles.selectedBadge}>{language.name}</span>
              ) : (
                <span className={styles.languageName}>{language.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;