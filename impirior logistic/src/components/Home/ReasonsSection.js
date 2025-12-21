"use client";
import React from "react";
import styles from "./ReasonsSection.module.css";

const ReasonsSection = () => {
  const reasons = [
    {
      id: 1,
      title: "Expert Native Tutors",
      description: "Learn from certified native speakers with years of teaching experience who bring authentic language skills and cultural insights to every lesson.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      icon: "👨‍🏫"
    },
    {
      id: 2,
      title: "Personalized Learning Path",
      description: "Every student is unique. We create customized curriculum tailored to your goals, learning style, and pace for maximum effectiveness.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, anytime, anywhere. Our 24/7 availability fits perfectly into your busy lifestyle.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
      icon: "⏰"
    },
    {
      id: 4,
      title: "Interactive Live Classes",
      description: "Engage in real-time conversations with live feedback, interactive exercises, and dynamic discussions that accelerate your learning.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      icon: "💬"
    },
    {
      id: 5,
      title: "Proven Success Rate",
      description: "Join thousands of successful learners who achieved their goals. Our 95% satisfaction rate speaks for itself.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      icon: "📈"
    },
    {
      id: 6,
      title: "Affordable Pricing",
      description: "Premium quality education at competitive prices. We offer flexible payment plans and packages that fit any budget.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
      icon: "💰"
    },
    {
      id: 7,
      title: "Advanced Learning Tools",
      description: "Access cutting-edge technology including AI-powered practice, interactive whiteboards, and comprehensive learning resources.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: "🚀"
    },
    {
      id: 8,
      title: "Cultural Immersion",
      description: "Beyond grammar and vocabulary, dive deep into cultural nuances, traditions, and real-world language usage.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      icon: "🌍"
    },
    {
      id: 9,
      title: "Lifetime Support",
      description: "Your learning journey doesn't end with classes. Get ongoing support, resources, and community access for continuous improvement.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
      icon: "🤝"
    },
    {
      id: 10,
      title: "Certification & Recognition",
      description: "Earn globally recognized certificates accepted worldwide by universities, employers, and immigration authorities.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      icon: "🏆"
    }
  ];

  const duplicatedReasons = [...reasons, ...reasons];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundGradient}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <span className={styles.badge}>Why Choose Us</span>
          <h1 className={styles.mainTitle}>10 Good Reasons to Choose Us</h1>
          <p className={styles.subtitle}>
            Discover what makes us the premier choice for language learning
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div 
            className={styles.reasonsList}
            onMouseEnter={(e) => e.currentTarget.classList.add(styles.paused)}
            onMouseLeave={(e) => e.currentTarget.classList.remove(styles.paused)}
          >
            {duplicatedReasons.map((reason, index) => (
              <div key={`${reason.id}-${index}`} className={styles.reasonCard}>
                <div className={styles.cardInner}>
                  <div className={styles.numberBadge}>
                    <span className={styles.numberText}>{reason.id}</span>
                    <div className={styles.numberGlow}></div>
                  </div>

                  <div className={styles.imageSection}>
                    <img 
                      src={reason.image} 
                      alt={reason.title} 
                      className={styles.cardImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.iconBadge}>{reason.icon}</div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{reason.title}</h3>
                    <p className={styles.cardDescription}>{reason.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mobileHint}>
          <span className={styles.hintIcon}>👆</span>
          <span className={styles.hintText}>Swipe to explore all reasons</span>
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;