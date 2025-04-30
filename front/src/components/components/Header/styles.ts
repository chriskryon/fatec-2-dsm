import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : theme.glassBg)};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) =>
    theme.themeMode === 'light'
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(255, 255, 255, 0.1)'};
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.05)' : 'none')};
  
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

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => (theme.themeMode === 'light' ? theme.primary : theme.accent)};
  text-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 1px 1px rgba(0, 0, 0, 0.1)' : 'none')};
`;

export const CloverIcon = styled.span`
  color: ${({ theme }) => (theme.themeMode === 'light' ? theme.primary : theme.accent)};
  font-size: 1.5rem;
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.glassBg)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : `${theme.accent}20`)};
    color: ${({ theme }) => (theme.themeMode === 'light' ? theme.primary : theme.accent)};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }
`;
