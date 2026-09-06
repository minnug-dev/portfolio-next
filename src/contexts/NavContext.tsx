import { createContext, useContext, useState, ReactNode } from 'react';

interface NavContextType {
  activeLink: string | null;
  setActiveLink: (link: string | null) => void;
}

const NavContext = createContext<NavContextType | null>(null);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return <NavContext.Provider value={{ activeLink, setActiveLink }}>{children}</NavContext.Provider>;
};

export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');

  return ctx;
};
