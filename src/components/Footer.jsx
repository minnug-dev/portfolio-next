import React from 'react';

import { footerText } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer__inner">
        <p>{footerText.info}</p>
        <p className="copy">
          &copy; {currentYear} {footerText.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
