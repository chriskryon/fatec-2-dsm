import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TextContextProps } from '../types';

const TextContext = createContext<TextContextProps | undefined>(undefined);

export const TextProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState('');

  return (
    <TextContext.Provider value={{ input, setInput }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }
  return context;
};