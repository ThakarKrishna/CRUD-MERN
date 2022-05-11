const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-data")
.then(()=>console.log("connection successful..."))
.catch((err)=>console.log("No connection"))