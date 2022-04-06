import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAlphabetical, getMetrica, getRazaFilter, getTemp, getTempFilter} from "../../redux/actions";


export default function Filtro_Select({setDbDogs}) {
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
    }
    const handleRaza = (e) => {
        e.preventDefault();
        dispatch(getRazaFilter(e.target.value))
        setDbDogs(1)
    }
    const handleAlphabetical = (e) => {
        e.preventDefault();
        dispatch(getAlphabetical(e.target.value))
        setDbDogs(1)
    }
    const handleMetrica=(e)=>{
        e.preventDefault();
        dispatch(getMetrica(e.target.value))
        setDbDogs(1)
    }
    return (<div>
            <select name='Temp' onChange={(e) => handleTemp(e)}>
                <option value='All Temp'>All Temperament</option>
                {tempRedux?.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}
            </select>
            <select name="Raza" onChange={(e) => handleRaza(e)}>
                <option value='All Data'>All Data</option>
                <option value='Existentes'>Existentes</option>
                <option value='Agregada'>Agregada</option>
            </select>
            <select name={'Alphabetical'} onChange={(e) => handleAlphabetical(e)}>
                <option value={'All Data Base'}>All Data Base</option>
                <option value={'Acendente'}>A - Z</option>
                <option value={'Decendente'}>Z - A</option>
            </select>
            <select name="Metrica"onChange={(e)=>handleMetrica(e)}>
                <option value={'All weight'}>All Weight</option>
                <option value={'Imperial 1 - 9'}>Imperial 1 - 9</option>
                <option value={'Imperial 9 - 1'}>Imperial 9 - 1</option>
                <option value={'Metrica 1 - 9'}>Metrica 1 - 9</option>
                <option value={'Metrica 9 - 1'}>Metrica 9 - 1</option>
            </select>
        </div>

    )
}
