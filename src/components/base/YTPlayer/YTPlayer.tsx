import { FC } from 'react';
import { PLAYER_PARAMS } from 'core/base/consts/ytPlayer';

import './YTPlayer.scss';

type YTPlayerProps = {
    videoId: string;
    title: string;
};

const generateSrc = (videoId: string, showRelatedVideos?: boolean, showControls?: boolean) => {
    const { BASE_SRC, REL, CONTROLS } = PLAYER_PARAMS;
    const rel = showRelatedVideos ? '1' : '0';
    const controls = showControls ? '1' : '0';

    return `${BASE_SRC}/${videoId}?${REL}=${rel}&${CONTROLS}=${controls}`;
};

const YTPlayer: FC<YTPlayerProps> = ({ videoId, title }) => {
    return (
        <div className="yt-player">
            <iframe
                className="yt-player__embedded-player"
                src={generateSrc(videoId)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
            />
        </div>
    );
};

export default YTPlayer;
