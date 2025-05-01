import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export default function ThemeToggleButton() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {darkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
    </ToggleButton>
  );
}