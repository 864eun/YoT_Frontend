import style from './CourseCard2.module.scss'

function CoureCard2() {
  return (
    <div className={style.course_card_2_container}>
      <img className={style.img} src='src\assets\images\yoga_thum_3.jpg'></img>
      <div className={style.level_contianer}>
        <span>중급</span>
        </div>
      <div className={style.time_container}>
        <span>총 20분</span>
        </div>

    </div>
  )
}

export default CoureCard2
