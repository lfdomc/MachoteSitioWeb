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
  align-items: center;
  background-color: #f0f0f0c7;
  flex-direction: column;

  img {
    max-width: 6.528rem;
    max-height: 6.5rem;
    border-radius: 30px;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    img {
      max-width: 8rem;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 80%;
      margin-bottom: 15px;
      margin-left: 25px;
    }
  }

  @media (max-width: 427px) {
    padding: 10px;
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
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 427px) {
    flex-direction: column;
    gap: 5px;
    margin-left: 50px;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #000205;
  margin: 2px 0;

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
