import { FC, useCallback, useState, MouseEvent } from 'react';
import { AddIcon, ArrowDownIcon, PlayIcon } from 'assets/icons';
import Button from 'components/base/Button';
import YTPlayer from 'components/base/YTPlayer';

import './MovieCard.scss';

type MovieCardProps = {
    videoId: string;
    title: string;
    thumbnail: string;
    tags: string[];
};

const MovieCard: FC<MovieCardProps> = ({ videoId, title, thumbnail, tags }) => {
    const [showFullPreview, setShowFullPreview] = useState<boolean>(false);

    const handleOnHoverChange = useCallback((e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setShowFullPreview((prev) => !prev);
    }, []);

    const previewItem = showFullPreview ? (
        <YTPlayer
            className="movie-card__preview-video"
            videoId={videoId}
            title={title}
            playerParams={{ autoplay: true, allowFullScreen: false }}
        />
    ) : (
        <img className="movie-card__thumbnail" src={thumbnail} alt={title} />
    );

    return (
        <div
            className="movie-card"
            onMouseEnter={(e) => handleOnHoverChange(e)}
            onMouseLeave={(e) => handleOnHoverChange(e)}
        >
            <div className="movie-card__preview">{previewItem}</div>
            <div className="movie-card__meta">
                <p className="movie-card__title">{title}</p>
                <div className="movie-card__controls">
                    <div className="movie-card__controls-left">
                        <Button
                            variant="round-filled"
                            size="medium"
                            label="Watch now"
                            Icon={PlayIcon}
                        />
                        <Button
                            variant="round-outlined"
                            size="medium"
                            label="Add to watch list"
                            Icon={AddIcon}
                        />
                    </div>
                    <div className="movie-card__controls-right">
                        <Button
                            variant="round-outlined"
                            size="medium"
                            label="More details"
                            Icon={ArrowDownIcon}
                        />
                    </div>
                </div>
                <ul className="movie-card__tags">
                    {tags.slice(0, 3).map((tag) => (
                        <li className="movie-card__tag" key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieCard;
