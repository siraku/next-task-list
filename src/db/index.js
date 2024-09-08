import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config";

const ConnectDB = async () => {
  await mongoose
    .connect(MONGODB_URI)
    .then(console.log("DB connection is successful"))
    .catch((e) => {
      console.log(e);
    });
};

export default ConnectDB;
