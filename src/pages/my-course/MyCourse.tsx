import { useState } from "react";
import style from "./MyCourse.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import PoseCard from "../../components/common/cards/pose/PoseCard";
import LongButton from "../../components/common/buttons/longbutton/LongButton";
import TimeMusicSelector from "../../components/common/underbar/timemusicselector/TimeMusicSelector";

function MyCourse() {
  const [showTimeMusicSelector, setshowTimeMusicSelector] = useState(false);

  const handleNestButtonClick = () => {
    setshowTimeMusicSelector(!showTimeMusicSelector);
  };

  return (
    <div className={style.mycourse_container}>
      <section>
        <div className={style.title_container}>
          <h2>자세 선택</h2>
        </div>
        <div className={style.search_container}>
          <div className={style.search_bar}>
            <SearchIcon className={style.search_icon} />
            <input
              type="text"
              placeholder="요가 자세를 검색해보세요"
              className={style.input}
            />
          </div>
        </div>
        <div className={style.poseselect_container}>
          <nav>
            <ul>
              <li>초급</li>
              <li>중급</li>
              <li>고급</li>
            </ul>
          </nav>
        </div>

        <div className={style.pose_cards_container}>
          <div className={style.pose_cards_container_inner}>
            <PoseCard />
            <PoseCard />
            <PoseCard />
            <PoseCard />
            <PoseCard />
            <PoseCard />
          </div>
        </div>

        <div className={style.button_container}>
          <LongButton text="다음으로" onClick={handleNestButtonClick} />
        </div>

        <div
          className={`${style.underbar_container} ${
            showTimeMusicSelector ? style.show : ""
          }`}
        >
          <TimeMusicSelector />
          {showTimeMusicSelector && (
            <LongButton text="동영상 만들기" onClick={handleNestButtonClick} />
          )}
        </div>
      </section>
    </div>
  );
}

export default MyCourse;
