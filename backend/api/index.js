import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import signUpRoute from "./routes/signUp.js"
import loginRoute from "./routes/login.js"

import cors from "cors"
const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDb")
  } catch (error) {
    throw error;
  }
};
//middlewares
app.use(express.json())
app.use(cors())
app.use("/api/signUp",signUpRoute);
app.use("/api/login",loginRoute);

app.listen(8002, () => {
  connect();
  console.log("connnected to backend")
});
