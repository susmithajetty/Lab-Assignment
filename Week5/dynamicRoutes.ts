import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

// Home route
app.get("/", (req: Request, res: Response) => {
    res.send("Dynamic Routes Example");
});

// Route Parameter
// Example: /user/101
app.get("/user/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    res.send(`User ID is: ${id}`);
});

// Query Parameter
// Example: /search?name=Susmitha
app.get("/search", (req: Request, res: Response) => {
    const name = req.query.name;

    res.send(`You searched for: ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});