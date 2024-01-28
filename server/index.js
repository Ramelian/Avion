import mongoose from "mongoose";
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import { itemRoute, userRoute } from "./routes/index.js";
import cookieParser from "cookie-parser";
import authMiddleware from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  credentials: true,
}

app.use(cors(corsOptions));

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

app.use(cookieParser());

app.use("/assets", express.static("./public/assets"));

app.use("/items",   itemRoute);

app.use("/api/user", userRoute)

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
