import YTPlayer from 'components/base/YTPlayer';
import MovieCard from 'components/custom/MovieCard';

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
                <MovieCard
                    videoId="abmsniEmfh0"
                    title="Glories of Srila Gopal Bhatta Goswami"
                    thumbnail="https://www.mayapur.com/wp-content/uploads/2017/10/RNS-1024x576.jpg"
                    tags={['Pastimes', 'Philosophy', 'Gaudiya']}
                />
                <MovieCard
                    videoId="Gz59dGa6a9I"
                    title="Srimad Bhagavatam Class"
                    thumbnail="https://i.ytimg.com/vi/Gz59dGa6a9I/mqdefault.jpg"
                    tags={['Philosophy', 'Bhagavat', 'Gaudiya']}
                />
            </div>
        </>
    );
};

export default TestYtPlayer;
