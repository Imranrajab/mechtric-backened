const express = require("express")
const mongo = require("mongoose")
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error", err)); 
const metric = require("../modal/formmodal");

exports.getmetric = async (req, res) => {
  const result = await metric.find({});
  res.send({ msg: "Data retrieved", value: result });
};

exports.postmetric = async (req, res) => {
  const newData = new metric(req.body);
  const result = await newData.save();
  res.send({ msg: "Data saved", value: result });
};