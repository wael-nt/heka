const goalController = require("../controllers/goalcontroller");

const express = require("express");

const router = express.Router({ mergeParams: true });

router.post("/addgoal", goalController.addGoal);

router.put("/updategoal", goalController.updateGoal);

router.get("/getgoal", goalController.getGoal);

module.exports = router;
