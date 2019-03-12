const { validationResult } = require("express-validator/check");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/book.jpg",
        creator: {
          name: "Shivam"
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect",
      errors: errors.array()
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  const post = new Post({
    title,
    content,
    imageUrl: "images/book.jpg",
    creator: { name: "Shivam" }
  });
  post
    .save()
    .then(post => {
      console.log(post);
      res.status(201).json({
        message: "Post created successfully!",
        post
      });
    })
    .catch(console.log);
};
