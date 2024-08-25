import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './IdleScreen.scss';

type IdleScreenProps = {
    title: string;
    description: string;
    remainingTime?: number;
    episodeName?: string;
    episodeNumber?: number;
    addedDate?: Date;
};

const IdleScreen: FC<IdleScreenProps> = ({
    title,
    description,
    remainingTime,
    episodeName,
    episodeNumber,
    addedDate,
}) => {
    const { t } = useTranslation(['nowWatching']);

    const isSeries = Boolean(episodeName && episodeNumber);

    const SecondaryInfo = () => {
        return isSeries ? (
            <span className="idle-screen__episode">{`${episodeName}: ${episodeNumber}`}</span>
        ) : (
            <div className="idle-screen__secondary-info">
                <span className="idle-screen__added-date">{addedDate?.getFullYear()}</span>
                <span className="idle-screen__remaining-time">
                    {`${remainingTime} ${t('remaining')}`}
                </span>
            </div>
        );
    };

    return (
        <div className="idle-screen">
            <div className="idle-screen__content">
                <span className="idle-screen__you-are-watching">{t('youreWatching')}</span>
                <h1 className="idle-screen__title">{title}</h1>
                <SecondaryInfo />
                <p className="idle-screen__description">{description}</p>
            </div>
        </div>
    );
};

export default IdleScreen;
