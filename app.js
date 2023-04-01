const express = require("express");
const app = express();
const cors = require("cors");


require("dotenv").config({ path: "config/config.env" })

app.use(cors())
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))



// http://localhost:4000/api/v1/login

app.use("/api/v1", require("./routes/event"))



module.exports = app