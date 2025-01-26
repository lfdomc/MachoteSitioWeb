import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderStyle = styled.header`
  padding-top: 10.5px;
  padding-bottom: 10.5px;
  padding-left: 51.15px;
  display: flex;
  justify-content: center;
  
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  

  img {
    max-width: 10.528rem;
    max-height: 6.5rem;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.7); 
    background-color: #f0f0f05a;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    img {
      max-width: 8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 70%;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 427px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 80%;
    }
  }
`;

const ContainerButtons = styled.section`
  display: flex;
  gap: 25px;
  padding-right: 51.15px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
  }

  @media (max-width: 427px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #000205;
  margin: 10px 0;
 

  @media (max-width: 1024px) {
    font-size: 1rem;  
  }

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 427px) {
    font-size: 1rem;  
  }
`;

const Footer = () => {

  const { logo } = useContext(GlobalContext);
  
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Logo " />
      </Link>

      <ContainerButtons>
        <H3>Telefono: +506 7012-0250</H3>
        <H3>Email: info@crtemsa.com</H3>
      </ContainerButtons>
    </HeaderStyle>
  );
};

export default Footer;
