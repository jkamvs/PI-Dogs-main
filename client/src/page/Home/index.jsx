import React from "react";
import {Link} from "react-router-dom";
import style_css from './style.module.css'

export default function index() {

    return (<div className={style_css.container}>

        <img className={style_css.fondo} src={require('../../Recurso_kawai/perro-Kenneth-03.png')} alt={'fondo'}/>
        <h1 className={style_css.title}>Bienvenido</h1>
        <Link to="/My_Dogs" className={style_css.card}>
            <img  src={require('../../Recurso_kawai/perro-Kenneth-05.png')} alt={'Diario'}/>
        </Link>

    </div>);
}
