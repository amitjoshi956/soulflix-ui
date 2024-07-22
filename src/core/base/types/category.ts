import { SliderVideo } from './videos';

export type Category = {
    id: string;
    title: string;
    items: SliderVideo[];
    description?: string;
    showOnLandingPage?: boolean;
};
