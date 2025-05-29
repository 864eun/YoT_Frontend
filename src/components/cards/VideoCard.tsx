import React from 'react';
import { IoTimerOutline } from 'react-icons/io5';

function VideoCard(props) {
  return (
    <div className="w-full md:h-[500px] rounded-xl shadow-xl flex flex-col justify-between overflow-hidden">
      <div className="py-5 px-8 bg-stone-400 w-full flex justify-between items-center mx-auto">
        <div>
          <h3 className="text-2xl font-semibold ">title</h3>
        </div>
        <div>
          <span className="px-3 py-1 text-sm rounded-3xl bg-stone-200 font-semibold text-stone-600">
            5 poses
          </span>
        </div>
      </div>
      <div className="flex-1">
        <video />
      </div>
      <div className="bg-stone-300 flex flex-row justify-between px-8 py-3">
        <div className="flex flex-row justify-center items-center font-semibold">
          <IoTimerOutline className="mr-1 mt-[2px] text-xl " />
          20S
        </div>
        <button className="rounded-xl hover:bg-stone-500 hover:text-stone-400 duration-200 transition-colors font-semibold bg-stone-400 text-sm px-2 py-2">
          Save Video
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
