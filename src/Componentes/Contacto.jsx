import '../Styles/Contacto.css'
import { useState } from 'react'

function Contacto () {
    const [formularioData, setFormularioData] = useState ({
        correo: "",
        nombre: "",
        ciudad: "",
        provincia: "",
        telefono: "",
        mensaje: "",
    });


const [mensajeEnviado, setMensajeEnviado] = useState (false);


const handleSubmit = (e) => {
    e.preventDefault ();
    console.log ("El mensaje ha sido enviado")

    setFormularioData({
        correo: "",
        nombre: "",
        ciudad: "",
        provincia: "",
        telefono: "",
        mensaje: "",
      });

      setMensajeEnviado (true)

      setTimeout(() => {
        setMensajeEnviado(false);
      }, 800);

    };


const handleCorreoInput = (e) => {
    setFormularioData ({...formularioData, correo: e.target.value})

}


const handleNombreInput = (e) => {
    setFormularioData ({...formularioData, nombre: e.target.value})

}


const handleCiudadInput = (e) => {
    setFormularioData ({...formularioData, ciudad: e.target.value})

}


const handleProvinciaInput = (e) => {
    setFormularioData ({...formularioData, provincia: e.target.value})

}


const handleTelefonoInput = (e) => {
    setFormularioData ({...formularioData, telefono: e.target.value})

}


const handleMensajeInput = (e) => {
    setFormularioData ({...formularioData, mensaje: e.target.value})

}




  return (

    <section className="PageContactanos">
             <h4 className="TituloFormulario">DEJANOS TU MENSAJE</h4>

            <form onSubmit = {handleSubmit}>
                     <p className="InicioFormulario">No dudes en contactarnos en cualquier momento. <br/> Le responderemos a la brevedad! </p>

                     {mensajeEnviado && (
                        <div className= "mensaje">
                            <p> El mensaje fue enviado </p>
                         </div>
                     )}


               
                <div className="ContenedorFormulario">
                    <div className="DescripcionFormulario">
                        <input type="text"  id="correo" onChange={handleCorreoInput} value={formularioData.correo}/>
                        <label htmlFor="correo" >Correo Electronico</label>
                     </div>

                    <div className="DescripcionFormulario">
                        <input type="text" id="nombre" onChange={handleNombreInput} value={formularioData.nombre}/>
                        <label htmlFor="nombre" >Nombre y Apellido</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" id="ciudad" onChange={handleCiudadInput} value={formularioData.ciudad}/>
                        <label htmlFor="ciudad" >Ciudad</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" id="provincia" onChange={handleProvinciaInput} value={formularioData.provincia}/>
                        <label htmlFor="provincia" >Provincia</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" id="telefono" onChange={handleTelefonoInput} value={formularioData.telefono}/>
                        <label htmlFor="telefono" >Telefono</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" id="mensaje" onChange={handleMensajeInput} value={formularioData.mensaje}/>
                        <label htmlFor="mensaje" >Mensaje</label>
                    </div>

                    <input type="submit" name="Enviar" id="Enviar"/>
                </div>
            </form>
    </section>   
  )
}
export default Contacto
