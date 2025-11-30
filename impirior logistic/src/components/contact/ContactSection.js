"use client";
import React, { useState } from 'react';
import styles from './contactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Visit Us',
      detail: '123 Learning Street, Education City, EC 12345',
      color: '#ef4444'
    },
    {
      id: 2,
      icon: '📧',
      title: 'Email Us',
      detail: 'info@languagelearning.com',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: '📞',
      title: 'Call Us',
      detail: '+1 (234) 567-8900',
      color: '#10b981'
    },
    {
      id: 4,
      icon: '⏰',
      title: 'Working Hours',
      detail: 'Mon - Fri: 9AM - 6PM',
      color: '#f59e0b'
    }
  ];

  const socialLinks = [
    { icon: '📘', name: 'Facebook', color: '#1877f2' },
    { icon: '📷', name: 'Instagram', color: '#e4405f' },
    { icon: '🐦', name: 'Twitter', color: '#1da1f2' },
    { icon: '💼', name: 'LinkedIn', color: '#0077b5' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Get In Touch</span>
          <h1 className={styles.mainTitle}>
            Let's Start a <span className={styles.highlight}>Conversation</span>
          </h1>
          <p className={styles.description}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              
              <div className={styles.formWrapper}>
                <div className={styles.formRow}>
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
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
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
                    <label className={styles.label}>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === 'subject' ? styles.focused : ''}`}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${styles.textarea} ${focusedField === 'message' ? styles.focused : ''}`}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  ></textarea>
                </div>

                <button onClick={handleSubmit} className={styles.submitButton}>
                  <span>Send Message</span>
                  <span className={styles.buttonIcon}>✉️</span>
                </button>
              </div>
            </div>

            {/* Map Section Below Form */}
            <div className={styles.mapCard}>
              <div className={styles.mapPlaceholder}>
                <span className={styles.mapIcon}>🗺️</span>
                <p className={styles.mapText}>View on Map</p>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className={styles.infoSection}>
            {/* Contact Cards */}
            <div className={styles.infoCards}>
              {contactInfo.map((info) => (
                <div 
                  key={info.id} 
                  className={styles.infoCard}
                  style={{'--card-color': info.color}}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <p className={styles.infoDetail}>{info.detail}</p>
                  <div className={styles.infoGlow}></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className={styles.socialLink}
                    style={{'--social-color': social.color}}
                  >
                    <span className={styles.socialIcon}>{social.icon}</span>
                    <div className={styles.socialGlow}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;