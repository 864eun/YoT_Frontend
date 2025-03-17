import style from "./Section1.module.scss";
import video1 from "../../../../assets/video/home_background_2.mp4";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Section1() {
  return (
    <section className={style.section_1_container}>
      <video className={style.background_video} src={video1} autoPlay loop muted />
      <div className={style.text_container}>
        <div>
          <p className={style.text_1}>나만의 요가</p>
          <p className={style.text_2}>내 몸과 마음을 위한 시간</p>
        </div>
        <div className={style.text_3_container}>
          <p className={style.text_3}>시작하기</p>
          <ArrowRightIcon className={style.text_3_icon}/>
        </div>
      </div>
    </section>
  );
}

export default Section1;
