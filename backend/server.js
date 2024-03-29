import express from "express";
import "dotenv/config";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server is ready!"));

app.listen(port, () => console.log(`Server running on port: ${port}`));
