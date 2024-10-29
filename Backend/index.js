import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js"
import userroute from "./route/user.route.js"

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;

//connect to database mongoose
  mongoose
    .connect(URI)
    .then(() => console.log("database connected"))
    .catch((error) => console.log(`Error: ${error}`));


// define routes

app.use("/book",bookRoute)
app.use("/user",userroute)
app.listen(PORT, () => {
  console.log(`port is running ${PORT}`);
});
