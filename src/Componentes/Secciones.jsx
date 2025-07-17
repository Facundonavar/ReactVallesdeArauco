import { useState } from 'react'
import '../Styles/Secciones.css'
import '../AppGlobal.css'
import Interfaz1 from '../assets/Interfaz1 - copia.jpeg';
import Aceite from '../assets/Aceite.jpeg';
import BienvenidoHilal from '../assets/BienvenidoHilal.JPEG';

function Secciones() {
    const [zoom, setZoom] = useState (false)

  return (

    <>

         <div className="ENCABEZADOIMAGEN">   
             <img src={Interfaz1} alt="ENCABEZADOIMG" 
             className={zoom ?'zoom-activo' : '' }
             onMouseEnter={() => setZoom (true)}
             onMouseLeave={() => setZoom (false)}
             />
         </div>


        <main>  
             <section class="PresentacionesIMG"> 
                 <div class="PresentacionHilal">
                     <p class="Desde1957">Desde 1957</p>
                     <h3>Produciendo aceite de oliva y aceitunas de mesa</h3> 
                     <p class="Mision">En el corazón de Aimogasta, un pueblo con siglos de historia y cultura olivicola, se encuentra la Familia Hilal, cuyo compromiso ha sido llevar la cultura del aceite a la mesa de todos los dias. Produciendo aceites de oliva virgen extra de calidad que reflejen la diversidad de variedades de olivos presentes en la región. </p>
                 </div>
             </section>
        </main>


        <section class="ExperienciaHilal">    
             <div class="VisitaHilal">

                 <div class="IMGVisita">     
                     <img src={Aceite} alt="FotoAceite"/>
                 </div>

                 <p class="Visitaguiada">
                     Hilal abre sus puertas a todos aquellos que deseen sumergirse en el mundo de la olivicultura riojana. Con visitas guiadas a sus instalaciones, los visitantes pueden recorrer los olivares, conocer el proceso de producción artesanal y degustar el sabor de las aceitunas Arauco. Es una oportunidad para conectar con la historia, la tradición y la calidad que han hecho de Aimogasta un referente en la producción de aceite de oliva.
                 </p>
     
                 <div class="IMGVisita">
                     <img src={BienvenidoHilal} alt="Fotocarteleria"/>
                 </div>
             </div>
        </section>
    </>
  )
}

export default Secciones
