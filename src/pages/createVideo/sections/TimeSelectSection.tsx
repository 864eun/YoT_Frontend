import React from 'react';
import TimeCard from '../../../components/cards/TimeCard';

function TimeSelectSection(props) {
  const timeItems = [
    { id: 1, value: '20초' },
    { id: 2, value: '40초' },
    { id: 3, value: '1분' },
    { id: 4, value: '1분 30초' },
    { id: 5, value: '2분' },
  ];
  return (
    <section>
      <div className="mb-6">
        <span className="text-[12px] md:text-sm text-stone-500">
          자세 유지 시간을 선택해주세요.
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          TIME
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {timeItems.map(item => (
          <TimeCard key={item.id} value={item.value} />
        ))}
      </div>
    </section>
  );
}

export default TimeSelectSection;
