import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', fontSize: '24px' }}>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
