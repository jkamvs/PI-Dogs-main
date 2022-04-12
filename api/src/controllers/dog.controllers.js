const {databaseDogs, sqldog} = require(".");
const {Dog, Temperamento} = require("../db");


let dogs = [];
///////Mejorando la Api
let databaseMejoradoAPI = async () => {
    let dato = await databaseDogs();
    dato.map(item => {
        if (item.temperament) {
            let arr = item.temperament.split(', ')
            item.temperament = arr
        } else {
            item.temperament = ['No registrado']
        }
        let cambioWeight = item.weight.metric;
        item.weight = cambioWeight

        let array = item.weight.split(' - ');
        let newdato = [];
        if (array[0] === 'NaN') {
            array.forEach((items) => {
                if (items === 'NaN') newdato.push('0');
                else newdato.push(items);
            });
            item.weight = newdato.join(' - ');
        }

        let cambioHeight = item.height.metric;
        item.height = cambioHeight
    })
    return dato
}
let databaseMejoradoDB = async () => {
    let data = await sqldog();
    let newData = []
    for (let i = 0; i < data.length; i++) {
        let plantilla = {
            id: data[i].id,
            name: data[i].name,
            height: data[i].height,
            weight: data[i].weight,
            life_span: data[i].life_span,
            temperament: []////===>>>temperamentos[{name:molesto},{name:alegre}]
        }
        let temp = data[i].temperamentos;
        temp.forEach(item => {
            plantilla.temperament.push(item.name)
        })
        newData.push(plantilla)
    }
    return newData
}
////////////////Funcion de llamado a todos los datos /////////////////
let dogAll = async () => {
    const infoApi = await databaseMejoradoAPI();
    const infoDb = await databaseMejoradoDB();
    dogs = await [...infoApi, ...infoDb];
    return dogs;
};
////////////////Funcion de filtrado por query para traer a la raza/////////////
let dogName = async (name) => {
    const v1 = await dogAll();
    let dogsArr = [];

    v1.map((item) => {
        if (item.name.includes(name)) {
            dogsArr.push(item);
        }
    });
    if (dogsArr.length === 0) return {Error: "La raza no existe"};
    return dogsArr;
};
///////////////////////////////////////////////////////////////
let dogId = async (id) => {
    let v1 = await dogAll();
    let razaBuscada = v1.find(item => item.id == id);
    let detalle =  {
        weight: razaBuscada.weight,
        temperament: razaBuscada.temperament.join(', '),
        height: razaBuscada.height,
        life_span:razaBuscada.life_span,
    };
      return detalle;
    
};
let addDog = async ({name, height, weight, life_span, temp}) => {
    try {
        const CreateDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
        });
        const tempDB = await Temperamento.findAll({
            where: {name: temp},
        });
        await CreateDog.addTemperamento(tempDB);
        return {Data: "Dato creado Exitosamente"};
    } catch (error) {
        return {Error: error};
    }
};
module.exports = {
    dogAll,
    dogName,
    dogId,
    addDog,
    databaseMejoradoAPI
};
