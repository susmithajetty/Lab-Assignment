const dns = require("dns");
const mongoose = require("mongoose");

require("dotenv").config();

dns.setServers(["10.47.21.248"]);

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);

async function runCRUD() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Atlas connected successfully");


        // CREATE
        const student = await Student.create({
            name: "Rahul",
            age: 21,
            branch: "CSE"
        });

        console.log("\nCREATE:");
        console.log(student);


        // READ
        const students = await Student.find();

        console.log("\nREAD:");
        console.log(students);


        // UPDATE
        const updatedStudent = await Student.findOneAndUpdate(
            { name: "Rahul" },
            { age: 22 },
            { new: true }
        );

        console.log("\nUPDATE:");
        console.log(updatedStudent);


        // DELETE
        await Student.deleteOne({
            name: "Rahul"
        });

        console.log("\nDELETE:");
        console.log("Student deleted successfully");


        await mongoose.connection.close();

    } catch (error) {

        console.log("Error:");
        console.log(error);

    }
}

runCRUD();