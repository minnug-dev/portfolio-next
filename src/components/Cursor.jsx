'use client';

import { useCursor } from '../utils/useCursor';

const Cursor = () => {
  useCursor();

  return (
    <div className="cursor">
      <span className="cursor-text"></span>
    </div>
  );
};

export default Cursor;
