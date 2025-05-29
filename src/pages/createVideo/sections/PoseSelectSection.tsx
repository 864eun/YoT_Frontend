import React from 'react';
import PoseCard2 from '../../../components/card/PoseCard2';

function PoseSelectSection(props) {
  const levelItems = [
    { id: 'All', value: 'All' },
    { id: 'beginner', value: 'Beginner' },
    { id: 'intermediate', value: 'Intermediate' },
    { id: 'advanced', value: 'Advanced' },
  ];

  return (
    <section className="">
      <div className="flex flex-col">
        <span className="text-[12px] md:text-sm text-stone-500">
          원하는 자세를 골라주세요.
        </span>
        <div className="flex flex-col space-y-5 md:flex-row md:items-center md:justify-between mb-9 ">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            POSE
          </h2>
          <nav className="flex gap-3">
            {levelItems.map(item => (
              <button
                key={item.id}
                className="px-3 py-1 text-sm md:text-xl md:px-6 md:py-2 rounded-full text-stone-400 bg-stone-100 hover:bg-stone-700 duration-200 transition-colors font-bold"
              >
                {item.value}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="w-[92%]  mb-8 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <PoseCard2 />
          <PoseCard2 />
          <PoseCard2 />
          <PoseCard2 />
          <PoseCard2 />
        </div>
        <div className="flex justify-center">
          <button className="px-3 py-1 font-semibold text-stone-700  rounded-2xl  bg-stone-300 hover:bg-stone-700 hover:text-stone-200 focus:hover:bg-stone-700">
            1 2 3
          </button>
        </div>
      </div>
    </section>
  );
}

export default PoseSelectSection;
