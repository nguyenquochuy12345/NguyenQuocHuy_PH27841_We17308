import express from "express";
import routerUser from "./routes/user.js";
const PORT = 8000;

const app = express();

app.use(express.json());

app.use("/api", routerUser);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});