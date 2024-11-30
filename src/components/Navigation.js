import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <Nav>
      <NavItem 
        onClick={() => handleTabClick('/service')}
        isActive={location.pathname === '/service'}
      >
        서비스 소개
      </NavItem>
      <NavItem 
        onClick={() => handleTabClick('/features')}
        isActive={location.pathname === '/features'}
      >
        기능
      </NavItem>
      <NavItem 
        onClick={() => handleTabClick('/partners')}
        isActive={location.pathname === '/partners'}
      >
        협력업체
      </NavItem>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.div`
  position: fixed;
  top: 40px;
  right: 60px;
  display: flex;
  gap: 40px;
  z-index: 10;
`;

const NavItem = styled.div`
  font-size: 20px;
  color: ${props => props.isActive ? '#000' : '#666'};
  font-weight: ${props => props.isActive ? '700' : '400'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    font-weight: 700;
    color: #000;
  }
`;