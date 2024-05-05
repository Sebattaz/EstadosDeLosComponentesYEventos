import Formulario from '../Formulario/Formulario'
import SocialButton from '../SocialButton/SocialButton'
import './registro.css'

const Registro = () =>{
    return(
        
        <div className="Registro">
            <h1>Crea una Cuenta</h1>
            <div className='socialBTN'>
                <SocialButton icon="facebook" />
                <SocialButton icon="github" />
                <SocialButton icon="linkedin" />
            </div>
            <span><h3>O usa tu email para registrarte</h3></span>
            <Formulario />
        </div>

    )

}

export default Registro