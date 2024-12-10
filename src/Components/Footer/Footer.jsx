import React from 'react';
import styles from './Footer.module.css';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <h1>UNIVOC</h1>
        <p>Skilling To Empower</p>
        <p className={styles.tagline}>
          "Empowering individuals with the skills to thrive in a changing world. Univoc skilling to empower bridges talent and opportunity, driving innovation and growth for a brighter future."
        </p>
      </div>
      <div className={styles.linksSection}>
        <div>
          <h3>About Us</h3>
          <p>Careers</p>
          <p>Address</p>
          <p>hrd@theunivoc.com</p>
        </div>
        <div>
          <h3>Academics</h3>
          <p>Programme</p>
        </div>
        <div>
          <h3>Innovation</h3>
          <p>Student</p>
          <p>Faculty</p>
        </div>
        <div>
          <h3>Other Links</h3>
          <p>Jobs</p>
          <p>Become A Teacher</p>
          <p>Events</p>
        </div>
      </div>
      <div className={styles.socialSection}>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
