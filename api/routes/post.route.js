import express from "express";
const router = express.Router();

router.get("/test", (req, res)=>{
    res.send("Router works Send")
    console.log("Router works Clg")
})

export default router;