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
                            personalizadas utilizando React.js, una de las bibliotecas más poderosas y populares 
                            para crear interfaces de usuario interactivas y dinámicas. Nuestro enfoque está en crear 
                            experiencias digitales excepcionales para nuestros clientes, adaptadas a sus necesidades 
                            y objetivos.
                        
                            
                            ¿Por qué elegir React.js? React.js es conocido por su rendimiento excepcional, su capacidad 
                            para crear interfaces de usuario rápidas y reactivas, y su arquitectura basada en componentes,
                            lo que permite un desarrollo modular, reutilizable y escalable. Con React, podemos ofrecerte
                            soluciones web que se adaptan perfectamente a tu negocio, optimizando la experiencia de usuario
                            y garantizando un rendimiento sin igual.
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
