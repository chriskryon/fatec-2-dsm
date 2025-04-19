export default interface ChildrenProps {
  children: React.ReactNode;
}

export interface BallProps {
  number: string;
}

export interface LotteryContextProps {
  attempts: string[];
  setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
}
