import style from './Section2.module.scss';
import CourseCard2 from '../../cards/coure/CoureCard2';
import MoreButton from '../../buttons/morebutton/MoreButton';



function Section2() {
  return (
    <section className={style.section_2_container}>
      <div className={style.title_container}>
        <h2 className={style.title}>Today's Yoga Course</h2>
        <div className={style.description}>
          자동으로 추천된 <span className={style.boldText}>오늘의 요가 코스</span>입니다.
        </div>
      </div>
      <div className={style.content_container}>
        <CourseCard2 />
        <CourseCard2 />
      </div>
      <div className={style.buttom_container}>
      <MoreButton/>
      </div>
    </section>
  );
}

export default Section2;
