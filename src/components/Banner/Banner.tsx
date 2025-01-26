import styled from "styled-components";

const H1 = styled.h1<{ $bgColor: string, $fColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fColor};
  width: auto;
  padding: 10px 20px;
  font-family: "Roboto", serif;
  text-align: center;
  font-size: 1.5rem;

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
  flex-direction: row;
  background-color: ${(props) => props.$bgColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2px;
  }
`;

const Image = styled.img`
padding: 10px;
  width: 100px;
  height: 100%;

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 80px;
  }

  @media (max-width: 480px) {
    max-width: 50px;
    max-height: 70px;
  }
`;

interface Info {
  image: string;
  h1: string;
  color: string;
  fcolor: string;
}

const Banner = ({ image, h1, color, fcolor }: Info) => {
  return (
    <Banner1 $bgColor={color} $fColor={fcolor}>
      <Image src={image} alt="Logo" />
      <H1 $bgColor={color} $fColor={fcolor}>{h1}</H1>
    </Banner1>
  );
};

export default Banner;
