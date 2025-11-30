"use client"
import React, { useState } from 'react';
import styles from './homeSection4.module.css';

const HomeSection4 = () => {
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    { 
      id: 1, 
      title: 'IELTS',
      fullName: 'International English Language Testing System',
      icon: '🎯',
      color: '#ef4444'
    },
    { 
      id: 2, 
      title: 'TOEFL',
      fullName: 'Test of English as a Foreign Language',
      icon: '📚',
      color: '#3b82f6'
    },
    { 
      id: 3, 
      title: 'GRE',
      fullName: 'Graduate Record Examination',
      icon: '🏆',
      color: '#10b981'
    },
    { 
      id: 4, 
      title: 'PTE',
      fullName: 'Pearson Test of English',
      icon: '✨',
      color: '#f59e0b'
    }
  ];

  const handleExamClick = (examId) => {
    setSelectedExam(examId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Main Title */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Get Your Visa Certified</h1>
          <p className={styles.subtitle}>
            Study in your favorite country. Choose what you wanna crack.
          </p>
        </div>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
          {/* Left - Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <img 
                src="/uploads/girl-Photoroom.png" 
                alt="Visa Certification" 
                className={styles.mainImage}
              />
              {/* <div className={styles.floatingElement1}>
                <span className={styles.floatingIcon}>🌍</span>
              </div>
              <div className={styles.floatingElement2}>
                <span className={styles.floatingIcon}>✈️</span>
              </div> */}
            </div>
          </div>

          {/* Right - Exam Cards Grid */}
          <div className={styles.examSection}>
            <div className={styles.examGrid}>
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className={`${styles.examCard} ${selectedExam === exam.id ? styles.selected : ''}`}
                  onClick={() => handleExamClick(exam.id)}
                  style={{'--card-color': exam.color}}
                >
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <span className={styles.examIcon}>{exam.icon}</span>
                    </div>
                    <div className={styles.examInfo}>
                      <h3 className={styles.examTitle}>{exam.title}</h3>
                      <p className={styles.examFullName}>{exam.fullName}</p>
                    </div>
                  </div>
                  {selectedExam === exam.id && (
                    <div className={styles.selectedIndicator}>
                      <span className={styles.checkmark}>✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>💡</div>
              <p className={styles.infoText}>
                Each exam is accepted by different countries and institutions. 
                Select the one that matches your destination!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10,000+</div>
            <div className={styles.statLabel}>Universities</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;