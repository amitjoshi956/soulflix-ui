import { FC } from 'react';
import { Category } from 'core/base/types/category';
import Billboard from 'components/custom/Billboard';
import Slider from 'components/custom/Slider';

import './Page.scss';

type PageProps = {
    className?: string;
    videoId: string;
    videoTitle: string;
    startTime?: number;
    categories: Category[];
    onPlayBillboardVideo: () => void;
    onShowMoreDetails: () => void;
    onToggleVolume: () => void;
};

const Page: FC<PageProps> = ({
    className = '',
    videoId,
    videoTitle,
    startTime,
    categories,
    onPlayBillboardVideo,
    onShowMoreDetails,
    onToggleVolume,
}) => {
    return (
        <div className={`page ${className}`.trim()}>
            <Billboard
                videoId={videoId}
                title={videoTitle}
                startTime={startTime}
                onPlay={onPlayBillboardVideo}
                onShowMoreDetails={onShowMoreDetails}
                onToggleVolume={onToggleVolume}
            />
            <div className="page__sliders-container">
                {categories.map(({ id, title, items }) => (
                    <Slider
                        key={id}
                        className="page__slider"
                        title={title}
                        videos={items}
                        totalCount={items.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
