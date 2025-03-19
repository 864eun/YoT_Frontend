import style from './MyCourse.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import PoseCard from '../../components/common/cards/pose/PoseCard';
import NextButton from '../../components/common/buttons/nextbutton/NextButton';



function MyCourse() {
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
            <NextButton text="다음으로"/>
          </div>
      </section>
    </div>
  );
}

export default MyCourse;
