const express = require("express");
const router = express.Router();

const familyController = require("../controllers/family");

router.get("/", familyController.getAll);
router.get("/:id", familyController.getSingle);
router.post("/", familyController.newMember);
router.put("/:id", familyController.updateMember);
router.delete("/:id", familyController.deleteMember);


module.exports = router;



