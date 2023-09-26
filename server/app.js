import connectDB from './db.js'
// import db from './db'

import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

// const express = require("express")
// const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
// const dotenv = require("dotenv")


// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//Middleware
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
connectDB();

// Define a route that responds with a message
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a simple message as the response
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});