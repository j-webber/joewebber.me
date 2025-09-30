import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById
} from "../controllers/postController.js";

const postRouter = Router();

postRouter.get("/", getAllPosts); // get all posts
postRouter.post("/", createPost); // create new post
postRouter.get("/:postId", getPostById); // get post by id
postRouter.put("/:postId", updatePostById); // update post by id

export default postRouter;
