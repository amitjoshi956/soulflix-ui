import { FC, useMemo } from 'react';
import { SlidesPerPage } from 'core/base/consts/slider';

import './SliderHeader.scss';

type SliderHeaderProps = {
    title: string;
    currentPage: number;
    pageCount: number;
};

const SliderHeader: FC<SliderHeaderProps> = ({ title, pageCount, currentPage }) => {
    const sliderListsCount = Math.ceil(pageCount / SlidesPerPage.LAPTOP);
    const indicatorPages = useMemo(
        () => Array.from({ length: sliderListsCount }).fill(0),
        [pageCount]
    );

    return (
        <header className="slider-header">
            <h6 className="slider-header__title">{title}</h6>
            <ul className="slider-header__indicator">
                {indicatorPages.map((_, index) => (
                    <li
                        key={index}
                        className={`slider-header__indicator-item ${
                            index === currentPage ? 'slider-header__indicator-item--active' : ''
                        }`.trim()}
                    ></li>
                ))}
            </ul>
        </header>
    );
};

export default SliderHeader;
