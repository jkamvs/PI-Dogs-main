import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllDogs} from "../../redux/actions";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";
import Filtro_Select from "../../components/Filtro_Select";
import Search from "../../components/Search";


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

    let datadb = dogsRedux.slice(dbDogs - 1, dbDogs + 7)
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
        <h1>Perros Dogs</h1>
        <hr/>
        <Search />
        <hr/>
        <Filtro_Select  setDbDogs={setDbDogs}/>
        <hr/>
        <div>
            <Pagination handlePaginado={handlePaginado} setDbDogs={setDbDogs}/>
        </div>
        <hr/>
        <div>
            {datadb?.map((dog) => (<Cards
                key={dog.id}
                id={dog.id}
                name={dog.name}
                temp={dog.temperament}
                imagen={dog.image.url}
                weight={dog.weight}
            />))}
        </div>
    </>);
};
export default Principal;
