import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Home Page");
});

// About route
app.get("/about", (req: Request, res: Response) => {
    res.send("This is the About Page");
});

// Contact route
app.get("/contact", (req: Request, res: Response) => {
    res.send("This is the Contact Page");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});