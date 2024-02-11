import { Video } from './videos';

export type Category = {
    id: string;
    title: string;
    items: Video[];
    description?: string;
    showOnLandingPage?: boolean;
};
