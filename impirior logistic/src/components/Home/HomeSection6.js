"use client";
import React from "react";
import styles from "./homeSection6.module.css";

const HomeSection6 = () => {
  const reasons = [
    { id: 1, title: "Expert Native Tutors", description: "Learn from certified native speakers with years of teaching experience...", image: "/uploads/reason1.jpg" },
    { id: 2, title: "Personalized Learning Path", description: "Every student is unique. We create customized curriculum...", image: "/uploads/reason2.jpg" },
    { id: 3, title: "Lift Flexible Scheduling", description: "Book sessions at your convenience, anytime, anywhere...", image: "/uploads/reason3.jpg" },
    { id: 4, title: "Interactive Live Classes", description: "Engage in real-time conversations with live feedback...", image: "/uploads/reason4.jpg" },
    { id: 5, title: "Proven Success Rate", description: "Join thousands of successful learners who achieved their goals...", image: "/uploads/reason5.jpg" },
    { id: 6, title: "Affordable Pricing", description: "Premium quality education at competitive prices...", image: "/uploads/reason6.jpg" },
    { id: 7, title: "Advanced Learning Tools", description: "Access cutting-edge technology including AI-powered practice...", image: "/uploads/reason7.jpg" },
    { id: 8, title: "Cultural Immersion", description: "Beyond grammar and vocabulary, dive deep into cultural nuances...", image: "/uploads/reason8.jpg" },
    { id: 9, title: "Lifetime Support", description: "Your learning journey doesn't end with classes...", image: "/uploads/reason9.jpg" },
    { id: 10, title: "Certification & Recognition", description: "Earn globally recognized certificates accepted worldwide...", image: "/uploads/reason10.jpg" },
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedReasons = [...reasons, ...reasons];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>10 Good Reasons to Choose Us</h1>

        {/* Carousel with fade edges */}
        <div className={styles.carouselWrapper}>
          <div className={styles.reasonsList}>
            {duplicatedReasons.map((reason, index) => (
              <div
                key={`${reason.id}-${index}`}
                className={styles.reasonItem}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add(styles.hovered);
                  e.currentTarget.closest(`.${styles.reasonsList}`)?.classList.add(styles.paused);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove(styles.hovered);
                  e.currentTarget.closest(`.${styles.reasonsList}`)?.classList.remove(styles.paused);
                }}
              >
                <div className={styles.reasonNumber}>
                  <span className={styles.numberText}>{reason.id}</span>
                  <div className={styles.numberGlow}></div>
                </div>

                <div className={styles.reasonContent}>
                  <div className={styles.imageContainer}>
                    <img src={reason.image} alt={reason.title} className={styles.reasonImage} loading="lazy" />
                    <div className={styles.imageOverlay}></div>
                  </div>

                  <div className={styles.textContent}>
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonDescription}>{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hint */}
        <div className={styles.mobileHint}>
          <span className={styles.hintIcon}>⬅</span>
          <span className={styles.hintText}>Swipe to explore all reasons</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;