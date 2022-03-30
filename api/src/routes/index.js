const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require("./dogs.routes");
const temperamentRouter = require("./temperament.routes");
const postDog = require("./dog.routes");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogRouter);
router.use("/dog", postDog);
router.use("/temperament", temperamentRouter);

module.exports = router;
