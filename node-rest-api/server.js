const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// DB Connectivity
dbConnection();

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", require("./routes/productRoutes"));

app.get("/", (req, res, next) => {
  res.send("Hello from Node API server");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send({
    status: 500,
    message: err.message,
    body: {},
  });
});
