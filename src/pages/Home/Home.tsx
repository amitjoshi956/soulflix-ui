import Page from 'components/custom/Page';
import { SliderVideo } from 'core/base/types/videos';
import { Category } from 'core/base/types/category';

import './Home.scss';

const sliderData: SliderVideo[] = Array.from({ length: 20 }, (_, index) => ({
    id: `vid-${index}`,
    videoId: 'abmsniEmfh0',
    title: `Test video ${index + 1}`,
    thumbnail: `https://picsum.photos/200/300?random=${index + 1}`,
    tags: ['tag1', 'tag2', 'tag3'],
}));

const categories: Category[] = Array.from({ length: 5 }, (_, index) => ({
    id: `dummy-cat-${index}`,
    title: `Trending now ${index + 1}`,
    items: index % 2 === 0 ? [sliderData[0], sliderData[1], sliderData[2]] : sliderData,
}));

const Home = () => {
    return (
        <Page
            className="home"
            videoId="abmsniEmfh0"
            videoTitle="Test video"
            categories={categories}
            onPlayBillboardVideo={() => {
                // TODO: implement logic
            }}
            onShowMoreDetails={() => {
                // TODO: implement logic
            }}
            onToggleVolume={() => {
                // TODO: implement logic
            }}
        />
    );
};

export default Home;
