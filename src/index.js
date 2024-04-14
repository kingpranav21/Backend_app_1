import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
  {
    path: "./env"
  }
);
connectDB();










/*
import express from "express";
const app = express();
//IIFE
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    //listener
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      throw error;
    })
      app.listen(process.env.PORT, () => {
          console.log(`app is listening on ${process.env.PORT}`);
    })
  }catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/