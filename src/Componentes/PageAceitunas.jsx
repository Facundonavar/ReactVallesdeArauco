import '../Styles/PageAceitunas.css' 
import Finca from '../assets/finca.jpeg';
import Aceitunas1kg from '../assets/1kg.JPEG';
import Aceitunas2kg from '../assets/2kg.JPEG';
import Aceitunas5kgVerdes from '../assets/5kg verdes.JPEG';
import Aceitunas5kgNgeras from '../assets/5kg.JPEG';

function PageAceitunas() {
  return (
    <>
        <main>
             <section className="PageAceitunas">
                 <div className="AceitunasArauco">
                     <h4 className="TituloAceitunas">Aceitunas Arauco</h4>
                     <p>Varietal autóctona de Argentina, proviene de Arauco, provincia de La Rioja, conocida por ser la Capital Nacional del Olivo. <br/> Fruto firme, de buena carnosidad y de una elevada relación pulpa-hueso. Potentes en su amargor. <br/> Muy frutados con aromas vegetales y de minerales intensos. </p>
                 </div>
             </section>
        </main>



        <section className="MediaPageAceites">
            <img src={Finca} alt="imgMedia"/>
        </section>



         <section className="MasVendidos">
             <div className="AceitunasMasVendidos">
                 <p>Más vendidos</p>
             </div>
         </section>
         


         <section className="ContenidoProductos">
             <div className="ContenedorProductos">


            <div className="Fotosaceitunas">
                <img src={Aceitunas1kg} alt="Fotosaceitunas"/>
                <p>Aceitunas Arauco mixtas <br/> Rellenas de jamón crudo, roquefort, almendras, nuez, jamón cocido y morrón</p>
            </div>


            <div className="Fotosaceitunas">
                <img src={Aceitunas2kg} alt="Fotosaceitunas"/>
                <p>Aceitunas verdes Arauco <br/> Frasco 2KG</p>
            </div>
    

            <div className="Fotosaceitunas">
                <img src={Aceitunas5kgVerdes} alt="Fotosaceitunas"/>
                <p>Aceitunas verdes Arauco <br/> Bidón 5kg</p>
            </div>


            <div className="Fotosaceitunas">
                <img src={Aceitunas5kgNgeras} alt="Fotosaceitunas"/>
                <p>Aceitunas negras Arauco <br/> Bidón 5kg</p>
            </div>
        </div>
    </section>


    <section class="ExperienciaHilal">
        <div class="VisitaHilal">

            <p class="Visitaguiada">
                La variedad Arauco es originaria de la provincia de La Rioja y reconocida por el Consejo Oleíco Internacional como la única variedad de origen argentino. Es el Olivo más antiguo del país y en 1946 fue declarado Árbol Historico (Decreto Nacional N° 2323/46). 
            </p>

            <div class="IMGVisita">
            <img src="/IMG/olivo cuticentenario.png" alt="BienvenidoHilal"/>
            </div>
        </div>
    </section>

    </>
  )
}

export default PageAceitunas
