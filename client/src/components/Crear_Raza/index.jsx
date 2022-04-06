import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {agregarPerro, getTemp} from "../../redux/actions";
import style_css from './style.module.css'

export default function Crear_Raza() {
    const [name, setName] = useState('')
    const [minimoAltura, setMinimoAltura] = useState(0)
    const [maximoAltura, setMaximoAltura] = useState(0)
    const [minimoPeso, setMinimoPeso] = useState(0)
    const [maximoPeso, setMaximoPeso] = useState(0)
    const [lifeSpan, setLifeSpan] = useState(0)
    const [selectBD, setSelect] = useState([])
    const dispatch = useDispatch();


    const tempRedux = useSelector(state => state.temp)
    useEffect(() => {
        dispatch(getTemp())
    }, [dispatch])

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
    const handleTemp = (e) => {
        e.preventDefault();
        if (e.target.value !== "All Temp") {
            if(!selectBD.includes(e.target.value)) {
                setSelect([...selectBD, e.target.value])
            }
        }
    }
    const handleBorrar = (e) => {
        let dato = selectBD
        let position = dato.indexOf(e)
        if (position !== -1) {
            dato.splice(position, 1)
        }
        setSelect(dato)
    }

    const handleData = (e) => {

        dispatch(agregarPerro({
            name, minimoAltura, maximoAltura, minimoPeso, maximoPeso, lifeSpan,selectBD
        }))
        setName('')
        setLifeSpan(0)
        setMinimoAltura(0)
        setMaximoAltura(0)
        setMinimoPeso(0)
        setMaximoPeso(0)
        setSelect([])
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
            Peso:
            <br/>
            <label>
                Min:
                <input type={'number'} id={'minimoPeso'} name={"minimoPeso"} min={5} max={50}
                       onChange={handleMinimoPeso}/>
            </label>
            <br/>
            <label>
                Max:
                <input type={'number'} id={'maximoPeso'} name={"maximoPeso"} min={5} max={50}
                       onChange={handleMaximoPeso}/>
            </label>
        </label>
        <hr/>
        <label>
            Años de vida:
            <input type={'number'} id={'life_span'} name={"life_span"}  min={1} max={20} onChange={handleLifeSpan}/>
        </label>
        <hr/>
        <label>
            Temperamento
            <select name='Temp' onChange={(e) => handleTemp(e)}>
                <option value='All Temp'>All Temperament</option>
                {tempRedux?.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}
            </select>
            <hr/>
            <div className={style_css.flex}>
                {selectBD?.map((item) => (
                    <p className={style_css.p} key={item}>{item}</p>))}
            </div>

        </label>
        <hr/>
        <input type={'submit'} value={'Submit'}/>
    </form>)
}