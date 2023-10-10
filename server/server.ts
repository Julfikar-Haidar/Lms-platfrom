import { v2 as cloudinary } from "cloudinary";
import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

// cloudinary configuration

cloudinary.config({
  cloud_name: "dtbawodx6",
  api_key: "383196137162598",
  api_secret: "SrVw04XJs5KLZLcv_zXB90X9Ung",
});
// create server

app.listen(process.env.PORT, () => {
  console.log(`server is connected on port ${process.env.PORT}`);
  connectDB();
});
