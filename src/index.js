import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";




dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT ||8545 , () => {
    console.log(`app is listening on port ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log(`MongoDB connection error: ${err.message}`);
})





// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       dbName: DB_NAME,
//     });

//     console.log("Connected to MongoDB");
//     // Now you can start your app or do other things related to your application setup
//     // app.on("error", console.error);
//     // app.listen(process.env.PORT, () => {
//     //   console.log(`app is listening on port ${process.env.PORT}`);
//     // });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// }

// connectDB();
