import styled from 'styled-components';
import AppRoutes from '../routes/AppRoutes';
import ThemeToggleButton from './ThemeToggle';

const AppContainer = styled.div`
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  max-height: 100vh;
  overflow-y: auto;
  padding-top: 50px;
`;

export function ThemedApp() {
  return (
    <AppContainer>
      <ThemeToggleButton />
      <MainContainer>
        <AppRoutes />
      </MainContainer>
    </AppContainer>
  );
}