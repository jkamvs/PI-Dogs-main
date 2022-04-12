import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAlphabetical, getMetrica, getRazaFilter, getTemp, getTempFilter} from "../../redux/actions";
import style_css from './styles.module.css'

export default function Filtro_Select({setDbDogs}) {
    const [abc,setabc]= useState('All Data Base')
    const [weight,setweight]= useState('All weight')
    const [temp,setTemp]=useState('All Temp')
    ///Dispatch reducer
    const dispatch = useDispatch();
    /////Reducer
    const tempRedux = useSelector(
        (state) => state.temp
    );

    /////////Effect
    useEffect(() => {
        dispatch(getTemp())
    }, [dispatch])
    const handleTemp = (e) => {
        e.preventDefault();
        dispatch(getTempFilter(e.target.value))
        setDbDogs(1)
        setTemp(e.target.value)
    }
    const handleRaza = (e) => {
        e.preventDefault();
        dispatch(getRazaFilter(e.target.value))
        setDbDogs(1)
        setabc('All Data Base')
        setweight('All weight')
        setTemp('All Temp')
    }
    const handleAlphabetical = (e) => {
        e.preventDefault();
        dispatch(getAlphabetical(e.target.value))
        setDbDogs(1)
        setabc(e.target.value)
        setweight('All weight')
    }
    const handleMetrica=(e)=>{
        e.preventDefault();
        dispatch(getMetrica(e.target.value))
        setDbDogs(1)
        setabc('All Data Base')
        setweight(e.target.value)
    }
    return (<div className={style_css.flex}>
            <select className={style_css.select} name='Temp' value={temp} onChange={(e) => handleTemp(e)}>
                <option value='All Temp'>All Temperament</option>
                {tempRedux?.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}
            </select>
            <select className={style_css.select}  name="Raza" onChange={(e) => handleRaza(e)}>
                <option value='All Data'>All Data</option>
                <option value='Existentes'>Existentes</option>
                <option value='Agregada'>Agregada</option>
            </select>
            <select className={style_css.select}  name={'Alphabetical'} value={abc} onChange={(e) => handleAlphabetical(e)}>
                <option value={'All Data Base'}>All Data Base</option>
                <option value={'Acendente'}>A - Z</option>
                <option value={'Decendente'}>Z - A</option>
            </select>
            <select className={style_css.select}  name="Weight" value={weight} onChange={(e)=>handleMetrica(e)}>
                <option value={'All weight'}>All Weight</option>
                <option value={'Weight 1 - 9'}>Weight 1 - 9</option>
                <option value={'Weight 9 - 1'}>Weight 9 - 1</option>
            </select>
        </div>

    )
}
