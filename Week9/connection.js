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

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB Atlas connected successfully");

        const student = new Student({
            name: "Susmitha",
            age: 20,
            branch: "AI & DS"
        });

        await student.save();

        console.log("Student inserted successfully");
        console.log(student);

        mongoose.connection.close();
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error);
    });