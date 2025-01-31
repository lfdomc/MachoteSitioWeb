import styled from "styled-components";

const H1 = styled.h1<{ $bgColor: string, $fColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fColor};
  width: auto;
  padding: 10px 20px;
  font-family: "Roboto", serif;
  text-align: center;
  font-size: 1.9rem;
  font-weight: 800;
  border-bottom :  solid ${(props) => props.$fColor};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Banner1 = styled.div<{ $bgColor: string, $fColor: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  background-color: ${(props) => props.$bgColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2px;
  padding: 10px;
  

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2px;
  }
`;

const Image = styled.img`
padding: 10px;
  width: 600px;
  height: 100%;
  border-radius:50px;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.06);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: auto;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    max-height: auto;
  }
`;

interface Info {
  image: string;
  h1?: string;
  color: string;
  fcolor: string;
}

const Banner = ({ image, h1, color, fcolor }: Info) => {
  return (
    <Banner1 $bgColor={color} $fColor={fcolor}>
      <Image src={image} alt="Logo"  onClick={() => window.location.href = "https://wa.me/50670120250"}/>
      <H1 $bgColor={color} $fColor={fcolor}>{h1}</H1>
    </Banner1>
  );
};

export default Banner;
