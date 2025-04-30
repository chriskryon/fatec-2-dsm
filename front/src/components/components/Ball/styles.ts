import styled from 'styled-components';

export const BallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${({ theme }) => (theme.themeMode === 'light' ? 'white' : theme.textPrimary)};
  background: ${({ theme }) => theme.ballBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid ${({ theme }) => theme.ballBorder};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) =>
    theme.themeMode === 'light' ? '0 4px 12px rgba(0, 100, 0, 0.3)' : 'none'};
  
  &:hover {
    transform: scale(1.1);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: ${({ theme }) =>
      theme.themeMode === 'light' ? '0 6px 16px rgba(0, 100, 0, 0.4)' : 'none'};
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) => theme.ballBg.replace('0.7', '0.9')};
  }
  
  @media (max-width: 320px) {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;
