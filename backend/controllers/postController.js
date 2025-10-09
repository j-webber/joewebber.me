import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";
import prisma from "../lib/db.js";
import asyncHandler from "express-async-handler";

const getPublishedPosts = asyncHandler(async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: { published: true }
  });

  res.json(allPosts);
});

const getPublishedPostBySlug = asyncHandler(async (req, res) => {
  const { postSlug } = req.params;

  const post = await prisma.post.findUnique({
    where: {
      slug: postSlug,
      published: true
    }
  });

  if (!post) {
    throw new CustomNotFoundError("Post not found");
  }
  res.json(post);
});

export { getPublishedPosts, getPublishedPostBySlug };
