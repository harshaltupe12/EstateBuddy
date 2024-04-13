import express from "express";

const app = express();
app.use("/api/test", (req, res)=>{
    res.send("It works")
})

app.use("/api/auth/register", (req, res)=>{
    res.send("It Resister")
})

app.use("/api/auth/login", (req, res)=>{
    res.send("It Login")
})

app.use("/api/auth/logout", (req, res)=>{
    res.send("It Logout")
})

app.use("/api/posts/", (req, res)=>{
    res.send("It Posts ")
})

app.use("/api/posts/", (req, res)=>{
    res.send("It Posts")
})

app.use("/api/posts/123", (req, res)=>{
    res.send("It Posts")
})

app.listen(8800, ()=>{
    console.log("Server is running on http://localhost:8800")
})