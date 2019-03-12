const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: Object,
      required: true
    }
  },
  { timestamps: true } // to add createdAt and updatedAt
);

module.exports = mongoose.model("Post", postSchema);
