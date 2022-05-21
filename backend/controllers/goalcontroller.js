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
      message: err.message,
    });
  }
};

exports.getGoal = async function getGoal(req, res, next) {
  let owner = req.params.email;
  try {
    const r = await goalSchema.findOne({ owner: owner });
    res.status(200).json(r);
  } catch (err) {
    res.status(400).json({ message: "No goal exist." });
  }
};
