import React from 'react';
import MusicCard from '../../../components/card/MusicCard';
function MusicSelectSection(props) {
  return (
    <section>
      <div className="mb-6">
        <span className="text-[12px] md:text-sm text-stone-500">
          원하는 배경 음악을 골라주세요.
        </span>
        <h2 className=" text-5xl md:text-7xl font-extrabold tracking-tight">
          MUSIC
        </h2>
      </div>
      <div className="w-[96%] md:w-[92%] mx-auto grid grid-cols-5 overflow-hidden">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </section>
  );
}

export default MusicSelectSection;
