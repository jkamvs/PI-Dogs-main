import Card from "../Card";


export default function Cards({id, name, temp, imagen, weight}) {
    return (<div>
        <Card
            key={id}
            id={id}
            name={name}
            temp={temp}
            imagen={imagen}
            weight={weight}
        />
    </div>)

}