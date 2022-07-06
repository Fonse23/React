//rafce es el snipet, este es nuestro primer componente
//aquí se puede desestructurar (desempacar los valores de un arreglo y ponerlos como parámetro) ({titulo}) en lugar de (props) y en {props.titulo} solo {titulo}
import PropTypes from "prop-type"
import Boton from "./Boton"
const Header = (props) => { 

    const onClick =()=>{
        console.log("clickkk desde el parent")
    }

  return (
    <header className="header">
        <h1>{props.titulo}</h1>
       <Boton color='green' text='nuevo' onClick={onClick}/>
    </header>
  )// no podemos usar class, en lugar es className
  }

//podemos definir si el componente tendrá un prop predefinido
//Header.defaultProps ={
  //  titulo: 'default'
//}
export default Header
