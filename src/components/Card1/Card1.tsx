import React from 'react';
import { Card, Space } from 'antd';
import styled from 'styled-components';

// Estilo para el párrafo
const Parraf = styled.p`
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: justify;
  text-justify: inter-word; 
`;

// Estilo para el título
const Title = styled.h3`
  color: #11417b;  
  font-size: 1.7rem;  
  font-weight: 700; 
  margin-bottom: 16px;
  text-align: center;
  word-wrap: break-word; 
  overflow-wrap: break-word;
  border-bottom: solid black;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.5rem;  
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;  
  }
`;

// Estilo para el Card, haciéndolo responsive después de 430px
const StyledCard = styled(Card)`
  width: 90%;
  max-width: 650px;
  min-width: 400px; 
  max-height: 500px;
  border: 1px solid #11417b12;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: flex-start;  
  min-height: 400px; 
  &:hover {
    transform: scale(1.02); 
    background-color: #f8f8ffca;
  }

  @media (max-width: 812px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 430px) {
    min-width: 100%; 
    max-height: none;
    padding: 8px;
  }
`;

// Estilo para la imagen con animación de escala
const Image = styled.img`
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  object-fit: contain; 
  display: block;
  margin: 0 auto;
  height: auto;
  transition: transform 0.3s ease-in-out; 

  &:hover {
    transform: scale(1.2); 
  }

  @media (max-width: 430px) {
    max-width: 100%;
    max-height: 150px;
  }
`;

// Definir las propiedades de Card1
interface CardProps {
  title: string;
  parraf: string;
  image?: string;
}

// Ajustar React.FC para aceptar las propiedades CardProps
const Card1: React.FC<CardProps> = (props) => (
  <Space direction="vertical" size={16} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <StyledCard>
      <Title>{props.title}</Title>
      <Parraf>{props.parraf}</Parraf>
      {props.image && <Image src={props.image} alt="Imagen Servicio" />}
    </StyledCard>
  </Space>
);

export default Card1;
