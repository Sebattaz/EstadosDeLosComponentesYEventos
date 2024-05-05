import React, { useState } from 'react'
import './formulario.css'
import Alert from '../Alert/Alert'
const Formulario = () => {
  
const [name, setName] = useState("s")
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")
const [repPass, setRepPass] = useState("") 
const [bolPass, setBolPass] = useState(true)
const [vista, setVista] = useState("hide")

const handleSubmit = (e) => {
    e.preventDefault(); 
    handleClick(); 
  };

const handleClick = ()=>{
    if(pass===repPass){
        setBolPass(true);
        setVista("show correcto")
        console.log(bolPass)
    }else{
        setBolPass(false);
        setVista("show incorrecto")
        console.log(bolPass)
    }

}

    return (


    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa Nombre" onChange={(e)=>setName(e.target.value)}  />
            { /^[a-zA-Z\s]+$/.test(name) ? <span></span>  : <span>No se permite campo vacio ni con numeros</span> }

            <input type="email" placeholder="tuemail@ejemplo.com" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            { /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? <span className='Valido' >Valido</span> : <span className='Error'>Ingresa correo valido</span>}
            
            <input type="password" placeholder="Ingresa Contraseña" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            
            <input type="password" placeholder="Repite Contraseña" value={repPass} onChange={(e)=>setRepPass(e.target.value)}/>
           
            <button type='submit'>Registrarse</button>
            <br />
            <Alert alt={bolPass} ver={vista} />
            
        </form>
    </>
  )
}

export default Formulario
