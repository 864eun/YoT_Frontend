import IntroSection from './sections/IntroSection';
import PoseSection from './sections/PoseSection';
import VideoSection from './sections/VideoSection';
import BenefitSection from './sections/BenefitSection';

function Home() {
  return (
    <section>
      <IntroSection className="top-0" />
      <PoseSection />
      <VideoSection className="h-[300px]" />
      <BenefitSection />
    </section>
  );
}

export default Home;
