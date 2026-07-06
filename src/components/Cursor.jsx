'use client';

import { useCursor } from '../utils/useCursor';

export default function Cursor() {
  useCursor();

  return (
    <div className="cursor">
      <span className="cursor-text"></span>
    </div>
  );
}
