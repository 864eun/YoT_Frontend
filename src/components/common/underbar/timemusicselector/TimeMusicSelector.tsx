import style from "./TimeMusicSelector.module.scss";
import ShortButton from "../../buttons/shortbutton/ShortButton";
import BackgroundMusicCard from "../../cards/backgoundmusic/BackgroundMusicCard";
import CloseIcon from '@mui/icons-material/Close';

function TimeMusicSelector() {
  return (
    <div className={style.timemusicselector_container}>
      <div className={style.timemusicselector_outside}>
        <div className={style.icons_container}>
            <CloseIcon className={style.clear_icon}/>
        </div>
      </div>
      <div className={style.timemusicselector_inside}>
        <div className={style.time_container}>
          <h2>자세 유지 시간</h2>
          <div className={style.timebutton_container}>
            <ShortButton time="15초" />
            <ShortButton time="30초" />
            <ShortButton time="1분" />
            <ShortButton time="1분 30초" />
          </div>
        </div>

        <div className={style.music_container}>
          <h2>배경 음악</h2>
          <div className={style.backgoundmusiccard_container}>
            <BackgroundMusicCard />
            <BackgroundMusicCard />
            <BackgroundMusicCard />
            <BackgroundMusicCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeMusicSelector;
