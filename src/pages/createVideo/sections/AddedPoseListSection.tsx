import React from 'react';
import AddedPoseCard from '../../../components/card/AddedPoseCard';

function AddedPoseListSection(props) {
  return (
    <section>
      <div className="mb-6">
        <span className="text-[12px] md:text-sm text-stone-500">
          자세를 확인해주세요
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          POSE LIST
        </h2>
      </div>
      <div className="w-[100%] px-5 py-5 mx-auto bg-stone-200 rounded-sm">
        <AddedPoseCard />
      </div>
    </section>
  );
}

export default AddedPoseListSection;
