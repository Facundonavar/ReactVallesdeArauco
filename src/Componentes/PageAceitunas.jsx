import '../Styles/PageAceitunas.css' 


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
            <img src="IMG/Finca.jpeg" alt="imgMedia"/>
        </section>



         <section className="MasVendidos">
             <div className="AceitunasMasVendidos">
                 <p>Más vendidos</p>
             </div>
         </section>
         


         <section className="ContenidoProductos">
             <div className="ContenedorProductos">


            <div className="Fotosaceitunas">
                <img src="IMG/1kg.JPEG" alt="Fotosaceitunas"/>
                <p>Aceitunas Arauco mixtas <br/> Rellenas de jamón crudo, roquefort, almendras, nuez, jamón cocido y morrón</p>
            </div>


            <div className="Fotosaceitunas">
                <img src="IMG/2kg.JPEG" alt="Fotosaceitunas"/>
                <p>Aceitunas verdes Arauco <br/> Frasco 2KG</p>
            </div>
    

            <div className="Fotosaceitunas">
                <img src="IMG/5kg verdes.JPEG" alt="Fotosaceitunas"/>
                <p>Aceitunas verdes Arauco <br/> Bidón 5kg</p>
            </div>


            <div className="Fotosaceitunas">
                <img src="IMG/5kg.JPEG" alt="Fotosaceitunas"/>
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
            <img src="IMG/olivo cuticentenario.png" alt="BienvenidoHilal"/>
            </div>
        </div>
    </section>

    </>
  )
}

export default PageAceitunas
