require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const connection = require("./db");

const userRoutes = require("./routes/users");
app.use("/api/user", userRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const port = process.env.PORT || 8080;

(async () => {
  await connection();
  app.listen(port, () =>
    console.log(`Server running on port ${port}`)
  );
})();




