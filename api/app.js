import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";


const app = express();
app.use(cors({ origin: true, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/test", testRoute)

app.listen(8800, () => {
  console.log("Server is running on http://localhost:8800");
});
