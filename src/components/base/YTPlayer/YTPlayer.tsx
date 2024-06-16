import { FC } from 'react';
import { PLAYER_PARAMS } from 'core/base/consts/ytPlayer';

import './YTPlayer.scss';

export type VideoParams = {
    startTime?: number;
    showRelatedVideos?: boolean;
    showControls?: boolean;
    autoplay?: boolean;
    allowFullScreen?: boolean;
};

const generateSrc = (
    videoId: string,
    { showControls, showRelatedVideos, startTime, autoplay }: VideoParams
) => {
    const { BASE_SRC, REL, CONTROLS, AUTOPLAY_ON_LOAD, START_TIME } = PLAYER_PARAMS;
    const rel = showRelatedVideos ? '1' : '0';
    const controls = showControls ? '1' : '0';
    const autoplayVideo = autoplay ? `&${AUTOPLAY_ON_LOAD}=1` : '';
    const start = startTime ? `;${START_TIME}=${startTime}` : '0';

    return `${BASE_SRC}/${videoId}?${REL}=${rel}&${CONTROLS}=${controls}${autoplayVideo}${start}`;
};

type YTPlayerProps = {
    className?: string;
    videoId: string;
    title: string;
    playerParams?: VideoParams;
};

const YTPlayer: FC<YTPlayerProps> = ({ className = '', videoId, title, playerParams = {} }) => {
    return (
        <div className={`yt-player ${className}`.trim()}>
            <iframe
                className="yt-player__iframe"
                src={generateSrc(videoId, playerParams)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen={!!playerParams.allowFullScreen}
            />
        </div>
    );
};

export default YTPlayer;
