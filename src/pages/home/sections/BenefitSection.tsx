import React from 'react';
import BenefitCard from '../../../components/card/BenefitCard';

function BenefitSection(props) {
  return (
    <section className="px-3 py-6">
      <div>왜 좋나요</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </div>
    </section>
  );
}

export default BenefitSection;
