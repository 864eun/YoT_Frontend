import style from './Section3.module.scss'

function Section3() {
  return (
    <section className={style.section_3_container}>
    <div className={style.section_3_title_contianer}>
      <h2>Notices</h2>
    </div>
    <div className={style.section_3_content_container}>
      <ul className={style.ul_container}>
        <li>로그인</li>
        <li>나만의 코스</li>
        <li>오늘의 코스</li>
        <li>캘린더</li>
        <li>공지</li>
        <li>문의하기</li>
      </ul>
    </div>
    <div className={style.section_3_buttom_container}></div>
  </section>
  )
}

export default Section3
