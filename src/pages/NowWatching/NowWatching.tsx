import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'core/base/consts/routes';
import { NowWatchingVideo } from 'core/base/types/videos';
import { BackArrowIcon } from 'assets/icons';
import Button from 'components/base/Button';
import YTPlayer from 'components/base/YTPlayer';

import './NowWatching.scss';

const NowWatching: FC = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const { videoId, title, startTime, endTime } = state.video as NowWatchingVideo;

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
        </div>
    );
};

export default NowWatching;
