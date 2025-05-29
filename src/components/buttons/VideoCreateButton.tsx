import React from 'react';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';

function VideoCreateButton() {
  return (
    <button className="flex items-center justify-center w-2/3 md:w-2/3 lg:w-1/3 px-5 py-5 bg-stone-100 rounded-full shadow-md hover:bg-stone-200 transition">
      <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-3">
        <FiDownload className="text-red-500 text-2xl" />
      </span>
      <span className="font-medium text-normal md:text-lg text-stone-800">
        동영상 생성하기
      </span>
      <span className="ml-3">
        <FiArrowUpRight className="text-stone-500 text-xl" />
      </span>
    </button>
  );
}

export default VideoCreateButton;
