import express from "express";
import path from "path";
import { fileURLToPath } from "url";

console.log("Starting server ...");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server started.");
});
