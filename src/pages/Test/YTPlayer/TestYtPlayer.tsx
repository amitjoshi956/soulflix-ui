import YTPlayer from 'components/base/YTPlayer';

import './TestYtPlayer.scss';
const TestYtPlayer = () => {
    return (
        <div className="test-yt-player">
            <YTPlayer
                videoId={'abmsniEmfh0'}
                title={'Srila Prabhupada Interview - San Francisco'}
            />
        </div>
    );
};

export default TestYtPlayer;
