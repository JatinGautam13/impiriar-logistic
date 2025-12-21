// components/layout/Header.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [hideAnnouncement, setHideAnnouncement] = useState(false);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const pathname = usePathname();

  const announcements = [
    "🌍 Your global language partner for international success",
    "🚀 Breaking language barriers across 100+ countries",
    "✨ Professional translation services available 24/7",
    "🎯 Trusted by leading enterprises worldwide",
    "💼 Seamless multilingual business communication"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 8);
      setHideAnnouncement(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prevIndex) => 
        (prevIndex + 1) % announcements.length
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  const navLinks = [
    {
      title: 'Services',
      href: '/services',
      hasDropdown: true,
      menu: [
        {
          title: 'Translation Services',
          tagline: 'Professional translation in 100+ languages.',
          href: '/services/translation',
        },
        {
          title: 'Interpretation',
          tagline: 'Real-time interpretation for your business.',
          href: '/services/interpretation',
        },
        {
          title: 'Localization',
          tagline: 'Adapt your content for global markets.',
          href: '/services/localization',
        },
        {
          title: 'Language Training',
          tagline: 'Corporate language programs.',
          href: '/services/training',
        },
      ],
    },
    { title: 'About', href: '/about' },
    {
      title: 'Resources',
      href: '/resources',
      hasDropdown: true,
      menu: [
        {
          title: 'Blog',
          tagline: 'Insights on language and culture.',
          href: '/resources/blog',
        },
        {
          title: 'Case Studies',
          tagline: 'Success stories from our clients.',
          href: '/resources/case-studies',
        },
      ],
    },
    { title: 'Contact', href: '/contact-us' },
  ];

  const toggleMobileDropdown = (title) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Announcement Bar */}
      <div className={`${styles.announcementBar} ${hideAnnouncement ? styles.announcementHidden : ''}`}>
        <div className={styles.announcementContent}>
          <span className={styles.announcementText} key={currentAnnouncementIndex}>
            {announcements[currentAnnouncementIndex]}
          </span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image 
              src="/uploads/im[p new.png"
              alt="Imperial Linguistics Logo"
              width={200}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.title} className={styles.navItem}>
                  {link.hasDropdown ? (
                    <div className={styles.dropdown}>
                      <button className={styles.navLink}>
                        {link.title}
                        <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownContent}>
                          {link.menu?.map((item) => (
                            <Link key={item.title} href={item.href} className={styles.dropdownItem}>
                              <div className={styles.dropdownItemContent}>
                                <h6 className={styles.dropdownItemTitle}>{item.title}</h6>
                                <p className={styles.dropdownItemTagline}>{item.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} className={styles.navLink}>
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className={styles.authButtons}>
            <Link href="/sign-in" className={styles.btnSignIn}>
              Sign in
            </Link>
            <Link href="/login" className={styles.btnSignUp}>
              Login
              <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3L13 8L8 13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <div key={link.title} className={styles.mobileNavItem}>
                  {link.hasDropdown ? (
                    <div className={styles.mobileDropdownWrapper}>
                      <button 
                        className={styles.mobileNavLink}
                        onClick={() => toggleMobileDropdown(link.title)}
                      >
                        <span>{link.title}</span>
                        <svg 
                          className={`${styles.mobileChevron} ${openMobileDropdown === link.title ? styles.mobileChevronOpen : ''}`}
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          fill="none"
                        >
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {openMobileDropdown === link.title && (
                        <div className={styles.mobileDropdownContent}>
                          {link.menu?.map((item) => (
                            <Link 
                              key={item.title} 
                              href={item.href} 
                              className={styles.mobileDropdownItem}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className={styles.mobileDropdownItemContent}>
                                <h6 className={styles.mobileDropdownItemTitle}>{item.title}</h6>
                                <p className={styles.mobileDropdownItemTagline}>{item.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className={styles.mobileAuthButtons}>
              <Link href="/quote" className={styles.btnSignIn}>
                Signin
              </Link>
              <Link href="/contact" className={styles.btnSignUp}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;