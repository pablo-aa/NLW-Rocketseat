import React from 'react'
import {FiCheckCircle} from 'react-icons/fi'

import './styles.css'

const Sucess = () => {
    return(
        <div id="page-sucess">
            <span>
                <FiCheckCircle/>
            </span>
            <text>Cadastro concluído!</text>
        </div>
    )
}

export default Sucess