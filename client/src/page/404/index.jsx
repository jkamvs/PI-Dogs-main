import style_css from './style.module.css'
import {Link} from "react-router-dom";

export default function Error_404() {
    return (<div>
        <img className={style_css.img} src={require('../../Recurso_kawai/perro-Kenneth-01.png')} alt={'404 Error'}/>
        <p
            className={style_css.pos}>Pagina no encontrada regrese a la pagina principal
            <Link className={style_css.a} to={'/My_Dogs'}>MY DOGS</Link></p>
    </div>)

}