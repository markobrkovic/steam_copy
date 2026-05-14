import express from 'express';
import fetchGames from './services.js';
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/home", async (req, res) => {
    const games = await fetchGames();
    res.send(games);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});