import { FiPlus } from 'react-icons/fi';

function BenefitCard(props) {
  return (
    <div className=" flex flex-col shadow-xl ">
      <div className="flex justify-center items-center pt-7 pb-1">
        <div className="w-[64px] h-[64px] flex justify-center items-center bg-stone-100 rounded-full">
          <FiPlus className="text-3xl" />
        </div>
      </div>
      <div className="px-7 py-5 ">
        <h3 className="text-xl font-semibold text-center mb-3">
          개인화된 연습
        </h3>
        <p className="px-10 text-sm text-stone-500 text-center">
          당신의 필요와 능력, 목표에 맞는 요가 시퀀스를 직접 만들어보세요.
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
