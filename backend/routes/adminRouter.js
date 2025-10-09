import { Router } from "express";
import {
  createPost,
  deletePostById,
  getDraftPosts,
  getPostBySlug,
  updatePostById
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.get("/posts", getDraftPosts);
adminRouter.get("/posts/:postSlug", getPostBySlug);
adminRouter.post("/posts", createPost);
adminRouter.put("/posts/:postId", updatePostById);
adminRouter.delete("/posts/:postId", deletePostById);

export default adminRouter;
