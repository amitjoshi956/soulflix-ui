import { FC } from 'react';

import './FabButton.scss';

type FabButtonProps = {
    className?: string;
    disabled?: boolean;
    label?: string;
    icon?: string;
    onClick?: () => void;
};

const FabButton: FC<FabButtonProps> = ({
    label = '',
    icon,
    className,
    onClick,
}) => {
    return (
        <button className={`fab-button ${className}`} onClick={onClick}>
            {label || icon}
        </button>
    );
};

export default FabButton;
