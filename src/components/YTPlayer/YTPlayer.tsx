import { FC } from "react";

import "./YTPlayer.scss";

type YoutubePlayerProps = {
  videoUrl: string;
  title: string;
  description: string;
};

const YTPlayer: FC<YoutubePlayerProps> = ({ videoUrl, title, description }) => {
  return (
    <div className="youtube-player">
      <iframe
        className="youtube-player__iframe"
        src={`${videoUrl}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3 className="youtube-player__title">{title}</h3>
      <p className="youtube-player__description">{description}</p>
    </div>
  );
};

export default YTPlayer;
