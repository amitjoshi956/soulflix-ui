import { NavigationItem } from 'core/base/types/appHeader';
import { Routes } from './routes';

export const NavigationConfig: NavigationItem[] = [
    {
        nameKey: 'home',
        link: Routes.HOME,
    },
    {
        nameKey: 'movies',
        link: Routes.MOVIES,
    },
    {
        nameKey: 'series',
        link: Routes.SERIES,
    },
    {
        nameKey: 'podcasts',
        link: Routes.PODCASTS,
    },
    {
        nameKey: 'watchlist',
        link: Routes.WATCHLIST,
    },
    {
        nameKey: 'test',
        link: Routes.TEST,
    },
];
