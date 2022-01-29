const mongoose = require("mongoose");
// const port = 8080;
const conn_str =
  "mongodb+srv://root:root@cluster0.w9r2t.mongodb.net/data1?retryWrites=true&w=majority";
mongoose
  .connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected successfully..."))
  .catch((err) => console.log(err));
const studentsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const students = new mongoose.model("students", studentsSchema);
/** Express Mongoose Integration **/
const express = require("express");
const app = express();

const router = express.Router();

router.get("/:id", async (req, res) => {
  // Getting user email
  console.log(req.params.id);
  let data = await user.find({ _id: req.params.id });
  console.log(data);
  // res.send(req.params)
  res.send(data);
});

router
  .route("/")
  .get(async (req, res) => {
    let data = await students.find();
    res.send(data);
  })
  .post(async (req, res) => {
    req_data = req.body;
    let obj = new students(req_data);
    let result = await obj.save();
    res.send(result);
  })
  .put(async (req, res) => {
    req_data = req.body;
    let result = await students.updateOne(
      { _id: req_data._id },
      {
        $set: {
          name: req_data.name,
          email: req_data.email,
          phone: req_data.phone,
        },
      }
    );
    res.send(result);
  })
  .delete(async (req, res) => {
    let result = await students.deleteOne({ _id: req_data._id });
    res.send(result);
  });
module.exports = router;
