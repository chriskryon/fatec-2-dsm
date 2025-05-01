import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 40px 0px;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  height: 50px;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const LogoButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

const LogoImage = styled.img`
  width: 150px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 50px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    background-color: ${props => props.theme.colors.button.hover};
    transform: scale(1.05);
  }
`;

export default function Menu() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <NavBar>
      <LogoContainer>
        <LogoButton onClick={handleLogoClick}>
          <LogoImage src="/fatec.png" alt="Logo" />
        </LogoButton>
      </LogoContainer>
      <LinksContainer>
        <NavLink to="/">Megasena</NavLink>
        <NavLink to="/outros">Outros Concursos</NavLink>
      </LinksContainer>
    </NavBar>
  );
}