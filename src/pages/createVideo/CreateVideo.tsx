import React from 'react';
import PoseSelectSection from './sections/PoseSelectSection';
import AddedPoseListSection from './sections/AddedPoseListSection';
import MusicSelectSection from './sections/MusicSelectSection';
import TimeSelectSection from './sections/TimeSelectSection';

function CreateVideo() {
  return (
    <div>
      <div className="relative top-0 w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/createvideo_background2.jpg"
          alt="Create Video Background"
        />
        <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-extrabold text-stone-100 text-8xl  whitespace-nowrap">
            CREATE VIDEO
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 px-8 py-9">
        <PoseSelectSection />
        <AddedPoseListSection />
        <MusicSelectSection />
        <TimeSelectSection />
      </div>
    </div>
  );
}

export default CreateVideo;
