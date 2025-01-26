import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Section = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 2px;
`;

interface UlProps {
  $isOpen: boolean;
}

const Ul = styled.ul<UlProps>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 554px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 140px;  /* Ajuste de la posición vertical */
    left: 50%;
    transform: translateX(-50%);  /* Centrado horizontal */
    background-color: #11417b86;
    width: 200px;
    flex-direction: column;
    border-radius: 60px;
    gap: 10px;
    padding: 2px;
    z-index: 300;
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border: 2px solid #11417b;
  border-radius: 20px;
  background-color: #f0f0f0;
  color: #000000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #11417b;
    border: 2px solid #eef0f2;
    color: white;
    transform: scale(1.05);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    width: 20px;
    height: 3px;
    background-color: #11417b;
    border-radius: 5px;
  }

  @media (max-width: 554px) {
    display: flex;
  }
`;

function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Función para cerrar el menú

  return (
    <Section>
      <Nav>
        <Hamburger onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Ul $isOpen={isOpen}>
          <li>
            <StyledLink to="/" onClick={closeMenu}>Inicio</StyledLink>
          </li>
          <li>
            <StyledLink to="/servicios" onClick={closeMenu}>Servicios</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact" onClick={closeMenu}>Contácto</StyledLink>
          </li>
        </Ul>
      </Nav>
    </Section>
  );
}

export default MenuHeader;
