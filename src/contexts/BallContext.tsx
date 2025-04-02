import { createContext, useState, type ReactNode } from 'react';
import type { TextContextProps } from '../types';

export const TextContext = createContext<TextContextProps>(
  {} as TextContextProps,
);

export const TextProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState('');

  return (
    <TextContext.Provider value={{ input, setInput }}>
      {children}
    </TextContext.Provider>
  );
};