import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? theme.shadow : 'none')};
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? theme.borderLight : 'rgba(255, 255, 255, 0.1)')};
  
  .search-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media (min-width: 640px) {
      flex-direction: row;
    }
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) => theme.glassBg.replace('0.7', '0.9')};
  }
  
  @media (max-width: 320px) {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.5)' : theme.glassBg)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textPrimary};
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? 'inset 0 1px 3px rgba(0, 0, 0, 0.08)' : 'none')};
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.4)' : theme.textSecondary)};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => (theme.themeMode === 'light' ? '#34C759' : theme.accent)};
    box-shadow: ${({ theme }) =>
      theme.themeMode === 'light'
        ? '0 0 0 3px rgba(52, 199, 89, 0.2), inset 0 1px 3px rgba(0, 0, 0, 0.05)'
        : 'none'};
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'rgba(255, 255, 255, 0.9)'
        : theme.glassBg.replace('0.7', '0.9')};
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    }
`;

export const SearchButton = styled.button`
  background: ${({ theme }) =>
    theme.themeMode === 'light'
      ? 'linear-gradient(180deg, #34C759 0%, #2EB350 100%)'
      : theme.glassBg};
  backdrop-filter: ${({ theme }) => (theme.themeMode === 'light' ? 'none' : 'blur(12px)')};
  -webkit-backdrop-filter: ${({ theme }) => (theme.themeMode === 'light' ? 'none' : 'blur(12px)')};
  border: 1px solid ${({ theme }) =>
    theme.themeMode === 'light'
      ? 'rgba(0, 0, 0, 0.05)'
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => (theme.themeMode === 'light' ? 'white' : theme.textPrimary)};
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.12)' : 'none')};
  font-weight: ${({ theme }) => (theme.themeMode === 'light' ? '500' : 'normal')};
  text-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 -1px 0 rgba(0, 0, 0, 0.12)' : 'none')};
  
  &:hover:not(:disabled) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'linear-gradient(180deg, #40D866 0%, #34C759 100%)'
        : `${theme.accent}20`};
    border-color: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : theme.accent)};
    box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 2px 5px rgba(0, 0, 0, 0.15)' : 'none')};
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'linear-gradient(180deg, #2EB350 0%, #27A046 100%)'
        : theme.accent};
    color: ${({ theme }) => (theme.themeMode === 'light' ? 'white' : theme.background)};
    box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? 'inset 0 1px 2px rgba(0, 0, 0, 0.15)' : 'none')};
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'linear-gradient(180deg, #34C759 0%, #2EB350 100%)'
        : theme.glassBg.replace('0.7', '0.9')};
  }
`;

export const RecentButton = styled.button`
  background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : theme.glassBg)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? theme.borderLight : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0 auto;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none')};
  
  &:hover {
    background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : `${theme.accent}20`)};
    border-color: ${({ theme }) => (theme.themeMode === 'light' ? theme.accent : theme.accent)};
    box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 2px 5px rgba(0, 0, 0, 0.15)' : 'none')};
  }
  
  &:active {
    background: ${({ theme }) => (theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.9)' : theme.accent)};
    color: ${({ theme }) => (theme.themeMode === 'light' ? theme.accent : theme.background)};
    box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? 'inset 0 1px 3px rgba(0, 0, 0, 0.1)' : 'none')};
    transform: translateY(1px);
  }
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) =>
      theme.themeMode === 'light'
        ? 'rgba(255, 255, 255, 0.9)'
        : theme.glassBg.replace('0.7', '0.9')};
  }
`;

export const LoadingMessage = styled.div`
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => (theme.themeMode === 'light' ? theme.borderLight : 'rgba(255, 255, 255, 0.1)')};
  box-shadow: ${({ theme }) => (theme.themeMode === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none')};
  
  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ theme }) => theme.glassBg.replace('0.7', '0.9')};
  }
`;
