import {useState} from "react";
import {useDispatch} from "react-redux";
import {agregarPerro} from "../../redux/actions";

export default function Crear_Raza() {
    const [name, setName] = useState('')
    const [minimoAltura, setMinimoAltura] = useState('')
    const [maximoAltura, setMaximoAltura] = useState('')
    const [minimoPeso, setMinimoPeso] = useState('')
    const [maximoPeso, setMaximoPeso] = useState('')
    const [lifeSpan, setLifeSpan] = useState('')
    const dispatch = useDispatch();

    function mayusculaSearch(as) {
        let arr = as.split(' ');
        let datoArr = [];
        arr.forEach((item) => {
            datoArr.push(item.charAt(0).toUpperCase() + item.slice(1));
        });
        return datoArr.join(" ");
    }

    const handleName = (e) => {
        setName(mayusculaSearch(e.target.value))
    }
    const handleMinimoAltura = (e) => {
        setMinimoAltura(mayusculaSearch(e.target.value))
    }
    const handleMaximoAltura = (e) => {
        setMaximoAltura(mayusculaSearch(e.target.value))
    }
    const handleMinimoPeso = (e) => {
        setMinimoPeso(mayusculaSearch(e.target.value))
    }
    const handleMaximoPeso = (e) => {
        setMaximoPeso(mayusculaSearch(e.target.value))
    }
    const handleLifeSpan = (e) => {
        setLifeSpan(mayusculaSearch(e.target.value))
    }
    const handleData = (e) => {
        console.log(e)
        dispatch(agregarPerro({name,minimoAltura,maximoAltura,minimoPeso,maximoPeso,lifeSpan}))
        e.preventDefault()
    }
    return (<form onSubmit={handleData}>
        {/*Nombre del perron*/}
        <label>
            Name:
            <input type={'text'} name={'name'} placeholder={'Name Dog'}
                   onChange={handleName}/>
        </label>
        <hr/>
        {/*Nombre del perron*/}
        <label>
            Altura:
            <br/>
            <label>
                Min:
                <input type={'number'} id={'minimoAltura'} name={"minimoAltura"} min={2} max={25}
                       onChange={handleMinimoAltura}/>
            </label>
            <br/>
            <label>
                Max:
                <input type={'number'} id={'maximoAltura'} name={"maximoAltura"} min={2} max={35}
                       onChange={handleMaximoAltura}/>
            </label>
        </label>
        <hr/>
        {/*Nombre del perron*/}
        <label>
            Altura:
            <br/>
            <label>
                Min:
                <input type={'number'} id={'minimoAltura'} name={"minimoAltura"} min={2} max={25}
                       onChange={handleMinimoPeso}/>
            </label>
            <br/>
            <label>
                Max:
                <input type={'number'} id={'maximoAltura'} name={"maximoAltura"} min={2} max={35}
                       onChange={handleMaximoPeso}/>
            </label>
        </label>
        <hr/>
        <label>
            Años de vida:
            <input type={'text'} name={"life_span"} onChange={handleLifeSpan}/>
        </label>
        <hr/>

        <input type={'submit'} value={'Submit'}/>
    </form>)
}