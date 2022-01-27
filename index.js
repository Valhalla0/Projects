// const mongoose = require("mongoose");

// const conn_str =
//   "mongodb+srv://root:root@cluster0.w9r2t.mongodb.net/data1?retryWrites=true&w=majority";
// mongoose
//   .connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected successfully..."))
//   .catch((err) => console.log(err));
// const studentsSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
// });

// const students = new mongoose.model("students", studentsSchema);

// transfered
/** Express Mongoose Integration **/
const express = require("express");
var student = require("./students_module");
const port = 8080;

const app = express();
// transfered
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use("/students", student);
app.use(function (req, res, next) {
  res.status(404);
  res.send("404: File not found");
});

// .route("/students")
// .get(async (req, res) => {
//   let data = await students.find();
//   res.send(data);
// })
// .post(async (req, res) => {
//   req_data = req.body;
//   let obj = new students(req_data);
//   let result = await obj.save();
//   res.send(result);
// })
// .put(async (req, res) => {
//   req_data = req.body;
//   let result = await students.updateOne(
//     { _id: req_data._id },
//     { $set: { email: req_data.email } }
//   );
//   res.send(result);
// })
// .delete(async (req, res) => {
//   let result = await students.deleteOne({ _id: req_data._id });
//   res.send(result);
// });

app.listen(process.env.PORT || port, () => {
  console.log("listening 8080...");
});
