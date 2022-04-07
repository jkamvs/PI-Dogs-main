import Boton_Paginado from "../Boton_Paginado";
import React from "react";
import style_BPag from './styles.module.css'

export default function Pagination({handlePaginado, setDbDogs,dbDogs}) {

    return (<nav className={style_BPag.nav}>
        {handlePaginado()?.map((item, index) => (
            <Boton_Paginado key={index} id={item.id} numero={item.data} setDbDogs={setDbDogs} dbDogs={dbDogs}/>))}
    </nav>)
}