import IntroSection from './sections/IntroSection';
import PoseSection from './sections/PoseSection';
import VideoSection from './sections/VideoSection';

function Home() {
  return (
    <section>
      <IntroSection className="top-0" />
      <PoseSection />
      <VideoSection className="h-[300px]" />
    </section>
  );
}

export default Home;
