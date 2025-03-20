import style from "./BackgroundMusicCard.module.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function BackgroundMusicCard() {
  return (
    <div className={style.backgroundmusiccard_container}>
      <div className={style.top_section}>
        <img src="src\assets\images\rainsound.jpg" alt="Pose" className={style.pose_image} />
      </div>
      <div className={style.bottom_section}>
        <div className={style.name_container}>        
          <span className={style.backgroundmusic_name}>비</span>
          </div>
        <div className={style.icons_container}>
          <PlayCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default BackgroundMusicCard;
