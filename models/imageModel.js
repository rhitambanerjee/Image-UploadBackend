const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  desc: String,
  image: String,
  imageId: String,
  counter:Number
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;