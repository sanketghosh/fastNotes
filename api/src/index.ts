// PACKAGES
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";

dotenv.config();

// LOCAL MODULES
import swaggerDoc from "./swagger.json";

// ROUTES

const app = express();
const PORT = process.env.PORT || 8000;

// general middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(morgan("combined"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

// swagger API docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Access API docs on http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

startServer();
