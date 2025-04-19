import { createContext, useEffect, useState } from 'react';
import type { LotteryContextProps, LotteryProps, ProviderProps } from '../types';
import { getLottery } from '../services/lottery';

export const LotteryContext = createContext({} as LotteryContextProps);


export function LotteryProvider({ children }: ProviderProps) {
  // const [megasena, setMegasena] = useState<Props | undefined>();
  const [lotteries, setLotteries] = useState<LotteryProps | undefined>();
  
  
  useEffect(() => {
    async function fetchLottery() {
      try {
        const result = await getLottery();
        setLotteries(result);
      } catch (error) {
        console.error('Erro ao buscar os dados da loteria:', error);
      }
    }

    fetchLottery();
  }, []);
  
  return (
    <LotteryContext.Provider value={{ lotteries }}>
      {children}
    </LotteryContext.Provider>
  );
}
