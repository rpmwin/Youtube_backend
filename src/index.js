import dotenv from "dotenv";

import mongoose, { Error } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("errror", (errror) => {
      console.log("errror: ", errror);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongo db connection failed !!!! ", err);
  });

// ////////////////////////////////////////////
//  given below code is not a production level of approach of connecting a DB with the backend in the index.js file itself ,  so basically it is recommended to create a new db folder and write all the connections related to DB in that folder itself....
// ////////////////////////////////////////////
//
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("errror", (errror) => {
//       console.log("errror: ", errror);
//       throw error;
//     });
//     app.listen(process.env.PORT , ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//   } catch (err) {
//     console.log("error: ", err);
//   }
// })();
