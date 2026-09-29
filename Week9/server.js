const dns = require("dns");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

dns.setServers(["10.47.21.248"]);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);


// GET
app.get("/api/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// POST
app.post("/api/students", async (req, res) => {

    const student = await Student.create({
        name: req.body.name,
        age: req.body.age,
        branch: req.body.branch
    });

    res.json(student);
});


// PUT
app.put("/api/students/:id", async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: "after" }
    );

    res.json(student);
});


// DELETE
app.delete("/api/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student deleted successfully"
    });
});


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        console.log("MongoDB Atlas connected successfully");

        app.listen(3001, () => {
            console.log("Server running at http://localhost:3001");
        });

    })
    .catch((error) => {

        console.log("MongoDB connection failed");
        console.log(error);

    });