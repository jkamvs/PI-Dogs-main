const { Router } = require("express");
const router = Router();
const { addDog } = require("../controllers/dog.controllers");
//////////////////////////////////////////////////////////////////////

router.post("/", (req, res) => {
  const { name, height, weight, life_span, temp } = req.body;
  res.status(201).json(addDog({ name, height, weight, life_span, temp }));
});

module.exports = router;
