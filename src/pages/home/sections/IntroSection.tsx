import React from 'react';

function IntroSection(props) {
  return (
    <section className="relative max-w-screen-2xl flex items-center justify-center h-screen overflow-hidden mx-auto">
      {/* 비디오 백그라운드 */}
      <video
        className="absolute md:h-[1000px] z-10 w-auto min-w-full min-h-full  object-cover"
        src="/home_background_2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative px-3 w-[90%] border-b-1 z-30 bg-opacity-40  text-center text-stone-200">
        <h2 className="text-left text-2xl font-bold mb-4">
          어디에서나, 나만의 요가 선생님
        </h2>
        <div className="flex flex-col justify-start gap-20 md:flex-row md:items-center mb-2 md:justify-between">
          <p className="mb-2 text-regular text-left">
            좋아하는 요가 자세를 선택하고,
            <br />
            맞춤형 요가 영상을 만들어보세요
          </p>
          <button
            className="
            self-start ml-[-10px] md:ml-0 text-center rounded-xl text-3xl px-4 py-1.5 font-semibold hover:bg-stone-400 md:self-center transition duration-300 ease-in-out"
          >
            create video
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
