const { Router } = require("express");
const router = Router();
const { dogAll, dogName } = require("../controllers/dog.controllers");

router.get("/", async(req, res) => {
  const { name } = req.query;
 
  if (Object.keys(req.query).length > 0)
    return res.status(200).json( await dogName(name));
  else return res.status(200).json( await dogAll());
});

router.get("/:idRaza", (req, res) => {
  const { idRaza } = req.params;
  res.status(200).send(idRaza);
});


router.post("/", (req, res) => {
  res.status(200).send("Hola");
});

module.exports = router;
