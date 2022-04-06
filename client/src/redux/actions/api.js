const axios = require("axios");
////////////Todos los perros
export const urlDogs = async () => {
    try {
        return await axios
            .get("http://localhost:3001/dogs")
            .then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
///////////////////Perro por id
export const urlDogsId = async (id) => {
    try {
        return await axios
            .get(`http://localhost:3001/dogs/${id}`)
            .then((res) => res.data)
            .catch(e => `El valor ingresado no es el correcto ${e}`)
    } catch (error) {
        console.log(error);
    }
};
/////////////////////Perro por raza
export const urlDogsRaza = async (raza) => {
    try {
        return await axios
            .get(`http://localhost:3001/dogs?name=${raza}`)
            .then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
////////////////////////Temperamentos
export const urlTemp = async () => {
    try {
        return await axios
            .get("http://localhost:3001/temperament")
            .then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
////////////////////Filtro por Existencia de raza
export const filtroRaza = (url, valor) => {
    try {
        if (valor === 'Existentes') {
            let dato = [];
            url.forEach(item => {

                if (item.id < 1000) {
                    dato.push(item)
                }
            })
            return dato;
        } else if (valor === 'Agregada') {
            let dato = [];
            url.forEach(item => {
                let cn = item.id;
                if (typeof  cn === 'string') {
                    dato.push(item)
                }
            })
            return dato;
        }
    } catch (e) {
        console.log(e)
    }
}
/////////////////////Filto abecedario
export const FiltroAbc = (url, valor) => {
    try {
        if (valor === 'Acendente') {
            url.sort((a, b) => {
                if (a.name === b.name) {
                    return 0
                }
                if (a.name < b.name) {
                    return -1
                }
                return 1
            });
        } else if (valor === 'Decendente') {
            url.sort((a, b) => {
                if (b.name === a.name) {
                    return 0
                }
                if (b.name < a.name) {
                    return -1
                }
                return 1
            });
        }
    } catch (e) {
        console.log(e)
    }
}
//////////////////Datos del peso metrico
export const metricoDatos = (url, valor) => {
    try {
        if (valor === 'Imperial 1 - 9') {
            url.sort((a, b) => {
                if (b.weight.metric === a.weight.metric) {
                    return 0
                }
                if (b.weight.metric < a.weight.metric) {
                    return -1
                }
                return 1
            });
        } else if (valor === 'Imperial 9 - 1') {
            url.sort((a, b) => {
                if (a.weight.metric === b.weight.metric) {
                    return 0
                }
                if (a.weight.metric < b.weight.metric) {
                    return -1
                }
                return 1
            });
        } else if (valor === 'Metrica 1 - 9') {
            url.sort((a, b) => {

                if (a.weight.imperial[0] === b.weight.imperial[0]) {
                    return 0
                }
                if (a.weight.imperial[0] < b.weight.imperial[0]) {
                    return -1
                }
                return 1
            });
        } else if (valor === 'Metrica 9 - 1') {
            url.sort((a, b) => {

                if (b.weight.imperial[0] === a.weight.imperial[0]) {
                    return 0
                }
                if (b.weight.imperial[0] < a.weight.imperial[0]) {
                    return -1
                }
                return 1
            });
        }
    } catch (e) {
        console.log(e)
    }
}
////////////////////Agregar perro
export const addDogDb = ({name, minimoAltura, maximoAltura, minimoPeso, maximoPeso, lifeSpan, selectBD}) => {
    try {
        return axios
            .post('http://localhost:3001/dog', {
                name: name,
                height: `${minimoAltura} - ${maximoAltura}`,
                weight: `${minimoPeso} - ${maximoPeso}`,
                life_span: `${lifeSpan} years`,
                temp: selectBD
            })
    } catch (e) {
        console.log(e)
    }

}
