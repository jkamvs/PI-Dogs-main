import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {agregarPerro, getTemp} from "../../redux/actions";
import style_css from './style.module.css'
import {Link} from "react-router-dom";
import Loading from "../../components/Loading";

export default function Crear_Raza() {
    const [loading,setloading]=useState(true)
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
    /**FUNCION PARA VALIDAR EL MAYUS */
    const mayusculaSearch = (as) => {
        let arr = as.split(' ');
        let datoArr = [];
        arr.forEach((item) => {
            datoArr.push(item.charAt(0).toUpperCase() + item.slice(1));
        });
        return datoArr.join(" ");
    }
    /** CREANDO LA FUNCION PARA VALIDAR ERRORES */
    const validate = (datos) => {
        let errors = {};

        if (!datos.name) errors.name = 'Necesitamos colocar un raza a tu perro';
        if (/[1-9]/.test(datos.name)) errors.name = 'No se permite numeros';
        if (/[^\w\s]/.test(datos.name)) errors.name = 'No se permite caracter';
        if (datos.minimoAltura < 5) errors.minimoAltura = 'Necesita colocar la altura minima';
        if (datos.maximoAltura !== '' && +datos.minimoAltura >= +datos.maximoAltura) errors.minimoAltura = 'El valor debe de ser menor al maximo'
        if (datos.minimoPeso < 5) errors.minimoPeso = 'Necesita colocar el peso minima';
        if (datos.maximoPeso !== '' && +datos.minimoPeso >= +datos.maximoPeso) errors.maximoPeso = 'El valor debe de ser menor al maximo'
        if (datos.minimoLifeSpan < 5) errors.minimoLifeSpan = 'Necesita colocar la vida minima';
        if (datos.maximoLifeSpan !== '' && +datos.minimoLifeSpan >= +datos.maximoLifeSpan) errors.minimoLifeSpan = 'El valor debe de ser menor al maximo'

        return errors;
    }


    /**HANDLERS PARA LOS INPUTS, SETEANDO EL VALOR DEL ESTADO */
    const handleinputChange = (e) => {
        setDatos({
            ...datos, [e.target.name]: mayusculaSearch(e.target.value)
        })
        setErrorDatos(validate({
            ...datos, [e.target.name]: mayusculaSearch(e.target.value)
        }))
    }

    /**Handler temperaments */
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
    /**CONTABILIZO CUANTO RECIBE EL SELECT Y LOS CONCATENO*/
    let news = ''
    for (let i = 0; i < selectBD.length; i++) {
        if (i === 0) {
            news = selectBD[i]
        } else {
            news = news + ', ' + selectBD[i];
        }
    }

    //////////////////////////////
    /**PREPARAR DATOS PARA EL ENVIO */
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

    /**Handle para el boton */
    const handleData = (e) => {
        e.preventDefault();
        dispatch(agregarPerro({listoData}));
        alert('Raza de perro creado');
        setDatos({
            name: '',
            minimoAltura: '',
            maximoAltura: '',
            minimoPeso: '',
            maximoPeso: '',
            minimoLifeSpan: '',
            maximoLifeSpan: ''
        })
        setSelect([]);

    }
    //////////////////////////////
    useEffect(() => {
        if (datos.name === '' || datos.minimoAltura === '' || datos.minimoPeso === '' || datos.minimoLifeSpan === '' || selectBD.length === 0 || errorDatos.hasOwnProperty('name') || errorDatos.hasOwnProperty('minimoAltura') || errorDatos.hasOwnProperty('maximoAltura') || errorDatos.hasOwnProperty('maximoPeso') || errorDatos.hasOwnProperty('minimoPeso') || errorDatos.hasOwnProperty('maximoLifeSpan') || errorDatos.hasOwnProperty('minimoLifeSpan')

        ) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    }, [datos, errorDatos, errorSelectBD, selectBD, disableBtn])
    ///////////
    setTimeout(()=>{
        setloading(false)
    },3000)
    ////////////
    return (<>
        {loading?<Loading/>:null}
        <div className={style_css.titleNav}>
            <h1>NEW DOG</h1>
            <Link className={style_css.link} to={'/My_Dogs'}>MY DOGS</Link>
        </div>
        <div className={style_css.flexContainer}>
            <div className={style_css.form}>
                {/*Nombre del perron*/}
                <label>Name:</label>
                <input
                    className={style_css.inputText}
                    type='text'
                    name='name'
                    value={datos.name}
                    placeholder='Name Dog'
                    onChange={(e) => handleinputChange(e)}
                />
                {errorDatos.name && <p className={style_css.alertMensaje}>{errorDatos.name}</p>}
                {/*Nombre del perron*/}
                <label>Altura:</label>
                <div className={style_css.inputMINMAX}>
                    <input
                        className={style_css.MINMAX}
                        type='number'
                        id='minimoAltura'
                        name="minimoAltura"
                        value={datos.minimoAltura}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MIN'}
                    />
                    <input
                        className={style_css.MINMAX}
                        type='number'
                        id='maximoAltura'
                        name="maximoAltura"
                        value={datos.maximoAltura}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MAX'}
                    />
                </div>
                {errorDatos.minimoAltura && <p className={style_css.alertMensaje}>{errorDatos.minimoAltura}</p>}
                {errorDatos.maximoAltura && <p className={style_css.alertMensaje}>{errorDatos.maximoAltura}</p>}
                {/*Nombre del perron*/}
                <label>Peso:</label>
                <div className={style_css.inputMINMAX}>
                    <input
                        className={style_css.MINMAX}
                        type={'number'}
                        id={'minimoPeso'}
                        name={"minimoPeso"}
                        value={datos.minimoPeso}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MIN'}
                    />
                    <input
                        className={style_css.MINMAX}
                        type={'number'}
                        id={'maximoPeso'}
                        name={"maximoPeso"}
                        value={datos.maximoPeso}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MAX'}
                    />
                </div>
                {errorDatos.minimoPeso && <p className={style_css.alertMensaje}>{errorDatos.minimoPeso}</p>}
                {errorDatos.maximoPeso && <p className={style_css.alertMensaje}>{errorDatos.maximoPeso}</p>}
                <label>Años de vida:</label>
                <div className={style_css.inputMINMAX}>
                    <input
                        className={style_css.MINMAX}
                        type={'number'}
                        id={'minimoLifeSpan'}
                        name={"minimoLifeSpan"}
                        value={datos.minimoLifeSpan}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MIN'}
                    />
                    <input
                        className={style_css.MINMAX}
                        type={'number'}
                        id={'maximoLifeSpan'}
                        name={"maximoLifeSpan"}
                        value={datos.maximoLifeSpan}
                        onChange={(e) => handleinputChange(e)}
                        placeholder={'MAX'}
                    />
                </div>
                {errorDatos.minimoLifeSpan && <p className={style_css.alertMensaje}>{errorDatos.minimoLifeSpan}</p>}
                {errorDatos.maximoLifeSpan && <p className={style_css.alertMensaje}>{errorDatos.maximoLifeSpan}</p>}
                <label>Temperamento:</label>
                <select
                    defaultValue={'All Temp'}
                    className={style_css.select}
                    name={'temperamentos'}
                    onChange={(e) => handleTemp(e)}>
                    <option value='All Temp' disabled>All Temperament</option>
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
                {errorSelectBD && <p className={style_css.alertMensaje}>{errorSelectBD}</p>}
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
                {disableBtn ? null :
                    <img className={style_css.sello} src={require('../../Recurso_kawai/perro-Kenneth-04.png')}
                         alt={'sello'}/>}

            </div>
        </div>
    </>)
}