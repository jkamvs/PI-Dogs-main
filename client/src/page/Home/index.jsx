import React from "react";

import {Link} from "react-router-dom";
import style_css from './style.module.css'

export default function index() {
    return (<div className={style_css.container}>
        <div className={style_css.izquierda}>
            <div className={style_css.izquierdaArriba}>

            </div>
            <div className={style_css.izquierdaAbajo}></div>

        </div>
        <div className={style_css.derecha}>
            <div className={style_css.derechaArriba}></div>
            <div className={style_css.derechaAbajo}></div>
        </div>
        <div className={style_css.card}>
            <Link to="/My_Dogs">Bienvenido</Link>
        </div>
    </div>);
}
