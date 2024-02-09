require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { specs, swaggerUi } = require("./swagger/swaggerConfig");

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.dbConfig);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/ping', require('./routes/pingRouter'));
app.use('/user', require('./routes/userRouter'));
// Swagger Documentation
app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

//connecting to server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; //optionally export app to run