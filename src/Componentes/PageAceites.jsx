import '../Styles/PageAceites.css'

function PageAceites() {
  return (
<>
    <main>
        <section className="PageAceites">
            <div className="Aceitesdeoliva">
                 <h4 className="tituloprincipal">Aceite de Oliva Virgen Extra "Doña Sofia"</h4>
                 <p>Con un carácter suave y un perfil de amargor y picor muy delicado <br/> que permite que se adapte a cualquier uso culinario y paladar.</p>
            </div>
        </section>
    </main>

    <section className="MediaPageAceites">
        <div className="ContenedorMedia">

            <p className="detalleMedia">
                
                Blend elaborado a partir de cuatro variedades de aceitunas: Arbequina, Arauco, Frantoio y Manzanilla. Recolectadas manualmente, permitiendo una mejor selección, sin dañarlas. 
                
                Extraído en el momento óptimo, buscando mantener todas las caracteristicas propias de las olivas, destacandose por su suavidad, donde el picor y el amargor, pasan desapercibidos. En nariz, se aprecian toques de aceituna verde, almendras, nuez, complementados por una leve presencia de hierbas aromáticas. 
            </p>


            <div className="imgMedia">
                <img src="IMG/Aceiteoliva.JPG" alt="imgMedia"/>
            </div>
        </div>
    </section>

    <section className="ContenidoProductos">
        <div className="ContenedorProductos">

            <div className="Productos">
                <h5>PRO <br/> DUC <br/> TOS </h5>
            </div>
    

            <div className="Fotosaceites">
                <img src="IMG/Aceite 1litro.JPEG" alt="Fotosaceites"/>
                <p>Aceite de oliva virgen extra <br/> Botellon 1 litro</p>
            </div>
    

            <div className="Fotosaceites">
                <img src="IMG/2lts.JPEG" alt="Fotosaceites"/>
                <p>Aceite de oliva virgen extra <br/> Pet 2 litros</p>
            </div>

            <div className="Fotosaceites">
                <img src="IMG/5lt.jpeg" alt="Fotosaceites"/>
                <p>Aceite de oliva virgen extra <br/> Pet 5 litros</p>
            </div>
        </div>
    </section>
</>
  )
}

export default PageAceites
