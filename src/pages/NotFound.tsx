import styled from "styled-components";

const Page404 = styled.section`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
    }
    p {
        font-size: 50px;
    }
`;

function NotFound() {
    return (
        <Page404 style={{  }}>
            <h1>404</h1>
            <p>La página que estás buscando no existe.</p>
        </Page404>
    );
}

export default NotFound;