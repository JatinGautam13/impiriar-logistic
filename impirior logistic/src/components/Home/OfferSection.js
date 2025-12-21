// components/Offer/OfferSection.js
"use client";

import React from "react";
import styles from "./offerSection.module.css";

const OFFERS = [
  {
    id: 1,
    title: "Up to ₹20,000 discount vouchers",
    description:
      "Limited seats available for early enrollments during the festive period.",
  },
  {
    id: 2,
    title: "Free A1 Foreign Language",
    description:
      "Enroll in IELTS, TOEFL, GRE or PTE comprehensive and get one foreign language A1 level free.",
  },
  {
    id: 3,
    title: "Career counselling",
    description:
      "Get expert guidance for multiple skills and career paths at no additional cost.",
  },
  {
    id: 4,
    title: "registration at just ₹999",
    description:
      "Register now just at 999 and lock your seat and start anytime when you want",
  },
];

const OfferSection = () => {
  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        {/* FIRST DIV: left (unchanged) */}
        <div className={styles.left}>
          <span className={styles.badge}>15 Dec – 15 Jan</span>

          <h2 className={styles.heading}>
            Christmas &amp; New Year <span>Festive Offer</span>
          </h2>

          <p className={styles.subtext}>
            Celebrate the season with exclusive learning benefits, crafted to
            match your global language journey.
          </p>

          <div className={styles.ribbon}>
            <span className={styles.ribbonText}>Live now • Limited period</span>
          </div>
        </div>

        {/* SECOND DIV: right top – offers + note */}
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <ul className={styles.offerList}>
              {OFFERS.map((offer, index) => (
                <li key={offer.id} className={styles.offerItem}>
                  <div className={styles.offerAccent} aria-hidden="true" />

                  <div className={styles.offerIndex}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  <div className={styles.offerContent}>
                    <h3 className={styles.offerTitle}>{offer.title}</h3>
                    <p className={styles.offerDescription}>
                      {offer.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              * Offers valid only between 15 December and 15 January on applicable
              courses.
            </p>
          </div>

          {/* THIRD DIV: bottom – centered button */}
          <div className={styles.rightBottom}>
            <button className={styles.ctaButton}>Book your slot now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
