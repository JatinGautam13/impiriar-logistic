"use client";
import React, { useState, useEffect } from 'react';
import styles from './timedPopupForm.module.css';

const TimedPopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    // Check if form was submitted or closed recently
    const formSubmitted = localStorage.getItem('popupFormSubmitted');
    const formClosed = localStorage.getItem('popupFormClosed');
    
    if (formSubmitted) {
      // If form was submitted, never show again
      return;
    }

    if (formClosed) {
      const closedTime = parseInt(formClosed);
      const threeDaysInMs = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
      const currentTime = Date.now();
      
      // Check if 3 days have passed
      if (currentTime - closedTime < threeDaysInMs) {
        return; // Don't show popup if less than 3 days
      }
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Store the time when form was closed
    localStorage.setItem('popupFormClosed', Date.now().toString());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.language) {
      alert('Please fill in all fields');
      return;
    }

    // Your form submission logic here
    console.log('Form submitted:', formData);
    
    // Mark form as submitted permanently
    localStorage.setItem('popupFormSubmitted', 'true');
    
    // Close popup
    setShowPopup(false);
    
    // Show success message
    alert('Thank you! We will contact you soon.');
  };

  if (!showPopup) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={handleClose}>
          <span className={styles.closeIcon}>✕</span>
        </button>

        {/* Popup Content */}
        <div className={styles.popupContent}>
          <div className={styles.popupHeader}>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>🎓</span>
              <span className={styles.badgeText}>Special Offer</span>
            </span>
            <h2 className={styles.popupTitle}>
              Start Your Language Journey <span className={styles.highlight}>Today!</span>
            </h2>
            <p className={styles.popupDescription}>
              Get a FREE 30-minute consultation with our expert tutors. Limited spots available!
            </p>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${focusedField === 'name' ? styles.focused : ''}`}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${focusedField === 'email' ? styles.focused : ''}`}
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${focusedField === 'phone' ? styles.focused : ''}`}
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Language of Interest *</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                onFocus={() => setFocusedField('language')}
                onBlur={() => setFocusedField(null)}
                className={`${styles.select} ${focusedField === 'language' ? styles.focused : ''}`}
              >
                <option value="">Select a language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            <button onClick={handleSubmit} className={styles.submitButton}>
              <span>Get Free Consultation</span>
              <span className={styles.buttonIcon}>→</span>
            </button>

            <p className={styles.disclaimer}>
              By submitting, you agree to our Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimedPopupForm;