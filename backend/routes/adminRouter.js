import { Router } from "express";
import {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.get("/posts", getAllPosts);
adminRouter.get("/posts/:postId", getPostById);
adminRouter.post("/posts", createPost);
adminRouter.put("/posts/:postId", updatePostById);
adminRouter.delete("/posts/:postId", deletePostById);

export default adminRouter;
