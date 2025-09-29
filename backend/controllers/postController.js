import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const getAllPosts = async (req, res) => {
  res.send("All posts");
};

const createPost = async (req, res) => {
  res.send("Created post");
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  // insert db call here
  // const post = await db.getPostById(ID)

  // insert Error handler here
  // if (!post) {
  //   throw new CustomNotFoundError("Post not found");
  // }

  res.send(`Post ID: ${postId}`);
};

const updatePostById = async (req, res) => {
  const { postId } = req.params;
  res.send(`Updated Post with ID: ${postId}`);
};

export { getAllPosts, createPost, getPostById, updatePostById };
