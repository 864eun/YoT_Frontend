import style from './Section2.module.scss'

function Section2() {
  return (
    <section className={style.section_2_container}>
    <div className={style.title_contianer}>
      <h2>Today's Yoga Course</h2>
      <div>자동으로 추천된 오늘의 요가 코스입니다.</div>
    </div>
    <div className={style.content_container}></div>
    <div className={style.buttom_container}></div>
  </section>
  )
}

export default Section2
