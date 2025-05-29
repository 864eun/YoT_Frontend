function PoseCard2() {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-md bg-stone-100 relative group">
        <img
          src="public/boat.png"
          alt="그레이라떼"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-stone-100/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 gap-1 text-center">
          <div className="text-lg md:text-xl font-bold text-stone-800">
            보트자세
          </div>
          <div className="text-sm md:text-base text-stone-700 mb-3">
            복부와 다리를 사용하는 전신 운동입니다.
          </div>
          <div className="text-xs md:text-sm text-stone-600">
            이완 신체: 복부, 허벅지
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="mt-2 md:mt-4 text-base md:text-lg font-bold text-stone-800">
            보트자세
          </div>
          <div className="text-xs md:text-base text-stone-600 font-medium tracking-wider">
            boat
          </div>
        </div>
        <div>
          <button className="px-2 py-1 text-xs md:px-3 md:py-1 md:text-base font-semibold text-stone-700 rounded-2xl bg-stone-300 md:right-5 md:top-4 hover:bg-stone-700 hover:text-stone-200">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default PoseCard2;
