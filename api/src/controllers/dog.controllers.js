const { databaseDogs, sqldog } = require(".");
const { Dog, Temperamento } = require("../db");

let dogs = [];

////////////////Funcion de llamado a todos los datos /////////////////
let dogAll = async () => {
  const v1 = await databaseDogs();
  const v2 = await sqldog();
  dogs = await [...v1, ...v2];
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
  if (dogsArr.length === 0) return { Error: "La raza no existe" };
  return dogsArr;
};
///////////////////////////////////////////////////////////////
let dogId = async (id) => {
  const v1 = await dogAll();
  let idRaza = await v1.filter((item) => {
    if (item.id == id) {
      return item;
    }
  });
  let detalle = await {
    weight: idRaza[0].weight,
    temperament: idRaza[0].temperament,
    height: idRaza[0].height,
  };
  return detalle;
};
let addDog = async ({ name, height, weight, life_span, temp }) => {
  try {
    const CreateDog = await Dog.create({
      name,
      height,
      weight,
      life_span,
    });
    const tempDB = await Temperamento.findAll({
      where: { name: temp },
    });
    await CreateDog.addTemperamento(tempDB);
    return { Data: "Dato creado Exitosamente" };
  } catch (error) {
    return { Error: error };
  }
};
module.exports = {
  dogAll,
  dogName,
  dogId,
  addDog,
};
