const mongoose = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"E-mail id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error ("E-mail id is invalid")           }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    address:{
        type:String,
        required:true
    }

})

const Student = new mongoose.model("Student",studentSchema)
module.exports = Student;