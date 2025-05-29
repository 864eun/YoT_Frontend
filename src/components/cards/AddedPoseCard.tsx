import React from 'react';
import { IoClose } from 'react-icons/io5';

function AddedPoseCard(props) {
  return (
    <div className="flex shadow-sm  flex-col w-23 md:w-35 lg:w-45 aspect-[4/5] bg-stone-50 rounded-2xl items-center gap-2">
      <div className="relative">
        <div className="relative aspect-square overflow-hidden border-b-stone-300">
          <img
            src="public/boat.png"
            alt="보트자세"
            className="w-full h-full object-contain"
          />
          <button className="absolute top-2 right-2 px-1 py-1 hover:bg-stone-300 rounded-full">
            <IoClose />
          </button>
        </div>
      </div>
      <p className="text-center font-semibold">자세이름</p>
    </div>
  );
}

export default AddedPoseCard;
