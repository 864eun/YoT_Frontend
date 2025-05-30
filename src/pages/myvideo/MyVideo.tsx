import PageHeader from '../../components/layout/PageHeader';
import MyVideoSection from './sections/MyVideoSection';

function MyVideo(props) {
  return (
    <div>
      <div>
        <PageHeader
          imgsrc={'/pageHeaderBackgound/myvideo_background2.jpg'}
          value={'MY VIDEO'}
        />
      </div>
      <div>
        <MyVideoSection />
      </div>
    </div>
  );
}

export default MyVideo;
