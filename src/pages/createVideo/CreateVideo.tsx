import React from 'react';
import PoseSelectSection from './sections/PoseSelectSection';
import AddedPoseListSection from './sections/AddedPoseListSection';
import MusicSelectSection from './sections/MusicSelectSection';
import TimeSelectSection from './sections/TimeSelectSection';
import VideoCreateButton from '../../components/buttons/VideoCreateButton';
import { motion } from 'framer-motion';

function CreateVideo() {
  return (
    <div>
      <div className="relative top-0 w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/createvideo_background2.jpg"
          alt="Create Video Background"
        />
        {/* 마스킹 효과를 위한 overflow-hidden */}
        <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 h-[160px] flex items-end overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-extrabold text-stone-100 text-8xl whitespace-nowrap"
          >
            CREATE VIDEO
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 px-8 py-9">
        <PoseSelectSection />
        <AddedPoseListSection />
        <MusicSelectSection />
        <TimeSelectSection />
      </div>
      <div>
        <VideoCreateButton />
      </div>
    </div>
  );
}

export default CreateVideo;
