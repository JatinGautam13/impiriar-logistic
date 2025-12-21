"use client";

import React, { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    id: 1,
    question: "What languages do you offer?",
    answer:
      "We offer comprehensive courses in French, German, Spanish, Japanese, and Korean. Additionally, we provide specialized test preparation for IELTS, TOEFL, GRE, and PTE. Each course is designed with native speakers and includes cultural immersion.",
    icon: "🌍",
  },
  {
    id: 2,
    question: "How long does it take to become fluent?",
    answer:
      "Fluency timelines vary based on the language, your dedication, and starting level. Typically, students reach conversational fluency in 6-12 months with consistent practice. Our personalized learning paths are designed to optimize your progress based on your goals.",
    icon: "⏱️",
  },
  {
    id: 3,
    question: "Are classes one-on-one or group sessions?",
    answer:
      "We offer both options! Choose one-on-one sessions for personalized attention and faster progress, or join small group classes (4-6 students) for collaborative learning and networking. You can also mix both formats based on your needs.",
    icon: "👥",
  },
  {
    id: 4,
    question: "What are your class timings?",
    answer:
      "We operate 24/7 with flexible scheduling to accommodate students worldwide. Book sessions that fit your schedule, whether early morning, late night, or weekends. Our tutors are available across all time zones.",
    icon: "🕐",
  },
  {
    id: 5,
    question: "Do you provide study materials?",
    answer:
      "Yes! All students receive comprehensive study materials including interactive e-books, practice worksheets, audio lessons, video tutorials, and access to our proprietary learning platform with AI-powered exercises and progress tracking.",
    icon: "📚",
  },
  {
    id: 6,
    question: "What if I need to cancel or reschedule a class?",
    answer:
      "You can reschedule or cancel classes up to 24 hours in advance without any charges. We understand life gets busy, so we've made our policies flexible. Just notify your tutor or use our platform to make changes.",
    icon: "🔄",
  },
  {
    id: 7,
    question: "Will I get a certificate after completion?",
    answer:
      "Absolutely! Upon completing your course, you'll receive a globally recognized certificate that validates your language proficiency. Our certificates are accepted by universities, employers, and immigration authorities worldwide.",
    icon: "🏆",
  },
  {
    id: 8,
    question: "How much do the courses cost?",
    answer:
      "Pricing varies by course type and duration. We offer flexible packages starting from affordable monthly subscriptions to comprehensive annual plans. Contact us for a personalized quote, and ask about our current promotions and student discounts.",
    icon: "💰",
  },
  {
    id: 9,
    question: "Can I try a demo class before enrolling?",
    answer:
      "Yes! We offer a free 30-minute trial class with no commitment required. Experience our teaching methodology, meet your potential tutor, and explore our platform before making any decision. Book your trial class today!",
    icon: "🎯",
  },
  {
    id: 10,
    question: "What technical requirements do I need?",
    answer:
      "You'll need a stable internet connection, a computer or tablet with a webcam and microphone, and a modern web browser. Our platform works seamlessly on Windows, Mac, iOS, and Android devices. We also provide technical support to help you get started.",
    icon: "💻",
  },
];

const FAQSection1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.contentWrapper}>
        {/* Header */}
        <div className={styles.headerSection}>
          <span className={styles.badge}>Got Questions?</span>
          <h1 className={styles.mainTitle}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find answers to common questions about our language courses and services
          </p>
        </div>

        {/* Grid */}
        <div className={styles.faqGrid}>
          {/* Left: FAQ list */}
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className={styles.questionContent}>
                    <span className={styles.faqIcon}>{faq.icon}</span>
                    <span className={styles.questionText}>{faq.question}</span>
                  </div>
                  <span className={styles.toggleIcon}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={styles.faqAnswer}
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0",
                  }}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA card */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>💬</div>
              <h3 className={styles.ctaTitle}>Still Have Questions?</h3>
              <p className={styles.ctaDescription}>
                Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to
                help!
              </p>
              <button className={styles.ctaButton}>
                Contact Support
                <span className={styles.buttonArrow}>→</span>
              </button>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span className={styles.contactText}>support@example.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <span className={styles.contactText}>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection1;
