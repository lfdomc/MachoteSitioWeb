import styled from "styled-components"
import Banner from "../components/Banner/Banner"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Divider1 from "../components/Divider/Divider1"

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    display: none;  // Oculta la sección en pantallas menores a 450px
  }
`;


const Home = () => {
  const { colorprimary } = useContext(GlobalContext);

  return (
    <div>
      <Banner image="/image/react.png" h1="DISEÑO DE PÁGINAS WEB" color={colorprimary} fcolor="white"/>
      <Divider1/>
      <Section>
      </Section>
    </div>
  )
}

export default Home
