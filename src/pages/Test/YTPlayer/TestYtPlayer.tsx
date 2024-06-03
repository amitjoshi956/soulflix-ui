import { MdAutoMode } from 'react-icons/md';
import YTPlayer from 'components/base/YTPlayer';
import MovieCard from 'components/custom/MovieCard';
import Button from 'components/base/Button';

import './TestYtPlayer.scss';
const TestYtPlayer = () => {
    return (
        <>
            <div className="test-yt-player">
                <YTPlayer
                    videoId={'abmsniEmfh0'}
                    title={'Srila Prabhupada Interview - San Francisco'}
                />
            </div>
            <div className="test-movie-card">
                <MovieCard />
            </div>
        </>
    );
};

export default TestYtPlayer;
