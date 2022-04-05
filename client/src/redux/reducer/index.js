import {
    GET_ALL_DOGS,
    GET_ALL_DOGS_QUERY,
    GET_ALL_DOGS_PARAM,
    GET_ALL_TEMPERAMENT,
    GET_TEMP_FILTER,
    GET_RAZA_FILTER,
    GET_ALPHABETICAL, GET_WEIGHT_METRIC
} from "../actions/index";
import {FiltroAbc, filtroRaza, metricoDatos} from "../actions/api";


const initialState = {
    dogsAll: [], dogs: [], createTempFilter: [], tempFilter: [], dog: {}, temp: [],weight:[], dogQuery:[]
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        ////dogs////
        case GET_ALL_DOGS:
            return {
                ...state,
                dogsAll: [...action.payload],
                dogs: [...action.payload],
                createTempFilter: [...action.payload],
                tempFilter: [...action.payload],
            };
        ////dogs?name=Raza////

        case GET_ALL_DOGS_QUERY:
            return {
                ...state, dogs: action.payload,
            };
        ////dogs/id////
        case GET_ALL_DOGS_PARAM:
            return {
                ...state, dog: action.payload,
            };
        ////temp////
        case GET_ALL_TEMPERAMENT:
            return {
                ...state, temp: action.payload
            };
        case GET_TEMP_FILTER:
            const allDogs = [...state.createTempFilter];
            if (action.payload === "All Temp") {
                return {
                    ...state,
                    dogs: allDogs,
                    tempFilter: allDogs,
                }
            } else {
                let dato = allDogs;
                let as = []
                dato.forEach(item => {
                    if (item.temperament) {
                        if (item.temperament.includes(action.payload)) {
                            as.push(item);
                        }
                    }
                })
                return {
                    ...state,
                    dogs: as,
                    tempFilter: as,
                }
            }
        case GET_RAZA_FILTER:
            const allDogsDos = [...state.createTempFilter];
            if (action.payload === 'All Data') {
                return {
                    ...state,
                    dogs: allDogsDos,
                    tempFilter: allDogsDos,
                }
            } else {
                let data = filtroRaza(allDogsDos, action.payload)
                return {
                    ...state,
                    dogs: data,
                    tempFilter: data,
                }
            }
        case GET_ALPHABETICAL:
            const perro = [...state.dogs]
            if (action.payload === 'All Data Base') {
                const allDogsTres = [...state.createTempFilter];
                return {
                    ...state,
                    dogs: allDogsTres,
                    tempFilter: allDogsTres,
                }
            } else {
                FiltroAbc(perro, action.payload)
                return {
                    ...state,
                    dogs: perro,
                    tempFilter: perro,
                }
            }
        case GET_WEIGHT_METRIC:
            const perroFil = [...state.dogs]

            if (action.payload === 'All weight') {
                const allDogsTres = [...state.createTempFilter];
                return {
                    ...state,
                    dogs: allDogsTres,
                    tempFilter: allDogsTres,
                }
            } else {
                metricoDatos(perroFil,action.payload)
                return {
                    ...state,
                    dogs: perroFil,
                    tempFilter: perroFil,
                }
            }

        default:
            return state;
    }
};

export default rootReducer;
