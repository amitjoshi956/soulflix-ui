import YTPlayer from 'components/base/YTPlayer';

import './Test.scss';

const Test = () => {
    return (
        <div>
            <div className="nav-temp">
                <span>Soulflix</span>
            </div>
            <YTPlayer
                videoId={'abmsniEmfh0'}
                title={'Srila Prabhupada Interview - San Francisco'}
            />
        </div>
    );
};

export default Test;
