import './socialbutton.css'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Importa íconos de marcas si los necesitas

library.add(fab);

const SocialButton = ({icon}) => {
    const iconName = icon;
    const fullIcon = `fa-brands fa-${iconName}`
  return (
    <div className='socialBTN'>
     <FontAwesomeIcon icon={fullIcon} size='3x' />
    </div>
  )
}

export default SocialButton
