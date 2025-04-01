import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TextContextProps } from '../types';

const TextContext = createContext<TextContextProps>({} as TextContextProps);

export const TextProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState('');

  return (
    <TextContext.Provider value={{ input, setInput }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  return useContext(TextContext);
};
