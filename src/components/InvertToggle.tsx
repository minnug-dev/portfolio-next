'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const InvertToggle = () => {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    setInverted(document.documentElement.classList.contains('is-inverted'));
  }, []);

  const toggle = () => {
    const next = !inverted;
    document.documentElement.classList.toggle('is-inverted', next);
    setInverted(next);
  };

  return (
    <button
      type="button"
      className="invert-toggle"
      aria-pressed={inverted}
      aria-label={inverted ? '밝은 화면으로 전환' : '어두운 화면으로 전환'}
      onClick={toggle}
      data-cursor
      data-cursor-size="50"
    >
      <FontAwesomeIcon icon={inverted ? faSun : faMoon} className="icon" />
    </button>
  );
};

export default InvertToggle;
