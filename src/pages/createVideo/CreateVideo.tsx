import React from 'react';
import PoseSelectSection from './sections/PoseSelectSection';
import AddedPoseListSection from './sections/AddedPoseListSection';
import MusicSelectSection from './sections/MusicSelectSection';
import TimeSelectSection from './sections/TimeSelectSection';
import VideoCreateButton from '../../components/buttons/VideoCreateButton';
import PageHeader from '../../components/layout/PageHeader';

function CreateVideo() {
  return (
    <div>
      <PageHeader
        imgsrc={'/pageHeaderBackgound/createvideo_background2.jpg'}
        value={'CREATE VIDEO'}
      />
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
