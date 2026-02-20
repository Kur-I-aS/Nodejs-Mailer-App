require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const connection = require("./db"); //....database....

(async () => {
  await connection();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();

const user = require("./routes/users");

app.use("/api/user", user);


