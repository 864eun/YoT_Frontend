import React from 'react';

export default function VideoCard2() {
  return (
    <div className="w-full h-full flex flex-row bg-stone-500/10 rounded-xl overflow-hidden">
      <div className="w-[60%] aspect-[4/3] overflow-hidden ">
        <video
          className="w-full h-full object-fill "
          src="public\yoga_video.mp4"
        ></video>
      </div>
      <div className="px-9 py-9 flex flex-col gap-3">
        <div className=" flex flex-col gap-3">
          <h2 className="text-4xl font-semibold text-stone-700">
            동영상 타이틀
          </h2>
          <div className="flex gap-2 mb-3">
            <span className="border-[1.5px] rounded-2xl bg-stone-500 text-stone-200 px-3 py-1 font-semibold text-normal">
              10 poses
            </span>
            <span className="border-[1.5px] rounded-2xl  bg-stone-500 text-stone-200  px-3 py-1 font-semibold text-normal">
              20초
            </span>
          </div>
        </div>
        <div className="text-xl font-semibold  text-stone-600 flex flex-col gap-1">
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
          <p>보트 자세</p>
        </div>
      </div>
    </div>
  );
}
