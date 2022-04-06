/// link de la api creada
import {urlDogs, urlDogsRaza, urlDogsId, urlTemp, addDogDb} from "./api";

//data
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_DOGS_QUERY = "GET_ALL_DOGS_QUERY";
export const GET_ALL_DOGS_PARAM = "GET_ALL_DOGS_PARAM";
export const GET_ALL_TEMPERAMENT = "GET_ALL_TEMPERAMENT";
export const GET_TEMP_FILTER = "GET_TEMP_FILTER";
export const GET_RAZA_FILTER = "GET_RAZA_FILTER";
export const GET_ALPHABETICAL = "GET_ALPHABETICAL";
export const GET_WEIGHT_METRIC = "GET_WEIGHT_METRIC";
export  const ADD_DOGS='ADD_DOGS';
////////////////Todos los datos de  DOGS
export const getAllDogs = () => async (dispatch) => {
    try {
        let dogs = await urlDogs();

        return dispatch({
            type: GET_ALL_DOGS, payload: dogs,
        });
    } catch (err) {
        console.log(err);
    }
};
///////////////////Las Razas de DOGS
export const getDogRaza = (raza) => async (dispatch) => {
    try {
        let dogsAll = await urlDogs();
        let bool = false;
        dogsAll.forEach(item => {
            if (item.name.includes(raza)) {
                bool = true
            }
        })
        if (bool) {
            let dogs = await urlDogsRaza(raza);
            return dispatch({
                type: GET_ALL_DOGS_QUERY, payload: dogs,
            });
        } else {

            return dispatch({
                type: GET_ALL_DOGS_QUERY, payload: dogsAll,
            });
        }

    } catch (err) {
        console.log(err);
    }
};
////////////////////Mostrar los datos traidos por id
export const getDogId = (id) => async (dispatch) => {
    try {
        let dog = await urlDogsId(id);
        return dispatch({
            type: GET_ALL_DOGS_PARAM, payload: dog,
        });
    } catch (err) {
        console.log(err);
    }
};
/////////////////Mostrar temperamento
export const getTemp = () => async (dispatch) => {
    try {
        let temp = await urlTemp()
        return dispatch({
            type: GET_ALL_TEMPERAMENT, payload: temp
        })
    } catch (e) {
        console.log(e)
    }
}
////////////////Filtrado temperamento
export const getTempFilter = (payload) => {
    return {
        type: GET_TEMP_FILTER, payload
    }
}
//////////////Filtrado por Raza
export const getRazaFilter = (payload) => {
    return {
        type: GET_RAZA_FILTER, payload
    }
}
////////////Filtrado por Alphabetical
export const getAlphabetical = (payload) => {
    return {
        type: GET_ALPHABETICAL, payload
    }
}
export const getMetrica = (payload) => {
    return {
        type: GET_WEIGHT_METRIC, payload

    }
}
export const agregarPerro = ({name, minimoAltura, maximoAltura, minimoPeso, maximoPeso, lifeSpan}) => {
    addDogDb({
        name,
        minimoAltura,
        maximoAltura,
        minimoPeso,
        maximoPeso,
        lifeSpan})
    return {
        type:ADD_DOGS
    }

}