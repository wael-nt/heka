const goalSchema = require("../models/goal");

exports.addGoal = async function addGoal(req, res, next) {
  console.log("i get it here but what happen then");
  const obj = req.body;
  const goalObj = new goalSchema({
    owner: obj.owner,
    calories: obj.calories,
    protein: obj.protein,
  });
  try {
    const result = await goalObj.save();
    res.send(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getGoal = async function getGoal(req, res, next) {
  console.log("Request coming...");
  const owner = req.body.email;
  try {
    await goalSchema.findOne({ owner: owner }, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  } catch (error) {}
};

exports.updateGoal = async function updateGoal(req, res, next) {
  console.log("updating coming...");
  const obj = req.body;
  const goalObj = new goalSchema({
    owner: obj.owner,
    calories: obj.calories,
    protein: obj.protein,
  });
  try {
    await goalSchema.findOneAndUpdate(goalObj.owner, {
      calories: goalObj.calories,
      protein: goalObj.protein,
    });
    res.send("Goal updated");
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
