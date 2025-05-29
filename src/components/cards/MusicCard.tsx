import React from 'react';

function MusicCard(props) {
  return (
    <div className="flex flex-col shadow-sm">
      <div className="w-28 md:w-40 lg:w-50  aspect-square overflow-hidden rounded-xl shadow-md bg-stone-100">
        <img
          className="w-full h-full object-fill"
          src="public\backgroundMusic\모닥불.jpg"
        />
      </div>
      <div>모닥불 소리</div>
    </div>
  );
}

export default MusicCard;
