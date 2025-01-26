import styled from "styled-components"
import Card1 from "../Card1/Card1"


const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%; 
    

    @media (max-width: 725px) {
        flex-direction: column; /* En pantallas pequeñas, pone los componentes uno debajo del otro */
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
                    title="Sitios Web Personalizados"
                    parraf="Ofrecemos diseño web a medida, adaptado a las necesidades y visión de 
                    tu marca. Creamos sitios web modernos, funcionales y totalmente adaptables a dispositivos móviles.."
                    image="/image/web.png"
                />
            </CardScrollContainer>
            
            <CardScrollContainer>
            <Card1
                    title="Correos Empresariales"
                    parraf="Proveer cuentas de correo electrónico con dominio personalizado (por ejemplo, nombre@empresa.com)."
                    image="/image/correo.png"
                />
            </CardScrollContainer>
            
            <CardScrollContainer>
            <Card1
                    title="Hosting Web y Dominios"
                    parraf="Ofrecemos alojamiento web seguro y rápido para tu sitio, con opciones de servidores compartidos"
                    image="/image/hostin.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="Rediseño de Sitios Web"
                    parraf="Actualización y modernización de sitios web existentes para mejorar su 
                    diseño, usabilidad y funcionalidad, alineándolos con las tendencias actuales."
                    image="/image/rediseno.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="Integración de APIs"
                    parraf="Conexión de sitios y aplicaciones con servicios externos mediante 
                    APIs para agregar funcionalidades avanzadas como pagos, redes sociales y más."
                    image="/image/api.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="Mantenimiento"
                    parraf="Mantenimiento regular para asegurar que el sitio esté siempre actualizado y funcionando correctamente."
                    image="/image/mant.png"
                />
            </CardScrollContainer>
            
        </MainContainer>
    )
}

export default Divider1
