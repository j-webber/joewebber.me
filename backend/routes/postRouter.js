import { Router } from "express";
import {
  getPublishedPostBySlug,
  getPublishedPosts
} from "../controllers/postController.js";

const postRouter = Router();

postRouter.get("/", getPublishedPosts); // get all published posts
postRouter.get("/:postSlug", getPublishedPostBySlug); // get post by id

export default postRouter;
