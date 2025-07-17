import { Routes, Route} from "react-router-dom"
import Footer from "./Componentes/Footer"
import MenuNavegacion from "./Componentes/MenuNavegacion"
import PageAceites from "./Componentes/PageAceites"
import PageAceitunas from "./Componentes/PageAceitunas"
import Secciones from "./Componentes/Secciones"
import Contacto from "./Componentes/Contacto"


function App() {


  return (
    <>
    <MenuNavegacion />

      <Routes>
        <Route path="/" element={<Secciones />} />
        <Route path= "/Secciones" element= {<Secciones />} />
        <Route path= "/PageAceites" element= {<PageAceites />} />
        <Route path= "/PageAceitunas" element= {<PageAceitunas />} />
        <Route path= "/Contacto" element= {<Contacto />} />
      </Routes>
    
      <Footer />
    </>
  )
}

export default App
