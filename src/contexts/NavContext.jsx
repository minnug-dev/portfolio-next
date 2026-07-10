import { createContext, useContext, useState } from 'react';

const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(null);

  return <NavContext.Provider value={{ activeLink, setActiveLink }}>{children}</NavContext.Provider>;
};

export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');

  return ctx;
};
