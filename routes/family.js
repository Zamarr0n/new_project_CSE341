const express = require("express");
const router = express.Router();

const familyController = require("../controllers/family");

router.get("/", familyController.getAll);
router.get("/:id", familyController.getSingle);



module.exports = router;
