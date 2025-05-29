import React from 'react';

function TimeCard({ value }) {
  return (
    <div className="flex justify-center items-center text-center rounded-xl bg-stone-200/60 text-stone-500 hover:bg-stone-700/60 hover:text-stone-200">
      <p className="text-sm  md:text-xl font-semibold px-2 sm:py-1 md:py-3">
        {value}
      </p>
    </div>
  );
}
export default TimeCard;
