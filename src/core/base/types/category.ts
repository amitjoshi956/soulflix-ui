import { VideoBasics } from './videos';

export type Category = {
    id: string;
    title: string;
    items: VideoBasics[];
    description?: string;
    showOnLandingPage?: boolean;
};
