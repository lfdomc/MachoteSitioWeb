import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
  a:hover {
    background-color: #2b406e;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 424px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
    background-color: #5959d7;
    color: white;
    transform: scale(1.05);
  }
`;

function MenuHeader() {
  return (
    <Section>
      <Nav id="menu" className="desplegable">
        <Ul>
          <li>
            <StyledLink to="/">Inicio</StyledLink>
          </li>
          <li>
            <StyledLink to="/servicios">Servicios</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contácto</StyledLink>
          </li>
        </Ul>
      </Nav>
    </Section>
  );
}

export default MenuHeader;
