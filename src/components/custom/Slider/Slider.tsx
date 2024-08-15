import { FC, useRef, useState } from 'react';
import { SliderDirection, SlidesPerPage } from 'core/base/consts/slider';
import { VideoBasics } from 'core/base/types/videos';
import SliderCard from 'components/custom/SliderCard';
import SliderHeader from './SliderHeader';
import SliderButton from './SliderButton';

import './Slider.scss';

type SliderProps = {
    className?: string;
    videos: VideoBasics[];
    title: string;
    totalCount: number;
};

const Slider: FC<SliderProps> = ({ className = '', videos, title, totalCount }) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const [showSlideLeft, setShowSlideLeft] = useState<boolean>(false);
    const sliderRef = useRef<HTMLUListElement>(null);

    const showSlideRight = totalCount > SlidesPerPage.LAPTOP;
    const pageCount = Math.ceil(totalCount / SlidesPerPage.LAPTOP);

    const handleSlide = (direction: number) => {
        if (sliderRef.current !== null) {
            !showSlideLeft && setShowSlideLeft(true);
            setSliderIndex((prev) => {
                let newIndex = prev + direction;
                if (newIndex < 0) {
                    newIndex = pageCount - 1;
                } else if (newIndex >= pageCount) {
                    newIndex = 0;
                }

                sliderRef.current?.style.setProperty('--slider-index', `${newIndex}`);
                return newIndex;
            });
        }
    };

    return (
        <section className={`slider ${className}`.trim()}>
            <SliderHeader title={title} currentPage={sliderIndex} pageCount={pageCount} />
            <div className="slider__content">
                <div className="slider__slide-buttons">
                    {showSlideLeft && (
                        <SliderButton
                            direction="left"
                            onClick={() => handleSlide(SliderDirection.LEFT)}
                        />
                    )}
                    {showSlideRight && (
                        <SliderButton
                            direction="right"
                            onClick={() => handleSlide(SliderDirection.RIGHT)}
                        />
                    )}
                </div>
                <div className="slider__carousel">
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
                </div>
            </div>
        </section>
    );
};

export default Slider;
