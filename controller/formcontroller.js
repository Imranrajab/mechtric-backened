const express = require("express")
const mongo = require("mongoose")
mongo.connect("mongodb://127.0.0.1:27017/test").catch((e) => console.log("not connected"));
exports.getmetric = async (req, res) => {
  const result = await metric.find({});
  res.send({ msg: "Data retrieved", value: result });
};

exports.postmetric = async (req, res) => {
  const newData = new metric(req.body);
  const result = await newData.save();
  res.send({ msg: "Data saved", value: result });
};