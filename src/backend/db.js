import express from 'express';
import fetchGames from './services.js';

const app = express();

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