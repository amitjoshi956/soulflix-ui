import { t } from 'i18next';
import { NavigationItem } from '../types/appHeader';
import { Routes } from './routes';

const getName = (key: string) => t(`appHeader.${key}`, { ns: 'common' });

export const NavigationConfig: NavigationItem[] = [
    {
        name: getName('home'),
        link: Routes.HOME,
    },
    {
        name: getName('movies'),
        link: Routes.MOVIES,
    },
    {
        name: getName('series'),
        link: Routes.SERIES,
    },
    {
        name: getName('podcasts'),
        link: Routes.PODCASTS,
    },
    {
        name: getName('watchlist'),
        link: Routes.WATCHLIST,
    },
    {
        name: 'Test',
        link: Routes.TEST,
    },
];
