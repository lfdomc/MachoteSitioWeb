import styled from "styled-components"
import Card1 from "../Card1/Card1"
import Scroll1 from "../Scroll1/Scroll1"

const MainContainer = styled.section`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 100%; /* Asegura que el contenedor principal ocupe el 100% del ancho */
    gap: 20px; /* Agrega un espacio de 20px entre los componentes */

    @media (max-width: 725px) {
        flex-direction: column; /* En pantallas pequeñas, pone los componentes uno debajo del otro */
        gap: 10px; /* Espacio menor entre los elementos cuando están en columna */
    }
`

const CardScrollContainer = styled.div`
    flex: 1; /* Hace que cada componente ocupe el 50% del espacio */
    max-width: 50%; /* Establece que el ancho máximo de cada uno sea la mitad de la pantalla */
    box-sizing: border-box; /* Incluye el padding y el borde en el cálculo del ancho */

    @media (max-width: 812px) {
        max-width: 100%; /* En pantallas pequeñas, ocupa el 100% del ancho */
    }
`

const Divider1 = () => {
    return (
        <MainContainer>
            <CardScrollContainer>
                <Card1
                    title="Servicios de Diseño Web"
                    parraf={`
                            En Temsa nos especializamos en el desarrollo de soluciones web modernas y 
                            personalizadas, Usamos las Herramientas más poderosas y populares 
                            para crear interfaces de usuario interactivas y dinámicas. Nuestro enfoque está en crear 
                            experiencias digitales excepcionales para nuestros clientes, adaptadas a sus necesidades 
                            y objetivos.
                            `}
                />
            </CardScrollContainer>
            <CardScrollContainer>
                <Scroll1 />
            </CardScrollContainer>
        </MainContainer>
    )
}

export default Divider1
