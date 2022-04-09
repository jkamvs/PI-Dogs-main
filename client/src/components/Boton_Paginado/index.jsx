import React from "react";
import style_css from './styles.module.css'

export default function Boton_Paginado({id, numero, setDbDogs, dbDogs}) {
    const handleMostrar = () => {
        setDbDogs(numero)
    }
    let bool = true
    if (dbDogs === numero) {
        bool = false
    }
    return (

        <button className={bool ? style_css.btn : style_css.activo} key={id} onClick={handleMostrar}>{id}</button>
    )
}

