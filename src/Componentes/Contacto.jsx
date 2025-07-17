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


    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormularioData ({
            ...formularioData,
            [name] : value,
        });

        console.log (`${name} : ${value}`);
        console.log(formularioData);
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
                        <input 
                        type="text"  
                        id="correo" 
                        name= "correo"
                        onChange={handleInputChange} 
                        value={formularioData.correo}
                        />
                        <label htmlFor="correo" >Correo Electronico</label>
                     </div>

                    <div className="DescripcionFormulario">
                        <input type="text" 
                        id="nombre" 
                        name= "nombre"
                        onChange={handleInputChange} 
                        value={formularioData.nombre}
                        />
                        <label htmlFor="nombre" >Nombre y Apellido</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" 
                        id="ciudad" 
                        name= "ciudad"
                        onChange={handleInputChange} 
                        value={formularioData.ciudad}
                        />
                        <label htmlFor="ciudad" >Ciudad</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" 
                        id="provincia" 
                        name= "provincia"
                        onChange={handleInputChange} 
                        value={formularioData.provincia}
                        />
                        <label htmlFor="provincia" >Provincia</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" 
                        id="telefono" 
                        name="telefono"
                        onChange={handleInputChange} 
                        value={formularioData.telefono}
                        />
                        <label htmlFor="telefono" >Telefono</label>
                    </div>

                    <div className="DescripcionFormulario">
                        <input type="text" 
                        id="mensaje" 
                        name="mensaje"
                        onChange={handleInputChange} 
                        value={formularioData.mensaje}
                        />
                        <label htmlFor="mensaje" >Mensaje</label>
                    </div>

                    <input type="submit" name="Enviar" id="Enviar"/>
                </div>
            </form>
    </section>   
  )
}
export default Contacto
