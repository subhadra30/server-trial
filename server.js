import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

const images = [
  "https://fastly.picsum.photos/id/556/200/200.jpg?hmac=5uOJ4fW7ElE2P5NfHlvz2zx4d99Ts2-lxy8tucygHLc",
  "https://fastly.picsum.photos/id/296/200/200.jpg?hmac=y-H33xJ0Tpm9muoZO3ZMb5kXpNPG1mptQ9HBmpjCc8A",
  "https://fastly.picsum.photos/id/16/200/200.jpg?hmac=RGkrMlBKS58bjVd__gfGtWpmouvlXbzUHDjGHNcbIic",
];

app.get("/", function (request, response) {
  response.json("This is root route");
});

app.get("/images", function (request, response) {
  response.json(images);
});

app.listen(8080, function () {
  console.log("Listening to port 8080");
});
