import VideoGame from "../videogame/VideoGame.jsx";
import {useEffect, useState} from "react";
import styles from "./GameCollection.module.css"

function GameCollection({game}) {
    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState(0);

    useEffect(() => {
        if(games.length <= 0) {
            fetch("http://localhost:3000/home")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setGames(data);
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            console.log("wtf")
            setCurrentGame(currentGame + 1);
        }
    }, [currentGame]);

    return <div className={styles.container}>
        {games[currentGame] && (
            <VideoGame game={games[currentGame]} />
        )}
    </div>
}

export default GameCollection;