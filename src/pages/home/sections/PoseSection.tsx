import PoseCard from '../../../components/cards/PoseCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function PoseSection(props) {
  return (
    <section className="text-stone-700  px-10 py-15 max-w-screen-2xl mx-auto">
      <div className="mb-15 text-center">
        <h2 className="text-4xl font-bold mb-4">Today's Recommended Poses</h2>
        <p className=" text-normal font-medium">
          몸에 활력을 주고 마음을 차분하게 해주는 오늘의 요가 자세들로 시작해
          보세요.
        </p>
      </div>
      <div>
        <div className="flex flex-row justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold">Daily Recommendations</h3>
          </div>
          <div className="hidden md:flex md:flex-row gap-3">
            <button className="px-3 py-2 md:border-1 rounded-xl hover:bg-stone-300 hover:text-stone-500 duration-200">
              <IoIosArrowBack className="text-2xl  " />
            </button>
            <button className="px-3 py-2 md:border-1 rounded-xl hover:bg-stone-300 hover:text-stone-500 duration-200">
              <IoIosArrowForward className="text-2xl " />
            </button>
          </div>
        </div>
        <PoseCard
          imageUrl="public\boat.png"
          title="Mountain Pose"
          subTitle="Tadasana"
          description="The foundation of all standing poses..."
          onAdd={() => alert('추가!')}
        />
      </div>{' '}
    </section>
  );
}

export default PoseSection;
