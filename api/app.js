import express from "express";
import postRouter from "./routes/post.route.js";


const app = express();

app.use("/api/posts", postRouter)

app.listen(8800, ()=>{
    console.log("Server is running on http://localhost:8800")
})