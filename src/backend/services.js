import dotenv from "dotenv";

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

async function fetchGames() {
    const response = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": CLIENT_ID,
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "text/plain"
        },
        body: `
      fields name, first_release_date, rating, screenshots.*, cover.*;
      where rating > 75;
      limit 20;
    `
    });

    return await response.json();
}

export default fetchGames;