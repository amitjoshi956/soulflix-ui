import { FC } from 'react';
import { IconType } from 'react-icons';

import './Button.scss';

type ButtonProps = {
    label?: string;
    classname?: string;
    variant: 'default' | 'outlined' | 'text' | 'round';
    iconPlacement?: 'left' | 'right';
    Icon?: IconType;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
    label,
    classname = '',
    variant,
    iconPlacement = 'left',
    Icon,
    onClick,
}) => {
    const btnContent = (
        <div className={`button__content button__content--icon-${iconPlacement}`}>
            {Icon && <Icon className="button__icon" />}
            {label && variant !== 'round' && <span className="button__label">{label}</span>}
        </div>
    );

    return (
        <button
            className={`button button--${variant} ${classname}`}
            aria-label={`${label} button`}
            onClick={onClick}
        >
            {btnContent}
        </button>
    );
};

export default Button;
