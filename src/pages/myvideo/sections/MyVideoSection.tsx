import React from 'react';
import VideoCard2 from '../../../components/cards/VideoCard2';

function MyVideoSection(props) {
  return (
    <section>
      <div className="mb-6">
        <span className="text-[12px] md:text-base text-stone-500">
          맞춤 비디오를 확인하세요.
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          MY VIDEO
        </h2>
      </div>
      <div className="flex w-[92%] px-4 py-6 mx-auto">
        <VideoCard2 />
      </div>
    </section>
  );
}

export default MyVideoSection;
