import React from 'react';
import styles from './homeSection8.module.css';

const HomeSection8 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <h2 className={styles.heading}>Language Practice Hub</h2>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <h3 className={styles.leftHeading}>Practice your favourite language</h3>
            <p className={styles.description}>
              Immerse yourself in interactive conversations and real-world scenarios. 
              Our platform helps you master any language through engaging practice sessions 
              tailored to your learning pace and goals.
            </p>
            <ul className={styles.featureList}>
              <li>Real-time conversation practice</li>
              <li>Personalized learning paths</li>
              <li>Instant feedback and corrections</li>
              <li>Multiple language options</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h4 className={styles.boxTitle}>Interact with our AI power avatar</h4>
              </div>
              <div className={styles.boxContent}>
                <div className={styles.avatarPlaceholder}>
                  <div className={styles.avatarCircle}>
                    <span className={styles.avatarIcon}>🤖</span>
                  </div>
                  <p className={styles.avatarText}>AI Avatar Ready</p>
                </div>
                <button className={styles.startButton}>Start Conversation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;