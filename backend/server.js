import express from "express";
import "dotenv/config";
import postRouter from "./routes/postRouter.js";

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/posts", postRouter);

app.get("/", (req, res) => res.send("Server is ready!"));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
