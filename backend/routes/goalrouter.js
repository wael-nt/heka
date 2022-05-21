const goalController = require("../controllers/goalcontroller");

const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/addgoal", goalController.addGoal);
router.get("/getgoal:email", goalController.getGoal);

module.exports = router;
