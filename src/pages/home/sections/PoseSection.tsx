import PoseCard from '../../../components/card/PoseCard';

function PoseSection(props) {
  return (
    <section>
      <div>
        <h2>Today's Recommended Poses</h2>
        <p>
          하루를 시작할 때, 몸에 활력을 주고 마음을 차분하게 해주는 이 선택된
          요가 자세들로 시작해 보세요.
        </p>
      </div>
      <div>
        <div>
          <h3>Daily Recommendations</h3>
        </div>
        <PoseCard
          imageUrl="public\boat.png"
          title="Mountain Pose"
          subTitle="Tadasana"
          description="The foundation of all standing poses, Mountain Pose helps improve..."
          onAdd={() => alert('추가!')}
        />
      </div>{' '}
    </section>
  );
}

export default PoseSection;
