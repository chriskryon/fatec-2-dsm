import { createContext, useEffect, useState } from 'react';
import type { LotteryContextProps, Props, ProviderProps } from '../types';
import { getLottery } from '../services/lottery';

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
  const [megasena, setMegasena] = useState<Props | undefined>();
  
  useEffect(() => {
    async function fetchLottery() {
      try {
        const result = await getLottery();
        if ('megasena' in result) {
          setMegasena(result.megasena);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados da loteria:', error);
      }
    }
    
    fetchLottery();
  }, []);
  
  return (
    <LotteryContext.Provider value={{ megasena }}>
      {children}
    </LotteryContext.Provider>
  );
}
