import * as bcrypt from 'bcrypt';
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create new user to database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User Created successfully" });
  } catch (err) {
    res.status(201).json({ message: "Fail to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the user exist
    const user = await prisma.user.findUnique({
      where: { username },
    });
    console.log(user.password)
    console.log(password)

    if (!user) return res.status(401).json({ message: "Invalid Credential-User" });

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credential!-Password" });

    // Generate Cookie token and send it to user
    res.setHeader("Set-Cookies", "text=" + "myValue").json("success")
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = (req, res) => {};
