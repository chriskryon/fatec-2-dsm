'use client';

import type React from 'react';
import { useTheme } from '../../../contexts/theme-context';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  ThemeToggle,
  CloverIcon,
} from './styles';
import { Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <CloverIcon>
            <div>
              <img
                src="https://www.lotocerta.com.br/wp-content/uploads/2020/01/logo-mega-sena-em-png.png"
                alt="Clover"
                width={64}
                height={64}
              />
            </div>
          </CloverIcon>
          Mega-Sena
        </Logo>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={
            themeMode === 'dark'
              ? 'Mudar para tema claro'
              : 'Mudar para tema escuro'
          }
        >
          {themeMode === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </ThemeToggle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
