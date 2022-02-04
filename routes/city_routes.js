const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city_controller");

router.get("/", cityController.findAll);
router.post("/", cityController.create);
router.get("/:id", cityController.findOne);
router.put("/:id", cityController.updateCity);
router.delete("/:id", cityController.delete);
module.exports = router;