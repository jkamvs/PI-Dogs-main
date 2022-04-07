import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {agregarPerro, getTemp} from "../../redux/actions";
import style_css from './style.module.css'
import {Link} from "react-router-dom";

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

    let news = ''
    for (let i = 0; i < selectBD.length; i++) {
        if (i === 0) {
            news = selectBD[i]
        } else {
            news = news + ', ' + selectBD[i];
        }
    }

    const handleName = (e) => {
        setName(mayusculaSearch(e.target.value))
    }
    const handleMinimoAltura = (e) => {
        setMinimoAltura((e.target.value))
    }
    const handleMaximoAltura = (e) => {
        setMaximoAltura((e.target.value))
    }
    const handleMinimoPeso = (e) => {
        setMinimoPeso((e.target.value))
    }
    const handleMaximoPeso = (e) => {
        setMaximoPeso((e.target.value))
    }
    const handleLifeSpan = (e) => {
        setLifeSpan((e.target.value))
    }
    const handleTemp = (e) => {
        e.preventDefault();
        if (e.target.value !== "All Temp") {
            if (!selectBD.includes(e.target.value)) {
                setSelect([...selectBD, e.target.value])
            }
        }
    }

    const handleData = (e) => {
        dispatch(agregarPerro({
            name, minimoAltura, maximoAltura, minimoPeso, maximoPeso, lifeSpan, selectBD
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
    return (<>
        <div className={style_css.titleNav}>
            <h1>NEW DOG</h1>
            <Link  className={style_css.link} to={'/My_Dogs'}>MY DOGS</Link>
        </div>
        <div className={style_css.flexContainer}>
            <div className={style_css.form}>
                {/*Nombre del perron*/}
                <label>
                    <p>Name:</p>
                    <input className={style_css.inputText} type={'text'} name={'name'} placeholder={'Name Dog'}
                           onChange={handleName} value={name}/>
                </label>
                {/*Nombre del perron*/}
                <label>
                    <p>Altura:</p>
                    <div className={style_css.inputMINMAX}>
                        <input className={style_css.MINMAX} type={'number'} id={'minimoAltura'}
                               name={"minimoAltura"} min={2} max={25}
                               onChange={handleMinimoAltura} placeholder={'MIN'}/>
                        <input className={style_css.MINMAX} type={'number'} id={'maximoAltura'}
                               name={"maximoAltura"} min={2} max={35}
                               onChange={handleMaximoAltura} placeholder={'MAX'}/>
                    </div>
                </label>
                {/*Nombre del perron*/}
                <label>
                    <p>Peso:</p>
                    <div className={style_css.inputMINMAX}>
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'minimoPeso'}
                            name={"minimoPeso"}
                            min={5}
                            max={50}
                            onChange={handleMinimoPeso}
                            placeholder={'MIN'}
                        />
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'maximoPeso'}
                            name={"maximoPeso"}
                            min={5}
                            max={50}
                            onChange={handleMaximoPeso}
                            placeholder={'MAX'}
                        />
                    </div>
                </label>
                <label>
                   <p>Años de vida:</p>
                    <div className={style_css.inputMINMAX}>
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'life_span'}
                            name={"life_span"}
                            min={1}
                            max={20}
                            onChange={handleLifeSpan}
                            placeholder={'MIN'}
                        />
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'life_span'}
                            name={"life_span"}
                            min={1}
                            max={20}
                            placeholder={'MAX'}
                        />
                    </div>

                </label>
                <label>
                    <p>Temperamento:</p>
                    <select className={style_css.select} name='Temp' onChange={(e) => handleTemp(e)}>
                        <option value='All Temp'>All Temperament</option>
                        {tempRedux?.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}
                    </select>

                    <div className={style_css.flex}>
                        {selectBD?.map((item) => (
                            <p
                                className={style_css.p}
                                key={item}
                            >
                                {item}
                            </p>))}
                    </div>
                </label>

                <input
                    className={style_css.btn}
                    type={'submit'}
                    value={'Submit'}
                    onClick={handleData}
                />
            </div>
            <div className={style_css.containerDetalle}>
                <p>Nombre: {name}</p>
                <p>Altura: {minimoAltura} - {maximoAltura}</p>

                <p>Peso: {minimoPeso} - {maximoPeso}</p>
                <p>Años de vida: {lifeSpan} years</p>
                <p>Temperamentos: {news}</p>

            </div>
        </div>

    </>)
}