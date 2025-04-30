import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : theme.glassBg)};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid ${({ theme }) =>
    theme.themeMode === 'light'
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(255, 255, 255, 0.1)'};
  
  @supports not (backdrop-filter: blur(20px)) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'rgba(255, 255, 255, 0.95)'
        : theme.glassBg.replace('0.7', '0.9')};
  }
  
  @media (max-width: 320px) {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;
