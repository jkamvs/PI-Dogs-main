const axios = require("axios");
require("dotenv").config();
const { API_Key } = process.env;
let dogs = [];
axios
  .get(`https://api.thedogapi.com/v1/breeds${API_Key}`)
  .then((res) => res.data)
  .then((res) => (dogs = res))
  .catch((err) => console.error(err));
// const apiDog = () => {
//   return axios
//     .get(`https://api.thedogapi.com/v1/breeds${API_Key}`)
//     .then((res) => res.data)
//     .catch((err) => console.error(err));
// };


// dogs=[...dogs,...sadadsa]
////////////////Funcion de llamado a todos los datos /////////////////
let dogAll = () => {
  // const apiDogs = await apiDog();
  // dogs = apiDogs;
  // console.log(dogs);
  // return apiDogs;
  console.log(`Datos ingresados: ${dogs.length}`);

  return dogs;
};
////////////////Funcion de filtrado por query para traer a la raza/////////////
let dogName = (name) => {
  let dogsArr = [];

  dogs.map((item) => {
    if (item.name.includes(name)) {
      dogsArr.push(item);
    }
  });
  if (dogsArr.length === 0) return { Error: "La raza no existe" };
  return dogsArr;
};
///////////////////////////////////////////////////////////////
let dogId = (id) => {
  let idRaza = dogs.find((item) => {});
};

module.exports = {
  dogAll,
  dogName,
};
