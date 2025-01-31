import React from "react";
import styled from "styled-components";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 85px;
  height: 85px;
  background: transparent;
  border-radius: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 1000;
  overflow: hidden;

  &:hover {
    filter: drop-shadow(4px 4px 4px 8px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 420px) {
    width: 60px;
    height: 60px;
  }
`;

const FloatingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  
  ${FloatingButton}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

type FloatingButtonProps = {
  imageSrc: string;
  altText?: string;
  onClick?: () => void;
};

const WhatsApp: React.FC<FloatingButtonProps> = ({ imageSrc, altText = "WhatsApp Button", onClick }) => {
  return (
    <FloatingButton onClick={onClick}>
      <FloatingImage src={imageSrc} alt={altText} />
    </FloatingButton>
  );
};

export default WhatsApp;
