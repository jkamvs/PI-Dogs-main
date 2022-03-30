const { Router } = require("express");
const { listTemp,dogsTems } = require("../controllers/temperamento.controllers");

const router = Router();

// POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos

router.get("/", async (req, res) => {
  await dogsTems();
  res.status(200).json(await listTemp());
});

module.exports = router;
