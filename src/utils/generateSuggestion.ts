export const generateLotteryNumbers = (count = 6, max = 60): number[] => {
  const numbers: number[] = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.push(randomNumber);
  }

  return numbers;
};
