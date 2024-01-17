import express from "express"; // if i want to use import i should add "type":"module" in package.json
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

app.use('/api/user',userRoutes)
