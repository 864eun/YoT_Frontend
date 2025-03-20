import style from './PoseCard.module.scss';

function PoseCard() {
  return (
    <div className={style.posecard_container}>
      <div className={style.top_section}>
        <img src='src\assets\images\boat.png' alt="Pose" className={style.pose_image} />
        <input type="checkbox" className={style.checkbox} />
      </div>
      <div className={style.bottom_section}>
        <p className={style.pose_name}>자세 이름</p>
      </div>
    </div>
  );
}

export default PoseCard;
