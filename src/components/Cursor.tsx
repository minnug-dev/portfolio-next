'use client';

import { useRef } from 'react';
import { useCursor } from '@/utils/useCursor';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useCursor(cursorRef, textRef);

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-text" ref={textRef}></span>
    </div>
  );
};

export default Cursor;
