import { FC } from 'react';
import { IconType } from 'react-icons';

import './Button.scss';

type ButtonProps = {
    label?: string;
    classname?: string;
    variant: 'default' | 'alt' | 'outlined' | 'text' | 'round-filled' | 'round-outlined';
    iconPlacement?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    Icon?: IconType;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
    label = '',
    classname = '',
    variant,
    iconPlacement = 'left',
    size = 'medium',
    disabled = false,
    Icon,
    onClick,
}) => {
    const isNotRoundBtn = variant !== 'round-filled' && variant !== 'round-outlined';

    const btnContent = (
        <div className={`button__content button__content--icon-${iconPlacement}`}>
            {Icon && <Icon className={`button__icon button__icon--${size}`} />}
            {label && isNotRoundBtn && (
                <span className={`button__label button__label--${size}`}>{label}</span>
            )}
        </div>
    );

    return (
        <button
            className={`button button--${variant} ${classname}`.trim()}
            disabled={disabled}
            aria-label={`${label} button`}
            onClick={onClick}
        >
            {btnContent}
        </button>
    );
};

export default Button;
