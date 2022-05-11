const express = require("express");
require("./db/conn")
const StudentRouter = require("./router/students")
var cors = require('cors')

const port = process.env.PORT || 6600;
const app = express();

app.use(cors())
app.use(express.json())
app.use(StudentRouter)


app.listen(port, () => {
    console.log(`Running On Port ${port}`)
})