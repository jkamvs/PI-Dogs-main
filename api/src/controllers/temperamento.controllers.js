const { databaseDogs } = require("./index");
const { Temperamento } = require("../db");
let dogstemp = [];

let dogsTems = async () => {
  let dato = await databaseDogs(); //Cargo todos los datos de la base de datos
  await dato.map((item) => {
    //Recorro los datos por map para ver el objeto
    if (item.temperament) {
      //Valido si los datos no tienen nungun null
      let arr = item.temperament.split(", "); // Convierto en arreglo los datos de temperamento
      arr.map((index) => {
        //Recorro denuevo pero los arreglos que he creado de cada temperamento
        if (!dogstemp.includes(index))
          //valido si dogstemp no tenga ningun temperamento
          dogstemp.push(index); //En caso que no tenga pushear el valor al dogstemp
      });
    }
  });
  try {
    const tempList = await Temperamento.findAll(); //LLamo a todos los datos de la base de datos
    if (tempList.length === 0) {
      //Condiciono si la base de datos esta vacia
      dogstemp.map((item) => {
        // recorro los datos de dogsTemp que le ingresamos datos
        const jane = Temperamento.build({ name: item }); //Agregamos a la base de datos los items del arreglo
        jane.save(); //Guardamos el dato ingresado
      });
    }
  } catch (error) {
    return { Error: `${e}` }; //En caso que falle :D no queremos que lance error en la consola asi que Shhh
  }
};
let listTemp = async () => {
  await dogsTems(); //Ejecutamos la funcion para cargar los datos para que pueda mostrar
  try {
    const tempList = await Temperamento.findAll(); //consultamos todos los datos
    return await tempList; //Mostramos los datos
  } catch (e) {
    return { Error: `${e}` };
  }
};

module.exports = {
  listTemp,
  dogsTems,
};
