import {Link} from "react-router-dom"
import '../Styles/MenuNavegacion.css'

function MenuNavegacion() {
  

  return (
  
    <header>      
      <div className="container-encabezado"> 
        <p className="Nombre">Valles de Arauco</p>
        <nav>
            <ul>
                <li><Link className="botonheader" to="/Secciones">Nosotros</Link></li>
                <li><Link className="botonheader" to="/PageAceites">Aceites de oliva virgen extra</Link></li>
                <li><Link className="botonheader" to="/PageAceitunas">Aceitunas de mesa</Link></li>
                <li><Link className="botonheader" to="/Contacto">Contacto</Link></li>
            </ul>
         </nav>
      </div>
    </header>
  )
}

export default MenuNavegacion
