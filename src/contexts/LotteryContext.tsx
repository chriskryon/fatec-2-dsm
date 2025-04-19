import { createContext, useEffect, useState, type ReactNode } from 'react';
import type { LotteryContextProps } from '../types';

export const LotteryContext = createContext<LotteryContextProps>(
  {} as LotteryContextProps,
);

export const LotteryProvider = ({ children }: { children: ReactNode }) => {
  const [attempts, setAttempts] = useState<string[]>(() => {
    const savedAttempts = localStorage.getItem('attempts');
    return savedAttempts ? JSON.parse(savedAttempts) : [];
  });

  useEffect(() => {
    localStorage.setItem('attempts', JSON.stringify(attempts));
  }, [attempts]);

  return (
    <LotteryContext.Provider value={{ attempts, setAttempts }}>
      {children}
    </LotteryContext.Provider>
  );
};
