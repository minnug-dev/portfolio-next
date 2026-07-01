import React from 'react';

import { footerText } from '@/constants';

const Footer = () => {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer__inner">
        &copy; 2023 webstoryboy
        <br />이 사이트는 비트를 이용하여 제작하였습니다.
      </div>
    </footer>
  );
};

export default Footer;
