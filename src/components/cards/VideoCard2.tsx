import React from 'react';

export default function VideoCard2() {
  return (
    <div className="w-full h-full bg-stone-200/50">
      <div className="w-[60%] aspect-[4/3] overflow-hidden ">
        <video
          className="w-full h-full object-fill "
          src="public\yoga_video.mp4"
        ></video>
      </div>
      <div className="bg-rose-100">
        <div></div>
      </div>
    </div>
  );
}
