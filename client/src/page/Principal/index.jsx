import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllDogs} from "../../redux/actions";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";
import Filtro_Select from "../../components/Filtro_Select";
import Search from "../../components/Search";
import {Link} from "react-router-dom";
import style_css from './styles.module.css'

const Principal = () => {
    ///UseState
    const [dbDogs, setDbDogs] = useState(1)
    ///Dispatch reducer
    const dispatch = useDispatch();
    /////Reducer
    const dogsRedux = useSelector((state) => state.dogs);
    /////////Effect
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])
    //////////////////
    let datadb=[]
    if(dogsRedux.length===1){
        datadb=[...dogsRedux]
    }else{
        datadb = dogsRedux.slice(dbDogs - 1, dbDogs + 7)
    }

    ////////////////////////////Para el Paginado
    let handlePaginado = () => {
        let contadorArr = [];
        let nm = 0;
        for (let i = 1; i < dogsRedux.length; i = i + 8) {
            contadorArr.push({id: nm = nm + 1, data: i})
        }
        return contadorArr
    }
    ////////////////////////////////////////////
    return (<>
        <div className={style_css.titleNav}>
            <h1>MY DOGS</h1>
        </div>

        <div className={style_css.nav}>
            <Link to={"/Add_Dog"} className={style_css.btnAdd}>NEW DOG</Link>
            <Search/>
        </div>


        <Filtro_Select setDbDogs={setDbDogs}/>
        <Pagination handlePaginado={handlePaginado} setDbDogs={setDbDogs} dbDogs={dbDogs}/>
        <Cards datadb={datadb}/>
    </>);
};
export default Principal;
