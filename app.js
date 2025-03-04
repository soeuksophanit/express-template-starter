import express from "express";
import cookieParser from "cookie-parser";
import { NODE_ENV, PORT } from "./config/env.config.js";
import startConnection from "./config/database.config.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

// TODO : API Endpoints
const API_URL = {
  BASE: "/api/v1",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// TODO : write your routes here

// TODO : End of API Endpoints

// * Middlwares for error handling
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
  await startConnection();
});

export default app;
