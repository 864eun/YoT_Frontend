import style from './CourseCard1.module.scss'

function CoureCard1() {
  return (
    <div className={style.course_card_1_container}>
      <img className={style.img} src='src\assets\images\yoga_thum_1.jpg'></img>
      <div className={style.text_container}>
        <span className={style.text}>총 20분 | 초급</span>
      </div>
    </div>
  )
}

export default CoureCard1
