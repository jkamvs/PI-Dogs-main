import React from "react";
export default function Boton_Paginado({id, numero, setDbDogs}) {
    const handleMostrar = () => {
        setDbDogs(numero)
    }
    return (<button key={id} onClick={handleMostrar}>{id}</button>)
}