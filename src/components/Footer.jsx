import React from 'react';

import { footerText } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="mono">{footerText.info}</p>
        <p className="copy">
          &copy;{' '}
          <span className="mono">
            {currentYear} {footerText.name}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
