const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
app.use(require("./routes/certificate"));
// app.use(require("./routes/_record-access"));
// get driver connection
const dbo = require("./db/conn");
 
const start = async () => {
  try {
    app.listen(PORT, () => {
      // perform a database connection when server starts
      dbo.connectToServer(function (err) {
        if (err) console.error(err);
      });
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (e) { console.log(e); }
};

start ();
