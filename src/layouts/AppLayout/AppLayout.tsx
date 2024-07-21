import AppHeader from 'components/custom/AppHeader';
import Billboard from 'components/custom/Billboard';
import Slider from 'components/custom/Slider';

import './AppLayout.scss';

const sliderData = Array.from({ length: 20 }, (_, index) => ({
    id: `vid-${index}`,
    videoId: 'abmsniEmfh0',
    title: `Test video ${index + 1}`,
    thumbnail: `https://picsum.photos/200/300?random=${index + 1}`,
    tags: ['tag1', 'tag2', 'tag3'],
}));

const AppLayout = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <Billboard
                videoId="cgsmjYXs8m0"
                title="Purpose of Life"
                onPlay={() => {
                    // TODO: implement logic
                }}
                onShowMoreDetails={() => {
                    // TODO: implement logic
                }}
                onToggleVolume={() => {
                    // TODO: implement logic
                }}
            />
            <div style={{ height: '100vh', position: 'relative', zIndex: 20, marginTop: '-190px' }}>
                <Slider title="Trending" videos={sliderData} totalCount={sliderData.length} />
            </div>
        </div>
    );
};

export default AppLayout;
