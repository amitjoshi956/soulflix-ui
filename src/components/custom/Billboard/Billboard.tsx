import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PlayIcon, MoreInfoIcon, VolumeOffOutlineIcon, VolumeUpOutlineIcon } from 'assets/icons';
import { Routes } from 'core/base/consts/routes';
import { VideoParams } from 'core/base/types/ytPlayer';
import YTPlayer from 'components/base/YTPlayer';
import Button from 'components/base/Button';

import './Billboard.scss';

type BillboardProps = {
    videoId: string;
    title: string;
    startTime?: number;
    onPlay: () => void;
    onShowMoreDetails: () => void;
    onToggleVolume: () => void;
};

const Billboard: FC<BillboardProps> = ({
    videoId,
    title,
    startTime = 0,
    onPlay,
    onShowMoreDetails,
    onToggleVolume,
}) => {
    const { t } = useTranslation(['billboard']);
    const navigate = useNavigate();
    const [muted, setMuted] = useState(false);

    const volIcon = muted ? VolumeOffOutlineIcon : VolumeUpOutlineIcon;

    const PreviewParams: VideoParams = {
        autoplay: false, // TODO: Enable autoplay after YTPlayer is fixed
        showControls: false,
        showRelatedVideos: false,
        disableKeyboard: true,
        loop: true,
        startTime,
    };

    const handlePlay = () => {
        navigate(`${Routes.NOW_WATCHING}/${videoId}`);
        onPlay();
    };

    const handleShowMoreDetails = () => {
        // TODO: To be implemented
        onShowMoreDetails();
    };

    const handleToggleVolume = () => {
        setMuted((prev) => !prev);
        onToggleVolume();
    };

    return (
        <main className="billboard">
            <YTPlayer
                className="billboard__preview"
                videoId={videoId}
                title={title}
                playerParams={PreviewParams}
            />
            <div className="billboard__controls">
                <div className="billboard__controls-main">
                    <Button
                        className="billboard__control-play"
                        variant="default"
                        size="large"
                        Icon={PlayIcon}
                        label={t('button.play')}
                        onClick={handlePlay}
                    />
                    <Button
                        className="billboard__control-more"
                        variant="alt"
                        size="large"
                        Icon={MoreInfoIcon}
                        label={t('button.moreInfo')}
                        onClick={handleShowMoreDetails}
                    />
                </div>
                <div className="billboard__controls-secondary">
                    <Button
                        className="billboard__control-volume"
                        variant="round-outlined"
                        size="large"
                        Icon={volIcon}
                        onClick={handleToggleVolume}
                    />
                </div>
            </div>
        </main>
    );
};

export default Billboard;
