import { FC, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounceFn } from 'common/hooks/useDebounce';
import { AddIcon, ArrowDownIcon, PlayIcon } from 'assets/icons';
import { Routes } from 'core/base/consts/routes';
import { PLAYER_DEFAULT } from 'core/base/consts/ytPlayer';
import Button from 'components/base/Button';
import YTPlayer from 'components/base/YTPlayer';

import './SliderCard.scss';

type SliderCardProps = {
    className?: string;
    videoId: string;
    startTime?: number;
    endTime?: number;
    title: string;
    thumbnail: string;
    tags: string[];
};

const SliderCard: FC<SliderCardProps> = ({
    className = '',
    videoId,
    startTime = PLAYER_DEFAULT.START_AT,
    endTime,
    title,
    thumbnail,
    tags,
}) => {
    const navigate = useNavigate();
    const [showFullPreview, setShowFullPreview] = useState<boolean>(false);
    const { debouncedFn } = useDebounceFn();

    const handleHoverChange = (e: MouseEvent<HTMLElement>, show: boolean) => {
        debouncedFn(() => {
            e.stopPropagation();
            showFullPreview !== show && setShowFullPreview(show);
        });
    };

    const handlePlay = () => {
        navigate(`${Routes.NOW_WATCHING}/${videoId}`);
    };

    const handleAddToMyList = () => {
        // TODO: Add video to my list logic
    };

    const handleShowMoreDetails = () => {
        // TODO: Show more details modal
    };

    return (
        <article
            className={`slider-card ${
                showFullPreview ? 'slider-card--hovered' : ''
            } ${className}`.trim()}
            onMouseOver={(e) => handleHoverChange(e, true)}
            onMouseLeave={(e) => handleHoverChange(e, false)}
        >
            <div className="slider-card__preview" onClick={handlePlay}>
                <img
                    className={`slider-card__thumbnail slider-card__thumbnail--${
                        !showFullPreview ? 'show' : 'hide'
                    }`}
                    src={thumbnail}
                    alt={title}
                />
                {showFullPreview && (
                    <YTPlayer
                        className={`slider-card__video slider-card__video--${
                            showFullPreview ? 'show' : 'hide'
                        }`}
                        videoId={videoId}
                        title={title}
                        playerParams={{
                            autoplay: true,
                            disableKeyboard: true,
                            startTime,
                            endTime: endTime ?? startTime + PLAYER_DEFAULT.END_DURATION,
                            loop: true,
                        }}
                    />
                )}
            </div>
            {showFullPreview && (
                <div className="slider-card__meta">
                    <p className="slider-card__title">{title}</p>
                    <div className="slider-card__controls">
                        <div className="slider-card__controls-left">
                            <Button
                                variant="round-filled"
                                size="medium"
                                label="Watch now"
                                Icon={PlayIcon}
                                onClick={handlePlay}
                            />
                            <Button
                                variant="round-outlined"
                                size="medium"
                                label="Add to watch list"
                                Icon={AddIcon}
                                onClick={handleAddToMyList}
                            />
                        </div>
                        <div className="slider-card__controls-right">
                            <Button
                                variant="round-outlined"
                                size="medium"
                                label="More details"
                                Icon={ArrowDownIcon}
                                onClick={handleShowMoreDetails}
                            />
                        </div>
                    </div>
                    <ul className="slider-card__tags">
                        {tags.slice(0, 3).map((tag) => (
                            <li className="slider-card__tag" key={tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
};

export default SliderCard;
