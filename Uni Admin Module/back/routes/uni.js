const router = require("express").Router();
const mongoose = require("mongoose");
const Uni = mongoose.model("University");

router.get("/list", async (req, res) => {
  const unis = await Uni.find({});
  res.send(unis);
});

router.post("/add", async (req, res) => {
  const add = new Uni();

  add.uni_name = req.body.uni_name;
  add.description = req.body.description;
  add.address = req.body.address;

  await add.save();
  res.send(add);
});

router.get("/list/:id", async (req, res) => {
  const list = await Uni.findOne({ _id: req.params.id });
  res.send(list);
});

router.put("/list/:id", async (req, res) => {
  const list = await Uni.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    req.body,
    {
      new: true
    }
  );
  res.send(list);
});

router.delete("/list/:id", async (req, res) => {
  const list = await Uni.findByIdAndRemove({
    _id: req.params.id
  });
  res.send(list);
});

module.exports = router;
