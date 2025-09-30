const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  // Handle specific Prisma errors
  if (err.code === "P2025") {
    return res.status(404).send("Record not found");
  }
  if (err.code === "P2002") {
    return res.status(400).send("Unique constraint violation");
  }

  res.status(err.statusCode || 500).send(err.message);
};

export default errorMiddleware;
