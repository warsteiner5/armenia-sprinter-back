const express = require("express");
const router = express.Router();
const transferController = require("../controllers/transfer_controller");

router.get("/", transferController.findAll);
router.post("/", transferController.create);
router.get("/:id", transferController.findOne);
router.put("/:id", transferController.update);
router.delete("/:id", transferController.delete);
module.exports = router;
