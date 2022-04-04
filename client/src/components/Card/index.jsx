
import {Link} from "react-router-dom";


export default function Card({id, name, temp, imagen, weight}) {

    return (
        <div>
            <div >
                <Link  to={`/Description-of-My-dog/${id}`}>
                    <h2 >{name}</h2>
                </Link>
                <p>{id}</p>
                <p >{temp}</p>
                <p >Imperial: {`${weight.imperial[0]} - ${weight.imperial[1]}`}</p>
                <p >Metric: {`${weight.metric[0]} - ${weight.metric[1]}`}</p>
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
    </div>*/
    )
}

