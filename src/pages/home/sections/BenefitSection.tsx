import React from 'react';
import BenefitCard from '../../../components/card/BenefitCard';

function BenefitSection(props) {
  return (
    <section className="px-5 py-6">
      <div className="py-6 text-center">
        <h2 className="text-2xl mb-4 font-semibold text-stone-800">
          왜 맞춤형 영상을 만들어야 할까요?
        </h2>
        <p className="text-sm text-stone-500">
          나만을 위한 맞춤 영상으로 당신의 요가 여정을 더욱 특별하게
          만들어보세요.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </div>
    </section>
  );
}

export default BenefitSection;
