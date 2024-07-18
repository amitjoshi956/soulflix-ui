import Slider from 'components/custom/Slider';

import './TSlider.scss';

// create test data for slider component having 10 items
const sliderData = Array.from({ length: 20 }, (_, index) => ({
    id: `vid-${index}`,
    videoId: 'abmsniEmfh0',
    title: `Test video ${index + 1}`,
    thumbnail: `https://picsum.photos/200/300?random=${index + 1}`,
    tags: ['tag1', 'tag2', 'tag3'],
}));

const TSlider = () => {
    return (
        <div className="t-slider">
            <Slider videos={sliderData} title="Test Slider Category" totalCount={20} />
        </div>
    );
};

export default TSlider;
