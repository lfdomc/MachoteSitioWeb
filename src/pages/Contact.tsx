
import Banner from "../components/Banner/Banner"
import { FormContact } from "../components/FormContact/FormContact"



const Contact = () => {
  return (
    <div>
      <Banner image="/image/contacto.png" h1 ="FORMULARIO PARA SUS CONSULTAS" color="#11417b" fcolor="#f3f3f3"/>
      <FormContact/>

    </div>
  )
}

export default Contact