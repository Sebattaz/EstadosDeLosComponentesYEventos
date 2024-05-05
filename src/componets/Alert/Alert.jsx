import React from 'react'
import './alert.css'

const Alert = ({alt,ver}) => {
  return (
    <>
      {(alt) ? <span className={ver}>Datos ingresados correcto</span> : <span className={ver}>Datos incorrectos</span>}
    </>
  )
}

export default Alert
