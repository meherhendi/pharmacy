const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser())
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("database connected !!!");
});

const pharmmacyRouter = require('./routes/pharmacy')
const pharmmacyCredRouter = require('./routes/login')
const reservationRouter = require('./routes/reservation')

app.use("/pharmacy", pharmmacyRouter)
app.use("/login", pharmmacyCredRouter)
app.use("/reservation", reservationRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("server is running on port",port);
});
