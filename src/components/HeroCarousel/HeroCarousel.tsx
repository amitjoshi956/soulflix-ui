import { FC, useRef } from 'react';
import { HeroCarouselItem } from 'core/base/type/hero-carousel';
import CarouselItem from './CarouselItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import './HeroCarousel.scss';

type HeroCarouselProps = {
    items: HeroCarouselItem[];
};
const HeroCarousel: FC<HeroCarouselProps> = ({ items }) => {
    const carouselRef = useRef<HTMLUListElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef && carouselRef.current) {
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        }
    };
    const handleScrollRight = () => {
        if (carouselRef && carouselRef.current) {
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    };

    return (
        <>
            <button
                className="hero-carousel__scroll-btn"
                onClick={handleScrollLeft}
            >
                <MdChevronLeft size={32} />
            </button>
            <ul className="hero-carousel" ref={carouselRef}>
                {items.map(({ id, title, description, imageUrl }) => (
                    <CarouselItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        description={description}
                    />
                ))}
            </ul>
            <button
                className="hero-carousel__scroll-btn right"
                onClick={handleScrollRight}
            >
                <MdChevronRight size={32} />
            </button>
        </>
    );
};

export default HeroCarousel;
