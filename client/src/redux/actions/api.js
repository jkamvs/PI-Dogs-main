const axios = require("axios");
////////////Todos los perros
export const urlDogs = async () => {
    try {
        return await axios
            .get("/dogs")
            .then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
///////////////////Perro por id
export const urlDogsId = async (id) => {
    try {
        return await axios
            .get(`/dogs/${id}`)
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
            .get(`/dogs?name=${raza}`)
            .then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
////////////////////////Temperamentos
export const urlTemp = async () => {
    try {
        return await axios
            .get("/temperament")
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
        if (valor === 'Weight 1 - 9') {
            url.sort((a, b) => {
                if (Number(a.weight.split(' - ')[0]) === Number(b.weight.split(' - ')[0])) {
                    return 0
                }
                if (Number(a.weight.split(' - ')[0]) < Number(b.weight.split(' - ')[0])) {
                    return -1
                }
                return 1
            });
        } else if (valor === 'Weight 9 - 1') {
            url.sort((a, b) => {
                if (Number(b.weight.split(' - ')[0]) === Number(a.weight.split(' - ')[0])) {
                    return 0
                }
                if (Number(b.weight.split(' - ')[0]) < Number(a.weight.split(' - ')[0])) {
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
export const addDogDb = ({listoData}) => {
    try {
        return axios
            .post('/dog', {
                name: listoData.name,
                height: listoData.height,
                weight: listoData.weight,
                life_span: listoData.life_span,
                temp: listoData.temp,
            })
    } catch (e) {
        console.log(e)
    }

}
