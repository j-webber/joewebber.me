import asyncHandler from "express-async-handler";
import prisma from "../lib/db";
import { CustomNotFoundError } from "../errors/CustomNotFoundError";
import { CustomBadRequestError } from "../errors/CustomBadRequestError";

const getAllPosts = asyncHandler(async (req, res) => {
  const allPosts = await prisma.post.findMany();

  res.json(allPosts);
});

const getPostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await prisma.post.findUnique({
    where: {
      id: postId
    }
  });

  if (!post) {
    throw new CustomNotFoundError("Post not found");
  }
  res.json(post);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, content, published } = req.body;
  const { id } = req.user;

  if (!title || !content) {
    throw new CustomBadRequestError("Title and content are required");
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      published,
      author: {
        connect: {
          id
        }
      }
    }
  });

  res.json(post);
});

const updatePostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { title, content, published } = req.body;

  const updateData = {};
  if (title !== undefined) updateData.title = title;
  if (content !== undefined) updateData.content = content;
  if (published !== undefined) updateData.published = published;

  if (Object.keys(updateData).length === 0) {
    throw new CustomBadRequestError("No valid fields provided for update");
  }

  const updatedPost = await prisma.post.update({
    where: {
      id: postId
    },
    data: updateData
  });

  res.json(updatedPost);
});

const deletePostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const deletePost = await prisma.post.delete({
    where: { id: postId }
  });

  res.status(204).send();
});

export { getAllPosts, getPostById, createPost, updatePostById, deletePostById };
