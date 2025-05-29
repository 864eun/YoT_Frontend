import React from 'react';
import VideoPoseListCard from '../../../components/cards/VideoPoseListCard';
import VideoCard from '../../../components/cards/VideoCard';

function VideoSection(props) {
  return (
    <section className="bg-stone-100 px-10 py-15 ">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">Popular videos</h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-[1fr_0.6fr]  gap-4">
        <VideoCard className="" />
        <VideoPoseListCard className="" />
      </div>
    </section>
  );
}

export default VideoSection;
