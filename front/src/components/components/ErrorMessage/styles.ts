import styled from 'styled-components';

export const ErrorContainer = styled.div`
  background: ${({ theme }) => theme.error};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 59, 48, 0.3)' : 'transparent')};
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 4px 12px rgba(255, 59, 48, 0.15)' : 'none')};
  
  p {
    color: ${({ theme }) => (theme.themeMode === 'light' ? 'white' : theme.textPrimary)};
    font-size: 1rem;
    font-weight: ${({ theme }) => (theme.themeMode === 'light' ? '500' : 'normal')};
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) => theme.error.replace('0.7', '0.9')};
  }
  
  @media (max-width: 320px) {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;
