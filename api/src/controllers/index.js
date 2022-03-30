const axios = require("axios");
require("dotenv").config();
const { API_Key } = process.env;
const { Dog, Temperamento } = require("../db");
module.exports = {
  databaseDogs: () => {
    return axios
      .get(`https://api.thedogapi.com/v1/breeds${API_Key}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  },
  sqldog: async () => {
    try {
      return await Dog.findAll();
    } catch (error) {
      return { Error: error };
    }
  },
};
