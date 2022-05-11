const express = require("express");
const router = new express.Router();
const Student = require("../models/students")





// app.post("/students", (req, res) => {
//     const user = new Student(req.body)
//     // console.log("🚀 ~ file: index.js ~ line 17 ~ app.post ~ req.body", req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(404).send(err)
//     })

// })

router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser)

    } catch (err) {
        res.status(400).send(err)
    }
})


router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData)

    } catch (err) {
        res.status(400).send(err)
    }
})


router.get("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const studentData = await Student.findById(id)

        if (!studentData) {
            res.status(404).send()
        } else {
            res.status(200).send(studentData)
        }


    } catch (err) {
        res.status(400).send(err)
    }
})


router.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id)
        if (!id) {
            res.status(404).send()
        } else {

            res.status(200).send(deleteStudent)
        }


    } catch (error) {
        res.status(500).send(err)
    }
})

router.patch("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!id) {
            res.status(404).send()
        } else {

            res.status(200).send(updateStudent)
        }


    } catch (error) {
        res.status(500).send(err)
    }
})


module.exports = router