import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";
import prisma from "../lib/db.js";
import asyncHandler from "express-async-handler";

const getPublishedPosts = asyncHandler(async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: { published: true }
  });

  res.json(allPosts);
});

const getPublishedPostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
      published: true
    }
  });

  if (!post) {
    throw new CustomNotFoundError("Post not found");
  }
  res.json(post);
});

export { getPublishedPosts, getPublishedPostById };
