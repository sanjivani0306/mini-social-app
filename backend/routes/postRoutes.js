const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    userId: req.user.id,
    username: req.user.username,
    text: req.body.text,
    image: req.body.image
  });
  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/like/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user.username)) {
    post.likes.push(req.user.username);
    await post.save();
  }
  res.json(post);
});

router.post("/comment/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push({
    username: req.user.username,
    text: req.body.text
  });
  await post.save();
  res.json(post);
});

module.exports = router;
