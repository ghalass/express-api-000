const express = require("express");
const app = express();
const cors = require("cors");
require("colors");
require("dotenv").config();

let PORT = 3001;

if (process.env.NODE_ENV == "development") {
  PORT = process.env.PORT_DEV || 3001;
}

if (process.env.NODE_ENV == "production") {
  PORT = process.env.PORT_PROD || 3001;
}

app.use(express.json());
app.use(cors());

// TEST ROUTER
// const testRouter = require("./routes/Test");
app.get("/", (req, res) => {
  res.status(200);
  res.json("Welcome to the API.");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      " OK ".green.inverse + ` SERVER IS RUNNING ON PORT : ` + `${PORT}`.green
    );
  } else {
    console.log(" NOK ".red.inverse + `${error}`.red);
  }
});
