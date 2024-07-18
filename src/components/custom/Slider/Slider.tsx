import { FC, useRef, useState } from 'react';
import { SliderDirection } from 'core/base/consts/slider';
import { Video } from 'core/base/types/videos';
import SliderCard from 'components/custom/SliderCard';
import SliderHeader from './SliderHeader';
import SliderButton from './SliderButton';

import './Slider.scss';

// TODO: fix this type
type SliderVideo = Pick<Video, 'id' | 'videoId' | 'title' | 'thumbnail' | 'tags'>;

type SliderProps = {
    videos: SliderVideo[];
    title: string;
    totalCount: number;
};

const Slider: FC<SliderProps> = ({ videos, title, totalCount }) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const sliderRef = useRef<HTMLUListElement>(null);

    const showSlideLeft = sliderIndex !== 0;

    const handleSlide = (direction: number) => {
        if (sliderRef.current !== null) {
            setSliderIndex((prev) => {
                const newIndex = prev + direction;
                sliderRef.current?.style.setProperty('--slider-index', `${newIndex}`);
                return newIndex;
            });
        }
    };

    return (
        <section className="slider">
            <SliderHeader title={title} currentPage={sliderIndex} pageCount={totalCount} />
            <div className="slider__carousel">
                {showSlideLeft && (
                    <SliderButton
                        direction="left"
                        onClick={() => handleSlide(SliderDirection.LEFT)}
                    />
                )}
                <div className="slider__mask">
                    <ul className="slider__list" ref={sliderRef}>
                        {videos.map(({ id, videoId, title, thumbnail, tags }) => (
                            <li key={id} className="slider__list-item">
                                <SliderCard
                                    className="slider__media-card"
                                    videoId={videoId}
                                    title={title}
                                    thumbnail={thumbnail}
                                    tags={tags}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <SliderButton
                    direction="right"
                    onClick={() => handleSlide(SliderDirection.RIGHT)}
                />
            </div>
        </section>
    );
};

export default Slider;
