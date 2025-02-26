import { Router } from "express";

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from example route",
  });
});

export default exampleRouter;
