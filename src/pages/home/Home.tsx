import style from "./Home.module.scss";
import Section1 from "../../components/common/sections/section1/Section1";
import Section2 from "../../components/common/sections/section2/Section2";
import Section3 from "../../components/common/sections/section3/Section3";

function Home() {
  return (
    <div className={style.home_container}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default Home;
