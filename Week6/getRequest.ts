import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("GET Request Example");
});

// GET request that sends JSON
app.get("/students", (req: Request, res: Response) => {
    const students = [
        { id: 1, name: "Anu", branch: "CSE" },
        { id: 2, name: "Riya", branch: "AIDS" },
        { id: 3, name: "Megha", branch: "ECE" }
    ];

    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});