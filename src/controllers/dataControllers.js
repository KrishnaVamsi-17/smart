const express = require('express')
const dataModel = require('../models/dataModel')
 const uploadOnCloudinary = require('../utils/cloudinary')


const getData = async (req,res) =>{

   const data = await dataModel.find({})

   res.status(200).json(data);
}

const postData = async (req, res) => {
  try {
    const { title, text } = req.body;
    const avatarLocalPath = req.file?.path;
    console.log(avatarLocalPath);
    if (!avatarLocalPath) {
      return res.status(400).json({ error: "Could not get avatar path" });
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar || !avatar.url) {
      return res.status(400).json({ error: "Error while uploading on avatar" });
    }
    const data = await dataModel.create({ title,  text, avatar: avatar.url });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  getData,
  postData
}