import React from 'react';

function VideoPoseListCard(props) {
  return (
    <div className="w-full flex flex-col  md:h-[500px] rounded-xl shadow-xl min-h-[200px]">
      <div className="px-5 py-6 text-xl font-semibold border-b border-b-stone-300">
        <h3>Pose Sequence</h3>
      </div>
      <div className="flex-1 px-5 py-3">
        <p className="">포즈 순서</p>
      </div>
    </div>
  );
}

export default VideoPoseListCard;
