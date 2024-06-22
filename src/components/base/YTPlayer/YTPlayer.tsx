import { FC, useRef } from 'react';
import { PLAYER_DEFAULT, PLAYER_PARAMS } from 'core/base/consts/ytPlayer';
import { VideoParams } from 'core/base/types/ytPlayer';

import './YTPlayer.scss';

const generateSrc = (
    videoId: string,
    {
        showControls,
        showRelatedVideos,
        startTime,
        endTime,
        autoplay,
        disableKeyboard,
        loop = false,
    }: VideoParams
) => {
    const {
        BASE_SRC,
        REL,
        CONTROLS,
        AUTOPLAY_ON_LOAD,
        START_TIME,
        END_TIME,
        DISABLE_KEYBOARD,
        LOOP,
    } = PLAYER_PARAMS;

    const { OFF, ON, START_AT, END_DURATION } = PLAYER_DEFAULT;

    const rel = showRelatedVideos ? ON : OFF;
    const controls = showControls ? ON : OFF;
    const autoplayVideo = autoplay ? ON : OFF;
    const start = startTime ?? START_AT;
    const end = endTime ?? END_DURATION;
    const shouldDisableKeyboard = disableKeyboard ? ON : OFF;
    const loopVideo = loop ? ON : OFF;

    return `${BASE_SRC}/${videoId}?${REL}=${rel}&${CONTROLS}=${controls}&${DISABLE_KEYBOARD}=${shouldDisableKeyboard}&${START_TIME}=${start}&${END_TIME}=${end}&${AUTOPLAY_ON_LOAD}=${autoplayVideo}&${LOOP}=${loopVideo}`.trim();
};

type YTPlayerProps = {
    className?: string;
    videoId: string;
    title: string;
    playerParams?: VideoParams;
    onPlay?: () => void;
    onPause?: () => void;
    onVolumeChange?: (volume: number) => void;
    onMute?: () => void;
    onUnmute?: () => void;
    onSeek?: (moment: number) => void;
    onForward10s?: () => void;
    onRewind10s?: () => void;
    onSpeedChange?: (speed: number) => void;
    onShowFullscreen?: () => void;
    onExitFullscreen?: () => void;
    onReady?: () => void;
    onEnded?: () => void;
};

const YTPlayer: FC<YTPlayerProps> = ({ className = '', videoId, title, playerParams = {} }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleOnLoad = () => {
        // TODO: Research on this and fix this
        // if (iframeRef.current) console.log('$$$YT-Load =>', iframeRef.current.contentDocument);
    };

    return (
        <div className={`yt-player ${className}`.trim()}>
            <iframe
                className="yt-player__iframe"
                ref={iframeRef}
                src={generateSrc(videoId, playerParams)}
                aria-label={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen={!!playerParams.allowFullScreen}
                onLoad={handleOnLoad}
            />
        </div>
    );
};

export default YTPlayer;
