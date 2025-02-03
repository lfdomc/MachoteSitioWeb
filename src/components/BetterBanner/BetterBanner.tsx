import styled from "styled-components";
import { Link } from "react-router-dom";

const MainSection = styled.section<{ $bgmain: string, $flexdirection: string, $bgimage: string }>`
    display: flex;
    flex-direction: ${(props) => props.$flexdirection};
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgmain};
    align-items: center;
    justify-content: center;
    background-image: ${(props) => (props.$bgimage ? `url(${props.$bgimage})` : "none")};
    padding: 5px;
    

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

const imagenUp = "/image/ktrina/ktrina2.png";

const SectionA = styled.section<{ $imgflexdirection?: string }>`
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding-top: 5px;
    padding-bottom:10px;
   

    img {
        max-width: 90%;
        height: auto;
        border-radius: 10px;
        padding-bottom: 20px;
    }

    .imagenUp {
        display: ${(props) => props.$imgflexdirection};
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height:auto;
        max-width: 700px;
    }

    @media (max-width: 768px) {
        width: 100%;
        img {
            max-width: 100%;
        }
    }
`;

const SectionB = styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Dosis", sans-serif;
    text-align: center;
    padding: 20px 100px 20px 50px;
    background-color: #9899;

    img {
        max-width: 50%;
        height: auto;
        border-radius: 60px;
        padding-bottom: 20px;
    }

    h1 {
        font-size: clamp(1.5rem, 2vw, 3rem);
        font-weight: 900;
        max-width: 80%;
    }

    h2 {
        font-size: clamp(1rem, 2vw, 1.5rem);
        font-weight: 500;
        text-align: justify;
        max-width: 90%;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
`;

const SectionC = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    background-color: #f3eded68;
   
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 15px;
    text-align: center; 
    

    h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 900;
        text-align: center;
    }

    h3 {
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 700;
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 5px;
        width: 100%;
        padding: 5px;
    }
`;

const SectionD = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: center; 
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button<{ $btColor: string, $fbtColor: string, $hbtColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 250px;
    background-color: ${(props) => props.$btColor};
    color: ${(props) => props.$fbtColor};
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    margin-top: 15px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
        background-color: ${(props) => props.$hbtColor};
    }

    img {
        width: 50px;
    }

    @media (max-width: 768px) {
        width: 20%;
    }
`;

const Button2 = styled(Button) <{ $bt2display: string }>`
    display: ${(props) => props.$bt2display};
`;

interface BannerProps {
    image: string;
    bimage: string;
    title: string;
    text: string;
    text2: string;
    text3: string;
    textbutton: string;
    btColor: string;
    hbtColor: string;
    fbtColor: string;
    bgmain: string;
    flexdirection: string;
    btimage?: string;
    bgimage?: string;
    btonClick?: () => void;
    imonClick?: () => void;
    bt2display: string;
    btimage2?: string;
    bt2Color: string;
    fb2tColor: string;
    textbutton2: string;
    hbt2Color: string;
    bt2onClick?: () => void;
    imgflexdirection?: string;
}

const BetterBanner: React.FC<BannerProps> = ({
    image,
    bimage,
    title,
    text,
    text2,
    text3,
    textbutton,
    btColor,
    fbtColor,
    bgmain,
    hbtColor,
    flexdirection,
    btimage = "",
    bgimage = "",
    btonClick,

    btimage2 = "",
    bt2display,
    bt2Color,
    fb2tColor,
    textbutton2,
    hbt2Color,
    bt2onClick,
    imgflexdirection,
}) => {
    return (
        <MainSection $bgmain={bgmain} $flexdirection={flexdirection} $bgimage={bgimage}>
            <SectionA $imgflexdirection={imgflexdirection}>
                <img className="imagenUp" src={imagenUp} alt="Imagen Up" />
                <img src={image} alt="Imagen" />
                <SectionD>
                    <Button
                        $btColor={btColor}
                        $hbtColor={hbtColor}
                        $fbtColor={fbtColor}
                        onClick={btonClick}>
                        {btimage && <img src={btimage} alt="boton" />}
                        {textbutton}
                    </Button>

                    <Button2
                        $btColor={bt2Color}
                        $hbtColor={hbt2Color}
                        $fbtColor={fb2tColor}
                        onClick={bt2onClick}
                        $bt2display={bt2display}>
                        {btimage2 && <img src={btimage2} alt="boton" />}
                        {textbutton2}
                    </Button2>

                </SectionD>

            </SectionA>
            <SectionB>
                <img src={bimage} alt="logo" />
                <h1>{title}</h1>
                <h2>{text}</h2>
                <Link to="/servicios">
                    <SectionC>
                        <h1>{text2}</h1>
                        <h3>{text3}</h3>
                    </SectionC>
                </Link>
                
            </SectionB>
        </MainSection>
    );
};

export default BetterBanner;
