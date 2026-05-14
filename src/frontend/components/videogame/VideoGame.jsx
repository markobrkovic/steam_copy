import styles from "./VideoGame.module.css"

function VideoGame({game}) {
    console.log(game);
    const { id, name, cover } = game;
    return <div className={styles.container}>
        <img className={styles.cover} src={cover ? `//images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKEkjySB2d8xb7WSkQ4IEZKUA5CJfApXRYA&s"} alt=""/>
        <div className={styles.description}>
            <h1 key={id} className={styles.header}>{name}</h1>
            <p></p>
        </div>
    </div>
}

export default VideoGame;