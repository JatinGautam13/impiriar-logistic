// src/components/CircleNav.js
"use client";

import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './circleNav.module.css';

const CircleNav = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    {
      id: 1,
      Icon: FaPhoneAlt,
      label: 'Phone',
      link: 'tel:+1234567890',
      color: '#10b981',
    },
    {
      id: 2,
      Icon: FaWhatsapp,
      label: 'WhatsApp',
      link: 'https://wa.me/1234567890',
      color: '#25D366',
    },
    {
      id: 3,
      Icon: FaInstagram,
      label: 'Instagram',
      link: 'https://instagram.com/yourusername',
      color: '#E4405F',
    },
    {
      id: 4,
      Icon: FaEnvelope,
      label: 'Email',
      link: 'mailto:info@example.com',
      color: '#3b82f6',
    },
  ];

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.circleNav}>
      {navItems.map((item) => (
        <div
          key={item.id}
          className={styles.navItem}
          onClick={() => handleClick(item.link)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ '--item-color': item.color }}
        >
          <div className={styles.iconCircle}>
            <item.Icon className={styles.icon} />
            <div className={styles.iconGlow}></div>
          </div>

          <div className={styles.tooltip}>
            <span className={styles.tooltipText}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircleNav;