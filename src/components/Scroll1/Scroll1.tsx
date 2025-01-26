import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 382px;
 
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 44px;
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px; // Reducir tamaño de fuente en pantallas pequeñas
    padding: 10px;
  }
`;

const Img = styled.img`
  height: 250px;
  width: 500px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: auto; // Ajustar la altura en pantallas pequeñas
    width: 100%; // Hacer que la imagen ocupe todo el ancho
  }
`;

const contentStyle: React.CSSProperties = {
  color: '#221852',
  textAlign: 'center',
  background: "transparent",
  padding: '20px 0',
};

const Scroll1: React.FC = () => (
  <Carousel autoplay>
    <SlideContainer>
      <ImgWrapper>
        <H1>Formularios Empresariales </H1>
        <Img src="/image/formulario.png" alt="Formulario" />
      </ImgWrapper>
      <h3 style={contentStyle}></h3>
    </SlideContainer>
    <SlideContainer>
      <ImgWrapper>
        <H1>Diseños Responsivos </H1>
        <Img src="/image/responsivo.jpg" alt="Imagen 2" />
      </ImgWrapper>
      <h3 style={contentStyle}></h3>
    </SlideContainer>
    <SlideContainer>
      <ImgWrapper>
        <H1>Diseños Personalizados </H1>
        <Img src="/image/reactbanner.png" alt="Imagen 3" />
      </ImgWrapper>
      <h3 style={contentStyle}></h3>
    </SlideContainer>
  </Carousel>
);

export default Scroll1;
