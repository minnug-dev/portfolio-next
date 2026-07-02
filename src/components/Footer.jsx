import React from 'react';

import { footerText } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="copy">
          &copy; {currentYear} {footerText.name}. All rights reserved.
        </p>
        <p>{footerText.info}</p>
      </div>
    </footer>
  );
};

export default Footer;
