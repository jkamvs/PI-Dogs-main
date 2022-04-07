import {Link} from "react-router-dom";
import style_css from './style.module.css';

export default function Card({id, name, temp, imagen, weight}) {
    /*let temper=''
    if(temp.length===0){
        temper='No tiene temperamento'
    }*/
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

            <hr/>
            <p>{news}</p>
            <p>Pesa: {weight} kg</p>
            <Link className={style_css.a} to={`/Description-of-My-dog/${id}`}>
                <p>{`<< Detalle >>`}</p>
            </Link>
        </div>
    </div>
        /*<div style={{backgroundImage: `url(${imagen})`}} className={style_Card.card}>
        <div className={style_Card.content}>
            <Link style={{color:`white`}} to={`/Description-of-My-dog/${id}`}>
                <h2 className={style_Card.title}>{name}</h2>
            </Link>
            <p className={style_Card.copy}>{temp}</p>
            <p className={style_Card.copy}>Imperial: {weight.imperial}</p>
            <p className={style_Card.copy}>Metric: {weight.metric}</p>
        </div>
    </div>*/)
}

