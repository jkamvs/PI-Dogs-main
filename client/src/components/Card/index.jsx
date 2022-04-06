
import {Link} from "react-router-dom";


export default function Card({id, name, temp, imagen, weight}) {
    let temper=''
    if(temp.length===0){
        temper='No tiene temperamento'
    }
    return (
        <div>
            <div >
                <Link  to={`/Description-of-My-dog/${id}`}>
                    <h2 >{name}</h2>
                </Link>

                <p >{temp}</p>
                <p >weight: {weight}</p>

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

