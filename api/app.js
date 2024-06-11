import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";


const app = express();
app.use(cookieParser());
// app.use(cors({origin: true, credentials: true,}))

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRoute);
app.use("/api/posts", postRouter);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);



app.listen(8800, () => {
  console.log("Server is running on http://localhost:8800");
});
