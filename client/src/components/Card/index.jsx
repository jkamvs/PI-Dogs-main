import {Link} from "react-router-dom";
import style_css from './style.module.css';

export default function Card({id, name, temp, imagen, weight}) {

    let news = ''
    for (let i = 0; i < temp.length; i++) {
        if (i === 0) {
            news = temp[i]
        } else {
            news = news + ', ' + temp[i];
        }
    }
    return (<div className={style_css.card}>
        <div className={style_css.cardImg}>
            <img className={style_css.img} src={imagen} alt={name}/>
        </div>

        <div className={style_css.cardDetalle}>

            <h2 className={style_css.title}>{name}</h2>

            <hr className={style_css.hr}/>
            <p>{news}</p>
            <br/>
            <p>Pesa: {weight} kg</p>
            <br/>
            <br/>

            <Link className={style_css.a} to={`/Description-of-My-dog/${id}/${name}`}>
                <p>{`<< Detalle >>`}</p>
            </Link>
        </div>
    </div>)
}

