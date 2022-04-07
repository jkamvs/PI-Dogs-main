import Card from "../Card";
import style_css from './styles.module.css'

export default function Cards({datadb}) {
    return (<div className={style_css.flexCards} >
        {datadb?.map((dog) => (<Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            temp={dog.temperament}
            imagen={dog.image ? dog.image.url : "https://st2.depositphotos.com/2222024/5609/i/600/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg"}
            weight={dog.weight}
        />))}

    </div>)

}