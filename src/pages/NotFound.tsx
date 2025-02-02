import styled from "styled-components";

const Page404 = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; /* Asegura que el texto esté centrado */
    margin: 0;

    h1 {
        font-size: 100px;
    }
    p {
        font-size: 50px;
    }
`;

function NotFound() {
    return (
        <Page404>
            <h1>404</h1>
            <p>La página que estás buscando no existe.</p>
        </Page404>
    );
}

export default NotFound;
