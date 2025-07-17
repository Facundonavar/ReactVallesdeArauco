import '../Styles/Footer.css'

const Footer = () => {
  return (

   <>
        <footer className="footerPage">
             <div className="NombreComercio">
                 <h5>Valles de Arauco</h5>
             </div>

             <div className="ContenedorIconos">
                  <div className="Mail">
                     <p><i className="fa fa-envelope"></i>Vallesdearauco@gmail.com</p>
                  </div>

                  <div className="Ubicacion">
                     <p><i className="fa fa-location-dot"></i>Avenida Boyaca 293, Barrio de Caballito, Buenos Aires, Argentina</p>
                  </div>
 
                  <div className="Facebook">
                     <p><i className="fa-brands fa-facebook"></i>Facebook\Vallesdearauco</p>
                  </div>
             </div>
        </footer>
        </> 
  )
}

export default Footer
