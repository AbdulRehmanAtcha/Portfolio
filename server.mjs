import express from "express";
import path from "path";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
const MongoDBURI =
  process.env.MongoDBURI ||
  "mongodb+srv://abdulrehman1239091:abdul123@cluster0.lux4z9y.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
const port = process.env.PORT || 5001;
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});
const reviewModel = new mongoose.model("Review", reviewSchema);
app.post("/api/v1/item", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const document = new reviewModel({
      name,
      email,
      message,
    });

    await document.save();

    res.status(201).json({ message: "Document created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect(MongoDBURI);

mongoose.connection.on("connected", function () {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
