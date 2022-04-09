import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {agregarPerro, getTemp} from "../../redux/actions";
import style_css from './style.module.css'
import {Link} from "react-router-dom";

export default function Crear_Raza() {
    const [datos, setDatos] = useState({
        name: '',
        minimoAltura: '',
        maximoAltura: '',
        minimoPeso: '',
        maximoPeso: '',
        minimoLifeSpan: '',
        maximoLifeSpan: ''
    })
    const [errorDatos, setErrorDatos] = useState({})
    const [selectBD, setSelect] = useState([])
    const [errorSelectBD, setErrorSelectBD] = useState('Seleccione como minimo un temperamento')
    const [disableBtn, setDisableBtn] = useState(true)
    ///////////Dispatch
    const dispatch = useDispatch();
    //////////////////////////////
    const tempRedux = useSelector(state => state.temp)
    //////////////////////////////////
    useEffect(() => {
        dispatch(getTemp())
    }, [dispatch]);
    //////////////////////////////
    const mayusculaSearch = (as) => {

        let arr = as.split(' ');
        let datoArr = [];
        arr.forEach((item) => {
            datoArr.push(item.charAt(0).toUpperCase() + item.slice(1));
        });
        return datoArr.join(" ");
    }
    const handleinputChange = (inputName, inputValue) => {
        setDatos({
            ...datos, [inputName]: mayusculaSearch(inputValue)
        })
        if (inputName === 'name') {
            if (/[1-9]/.test(inputValue)) {
                setErrorDatos({
                    [`error${inputName}`]: 'No se permiten numeros o símbolos',
                })
            }/* else if (/\W/.test(inputValue)) {
                setErrorDatos({
                    [`error${inputName}`]: 'No se permiten numeros o símbolos',
                })
            }*/ else if (/[A-Z a-z]|\s/.test(inputValue)) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
                if (inputValue.length > 3) {
                    setErrorDatos({
                        [`error${inputName}`]: ''
                    })
                } else if (inputValue.length > 0) {
                    setErrorDatos({
                        [`error${inputName}`]: 'Ingrese una raza mayor a 3 digitos',
                    })
                } else if (inputValue.length === 0) {
                    setErrorDatos({
                        [`error${inputName}`]: 'Ingrese la nueva raza',
                    })
                }
            }
        } else if (inputName === 'minimoAltura') {
            if (inputValue > 4) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese la nueva raza',
                })
            } else if (inputValue < 5) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor a 5',
                })
            }
        } else if (inputName === 'maximoAltura') {
            if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (datos.minimoAltura === 0 || datos.minimoAltura === '') {

                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese primero un valor en el minimo'
                })

            } else if (datos.minimoAltura < inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (datos.minimoAltura >= inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor al minimo'
                })
            }
        } else if (inputName === 'minimoPeso') {
            if (inputValue > 4) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese el peso',
                })
            } else if (inputValue < 5) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor a 5',
                })
            }
        } else if (inputName === 'maximoPeso') {
            if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (datos.minimoPeso === 0 || datos.minimoPeso === '') {

                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese primero un valor en el minimo'
                })

            } else if (datos.minimoPeso >= inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor al minimo'
                })
            } else if (datos.minimoPeso < inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            }
        } else if (inputName === 'minimoLifeSpan') {
            if (inputValue > 6) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese el año de vida',
                })
            } else if (inputValue < 7) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor a 7',
                })
            }
        } else if (inputName === 'maximoLifeSpan') {
            if (inputValue === 0 || inputValue === '') {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (datos.minimoLifeSpan === 0 || datos.minimoLifeSpan === '') {

                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese primero un valor en el minimo'
                })

            } else if (inputValue > 25) {
                setErrorDatos({

                    [`error${inputName}`]: 'Sobre pasa a la edad estimada de la raza actualmente conocida'
                })
            } else if (datos.minimoLifeSpan < inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: ''
                })
            } else if (datos.minimoLifeSpan >= inputValue) {
                setErrorDatos({
                    [`error${inputName}`]: 'Ingrese un numero mayor al minimo'
                })
            }
        }
    }
    const handleTemp = (e) => {
        e.preventDefault();
        if (e.target.value !== "All Temp") {
            if (!selectBD.includes(e.target.value)) {
                setSelect([...selectBD, e.target.value])
            }
        }
        if (selectBD !== []) {
            setErrorSelectBD('')
        } else if (selectBD === []) {
            setErrorSelectBD('Seleccione como minimo un temperamento')
        }
    }

    //////////////////////////////
    let news = ''
    for (let i = 0; i < selectBD.length; i++) {
        if (i === 0) {
            news = selectBD[i]
        } else {
            news = news + ', ' + selectBD[i];
        }
    }

    //////////////////////////////
    let heightData = '';
    if (datos.maximoAltura) {
        heightData = `${datos.minimoAltura} - ${datos.maximoAltura}`
    } else {
        heightData = datos.minimoAltura
    }
    let weightData = '';
    if (datos.maximoPeso) {
        weightData = `${datos.minimoPeso} - ${datos.maximoPeso}`
    } else {
        weightData = datos.minimoPeso
    }
    let lifeSpanData = '';
    if (datos.maximoLifeSpan) {
        lifeSpanData = `${datos.minimoLifeSpan} - ${datos.maximoLifeSpan}`
    } else {
        lifeSpanData = datos.minimoLifeSpan
    }
    let listoData = {
        name: datos.name, height: heightData, weight: weightData, life_span: lifeSpanData, temp: selectBD,
    }
    const handleData = (e) => {
        dispatch(agregarPerro({listoData}))
        console.log(listoData)
        e.preventDefault()
    }
    //////////////////////////////
    useEffect(() => {
        if (datos.name === '' ||
            datos.minimoAltura === '' ||
            datos.minimoPeso === '' ||
            datos.minimoLifeSpan === '' ||
            selectBD.length === 0) {
            setDisableBtn(true)
        } else if (
            errorDatos.errorname === '' ||
            errorDatos.errorminimoAltura === '' ||
            errorDatos.errormaximoAltura === '' ||
            errorDatos.errorminimoPeso === '' ||
            errorDatos.errormaximoPeso == '' ||
            errorDatos.errorminimoLifeSpan === '' ||
            errorDatos.errormaximoLifeSpan == ''
        ) {
            setDisableBtn(false)
        }
    }, [datos, errorDatos, errorSelectBD, selectBD, disableBtn])

    ///////////
    return (<>
        <div className={style_css.titleNav}>
            <h1>NEW DOG</h1>
            <Link className={style_css.link} to={'/My_Dogs'}>MY DOGS</Link>
        </div>
        <div className={style_css.flexContainer}>
            <div className={style_css.form}>
                {/*Nombre del perron*/}
                <label>
                    <p>Name:</p>
                    <input
                        className={style_css.inputText}
                        type={'text'} name={'name'}
                        value={datos.name}
                        placeholder={'Name Dog'}
                        onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                    />
                    {!errorDatos.errorname ? null :
                        <span className={style_css.alertMensaje}>{errorDatos.errorname}</span>}
                </label>
                {/*Nombre del perron*/}
                <label>
                    <p>Altura:</p>
                    <div className={style_css.inputMINMAX}>
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'minimoAltura'}
                            name={"minimoAltura"}
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MIN'}
                        />
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'maximoAltura'}
                            name={"maximoAltura"}
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MAX'}
                        />
                    </div>
                    {!errorDatos.errorminimoAltura ? null :
                        <span className={style_css.alertMensaje}>{errorDatos.errorminimoAltura}</span>}
                    {!errorDatos.errormaximoAltura ? null :

                        <br/>}
                    {!errorDatos.errormaximoAltura ? null :

                        <span className={style_css.alertMensaje}>{errorDatos.errormaximoAltura}</span>}
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
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MIN'}
                        />
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'maximoPeso'}
                            name={"maximoPeso"}
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MAX'}
                        />
                    </div>
                    {!errorDatos.errorminimoPeso ? null :
                        <span className={style_css.alertMensaje}>{errorDatos.errorminimoPeso}</span>}
                    {!errorDatos.errormaximoPeso ? null :

                        <br/>}
                    {!errorDatos.errormaximoPeso ? null :

                        <span className={style_css.alertMensaje}>{errorDatos.errormaximoPeso}</span>}
                </label>
                <label>
                    <p>Años de vida:</p>
                    <div className={style_css.inputMINMAX}>
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'minimoLifeSpan'}
                            name={"minimoLifeSpan"}
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MIN'}
                        />
                        <input
                            className={style_css.MINMAX}
                            type={'number'}
                            id={'maximoLifeSpan'}
                            name={"maximoLifeSpan"}
                            onChange={(e) => handleinputChange(e.target.name, e.target.value)}
                            placeholder={'MAX'}
                        />
                    </div>
                    {!errorDatos.errorminimoLifeSpan ? null :
                        <span className={style_css.alertMensaje}>{errorDatos.errorminimoLifeSpan}</span>}
                    {!errorDatos.errormaximoLifeSpan ? null : <br/>}
                    {!errorDatos.errormaximoLifeSpan ? null :
                        <span className={style_css.alertMensaje}>{errorDatos.errormaximoLifeSpan}</span>}
                </label>
                <label>
                    <p>Temperamento:</p>
                    <select
                        className={style_css.select}
                        name={'temperamentos'}
                        onChange={(e) => handleTemp(e)}>
                        <option value='All Temp'>All Temperament</option>
                        {tempRedux?.map(item => (<option
                            key={item.name}
                            value={item.name}
                        >
                            {item.name}
                        </option>))}
                    </select>
                    <div className={style_css.flex}>
                        {selectBD?.map((item) => (<p
                            className={style_css.p}
                            key={item}
                        >
                            {item}
                        </p>))}
                    </div>
                    {!errorSelectBD ? null : <span className={style_css.alertMensaje}>{errorSelectBD}</span>}
                </label>
                <input
                    className={disableBtn ? style_css.btnactivo : style_css.btn}
                    type={'submit'}
                    value={'Submit'}
                    disabled={disableBtn}
                    onClick={handleData}
                />
            </div>
            <div className={style_css.containerDetalle}>
                <p>Nombre: {datos.name}</p>
                <br/>
                <p>
                    {datos.maximoAltura === '' ? `Altura: ${datos.minimoAltura}` : ` Altura: ${datos.minimoAltura} - ${datos.maximoAltura}`}
                </p>
                <br/>
                <p>
                    {datos.maximoPeso === '' ? `Altura: ${datos.minimoPeso}` : ` Altura: ${datos.minimoPeso} - ${datos.maximoPeso}`}
                </p>
                <br/>
                <p>
                    {datos.maximoLifeSpan === '' ? `Años de vida: ${datos.minimoLifeSpan} years` : ` Años de vida: ${datos.minimoLifeSpan} - ${datos.maximoLifeSpan} years`}
                </p>
                <br/>
                <p>Temperamentos: {news}</p>
            </div>
        </div>
    </>)
}