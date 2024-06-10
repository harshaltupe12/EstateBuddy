import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // const token = req.body.token;
  // console.log(token)
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  
  if (!authHeader) {
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  const token = authHeader.split(' ')[1];
  console.log(token)

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err){
      return res.status(403).json({ message: "Token is not Valid!" });
    } 
    req.userId = payload.id;
    console.log(payload.id)

    next();
  });
};