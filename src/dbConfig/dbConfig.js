import { configDotenv } from "dotenv";

configDotenv();
const dbConnect = async () => {
  
  try {
    const mongoose = (await import("mongoose")).default;
    const connection = await mongoose.connect(
      "mongodb+srv://abdullahrasheed45:Got1newlove@cluster0.ww5qk8b.mongodb.net/"
    );

    connection.connection.on("connected", () => {
      console.log("DB connected successfully");
    });
    connection.connection.on("error", (err) => {
      console.error(
        "MongoDB connection Error. Please make sure MongoDB is running.",
        err
      );
      process.exit(1); // Exiting the process with a non-zero code to indicate an error
    });
  } catch (err) {
    console.error(err);
  }
};

export default dbConnect; // Export dbConnect as the default export
