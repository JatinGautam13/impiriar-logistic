"use client";
import React from "react";
import styles from "./homeSection6.module.css";

const HomeSection6 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      course: "French",
      icon: "🇫🇷",
      rating: 5,
      testimonial: "The French classes transformed my speaking skills completely. My tutor made every lesson engaging and practical. I can now confidently communicate in Paris!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      achievement: "B2 Level in 6 months"
    },
    {
      id: 2,
      name: "Michael Weber",
      course: "German",
      icon: "🇩🇪",
      rating: 5,
      testimonial: "Exceptional teaching methodology! The structured approach helped me grasp German grammar effortlessly. Now I'm working in Berlin thanks to my language skills.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      achievement: "C1 Certified"
    },
    {
      id: 3,
      name: "Isabella Rodriguez",
      course: "Spanish",
      icon: "🇪🇸",
      rating: 5,
      testimonial: "Learning Spanish here was the best decision! The cultural immersion and native tutors made me fluent in no time. ¡Absolutamente increíble!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      achievement: "Fluent Speaker"
    },
    {
      id: 4,
      name: "Kenji Tanaka",
      course: "Japanese",
      icon: "🇯🇵",
      rating: 5,
      testimonial: "The Japanese program is outstanding! From hiragana to kanji, every step was well-paced. My tutor's patience and expertise made complex concepts easy.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      achievement: "JLPT N2 Passed"
    },
    {
      id: 5,
      name: "Ji-hye Park",
      course: "Korean",
      icon: "🇰🇷",
      rating: 5,
      testimonial: "Amazing Korean classes! I went from zero knowledge to conversational fluency. The interactive lessons and K-drama discussions made learning so fun!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      achievement: "TOPIK Level 4"
    },
    {
      id: 6,
      name: "Aisha Patel",
      course: "IELTS",
      icon: "📚",
      rating: 5,
      testimonial: "Scored 8.5 in IELTS thanks to the comprehensive prep course! The mock tests and personalized feedback were invaluable for my university application.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      achievement: "Band 8.5 Achieved"
    },
    {
      id: 7,
      name: "David Thompson",
      course: "TOEFL",
      icon: "🏆",
      rating: 5,
      testimonial: "The TOEFL preparation was incredibly thorough. I improved my score by 30 points! The speaking practice sessions were particularly helpful.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      achievement: "110/120 Score"
    },
    {
      id: 8,
      name: "Priya Sharma",
      course: "GRE",
      icon: "✨",
      rating: 5,
      testimonial: "Best GRE prep I could ask for! The verbal and quant strategies were game-changers. Got into my dream grad school with a 330 score!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      achievement: "330/340 Score"
    },
    {
      id: 9,
      name: "Lucas Martinez",
      course: "PTE",
      icon: "💎",
      rating: 5,
      testimonial: "The PTE coaching was exceptional! Clear strategies for each section and plenty of practice materials. Achieved my target score on first attempt!",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      achievement: "85/90 Score"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>What Our Students Say</h1>
        <p className={styles.subtitle}>Real success stories from learners worldwide</p>

        <div className={styles.carouselWrapper}>
          <div 
            className={styles.testimonialsList}
            onMouseEnter={(e) => e.currentTarget.classList.add(styles.paused)}
            onMouseLeave={(e) => e.currentTarget.classList.remove(styles.paused)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className={styles.testimonialItem}>
                <div className={styles.testimonialContent}>
                  <div className={styles.header}>
                    <div className={styles.imageWrapper}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className={styles.profileImage}
                        loading="lazy"
                      />
                      <div className={styles.courseIcon}>{testimonial.icon}</div>
                    </div>
                    
                    <div className={styles.studentInfo}>
                      <h3 className={styles.studentName}>{testimonial.name}</h3>
                      <p className={styles.courseName}>{testimonial.course}</p>
                      <div className={styles.rating}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className={styles.star}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.quoteIcon}>"</div>
                  
                  <p className={styles.testimonialText}>{testimonial.testimonial}</p>
                  
                  <div className={styles.achievement}>
                    <span className={styles.achievementBadge}>
                      🎯 {testimonial.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mobileHint}>
          <span className={styles.hintIcon}>⬅</span>
          <span className={styles.hintText}>Swipe to see more testimonials</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;