import style from './Section3.module.scss'
import MoreButton from '../../buttons/morebutton/MoreButton'

function Section3() {
  return (
    <section className={style.section_3_container}>
    <div className={style.title_contianer}>
      <h2>Notices</h2>
    </div>
    <div className={style.content_container}>
      <ul className={style.ul_container}>
        <li>로그인</li>
      </ul>
    </div>
    <div className={style.section_3_buttom_container}>
    <MoreButton/>
    </div>
  </section>
  )
}

export default Section3
