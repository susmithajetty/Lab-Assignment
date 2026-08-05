import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

// Allows Express to receive JSON data
app.use(express.json());

let students = [
    { id: 1, name: "Anu", branch: "CSE" },
    { id: 2, name: "Riya", branch: "AIDS" }
];

// GET - View all students
app.get("/students", (req: Request, res: Response) => {
    res.json(students);
});

// POST - Add a new student
app.post("/students", (req: Request, res: Response) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update a student using dynamic URL
app.put("/students/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name;
    student.branch = req.body.branch;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete a student using dynamic URL
app.delete("/students/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});