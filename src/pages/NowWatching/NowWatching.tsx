import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIdle } from 'common/hooks';
import { Routes } from 'core/base/consts/routes';
import { BackArrowIcon } from 'assets/icons';
import Button from 'components/base/Button';
import YTPlayer from 'components/base/YTPlayer';
import IdleScreen from './IdleScreen';

import './NowWatching.scss';

const IDLE_DURATION = 7000;

const NowWatching: FC = () => {
    const navigate = useNavigate();
    const { videoId = '' } = useParams<string>();
    const { isIdle } = useIdle(IDLE_DURATION);

    // TODO: to be fetched from API
    const { title, startTime, endTime, description, addedDate, remainingTime } = {
        title: 'Krishna: The Absolute Personality of Supereme Godhead',
        startTime: 0,
        endTime: 60,
        addedDate: new Date('10/10/2021'),
        remainingTime: 103041,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta nam minus dolore. Nostrum delectus quia harum nam facere, iure fugiat dolore amet at obcaecati libero, exercitationem velit hic cupiditate?',
    };

    const handleBackClick = () => {
        navigate(Routes.HOME);
    };

    return (
        <div className="now-watching">
            <div className="now-watching__actions">
                <Button
                    className="now-watching__go-back"
                    variant="text"
                    size="large"
                    Icon={BackArrowIcon}
                    onClick={handleBackClick}
                />
            </div>
            <YTPlayer
                className="now-watching__video-player"
                videoId={videoId}
                title={title}
                playerParams={{
                    allowFullScreen: true,
                    autoplay: true,
                    startTime,
                    endTime,
                }}
            />
            {isIdle && (
                <IdleScreen
                    title={title}
                    description={description}
                    addedDate={addedDate}
                    remainingTime={remainingTime}
                />
            )}
        </div>
    );
};

export default NowWatching;
