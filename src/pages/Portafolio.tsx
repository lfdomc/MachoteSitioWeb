import { useContext } from "react";
import BetterBanner from "../components/BetterBanner/BetterBanner"
import { GlobalContext } from "../context/GlobalContext";

const Portafolio = () => {

const { colorprimary } = useContext(GlobalContext);

  return (
    <div>


<BetterBanner
        //MainProps
        flexdirection="row-reverse"
        imgflexdirection="none"
        bgmain=" #111c5d2f"
        bgimage=""
        //Imagen Props
        image="/image/Portafolio/ktrina_image.png"
        //imonClick={() => window.location.href = "https://wa.me/50670453129"}
        //Titulo Props
        bimage="/image/Portafolio/ktrina1.png"
        title="Restaurante Delicias Ktrina"
        text="Sitio web diseñado para fortalecer la identidad de un restaurante mexicano con tres sucursales, cada una con su propia información de contacto."
        //Texto Props
        text2=""
        text3=""
        //Button1 Props
        textbutton="Visitar Página"
        btColor={colorprimary}
        fbtColor="white"
        hbtColor="#b79304"
        btonClick={() => window.open("https://restaurante-machote.vercel.app/", "_blank")}

        //btimage="/image/ktrina/calabera.png"

        //Button2 Props
        //btimage2="/image/ktrina/calabera.png"
        bt2display="none"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Conozca Nuestro Menú"
        hbt2Color="#ece2df"

      />

    </div>
  )
}

export default Portafolio