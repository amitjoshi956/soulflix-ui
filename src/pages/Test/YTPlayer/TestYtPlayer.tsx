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
            <div className="test-buttons">
                <Button variant="default" label="Default button" Icon={MdAutoMode} />
                <Button
                    variant="default"
                    label="Right icon button"
                    iconPlacement="right"
                    Icon={MdAutoMode}
                />
                <Button
                    variant="outlined"
                    label="Outlined button some really huge name for this button"
                />
                <Button variant="text" label="Text button" />
                <Button variant="round" label="Round button" Icon={MdAutoMode} />
            </div>
        </>
    );
};

export default TestYtPlayer;
