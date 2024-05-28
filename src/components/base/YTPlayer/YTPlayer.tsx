import { FC } from 'react';

import './YTPlayer.scss';

type YTPlayerProps = {
    videoId: string;
    title: string;
};

const YTPlayer: FC<YTPlayerProps> = ({ videoId, title }) => {
    return (
        <div className="youtube-player">
            <iframe
                className="youtube-player__embedded-player"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
            />
        </div>
    );
};

export default YTPlayer;
