import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  animation: fadeIn 0.5s ease-in-out;
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? theme.shadow : 'none')};
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? theme.borderLight : 'rgba(255, 255, 255, 0.1)')};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) => theme.glassBg.replace('0.7', '0.9')};
  }
  
  @media (max-width: 320px) {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.5rem;
`;

export const CardDate = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0.5rem;
`;

export const PremioEstimado = styled.div`
  background: ${({ theme }) =>
    theme.themeMode === 'light'
      ? 'rgba(52, 199, 89, 0.15)'
      : `${theme.primary}80`};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => (theme.themeMode === 'light' ? theme.primary : theme.textPrimary)};
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(52, 199, 89, 0.3)' : 'transparent')};
`;

export const BallsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.div`
  background: ${({ theme }) =>
    theme.themeMode === 'light' ? theme.glassBgLighter : theme.glassBg};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? theme.borderLight : 'rgba(255, 255, 255, 0.05)')};
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none')};
  
  @supports not (backdrop-filter: blur(8px)) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'rgba(255, 255, 255, 0.9)'
        : theme.glassBg.replace('0.7', '0.9')};
  }

  transition: border-color 0.2s ease;
    
    &:hover {
    border-color: ${({ theme }) => theme.accent};
    }
`;

export const ResultTitle = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.5rem;
`;

export const ResultValue = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0.25rem;
`;

export const ResultDetail = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;
