import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'assets/icons';

import './SliderButton.scss';

type SliderButtonProps = {
    direction: 'left' | 'right';
    onClick: () => void;
};

const SliderButton: FC<SliderButtonProps> = ({ direction, onClick }) => {
    const btnIcon = direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />;
    return (
        <button className={`slider-button slider-button--${direction}`} onClick={onClick}>
            <span className="slider-button__icon">{btnIcon}</span>
        </button>
    );
};

export default SliderButton;
