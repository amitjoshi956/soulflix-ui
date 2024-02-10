import { GenericState } from '.';
import { Playlist } from './playlists';
import { Video } from './videos';

export type LandingPageCategoryData = {
    id: string;
    title: string;
    videos: Video[];
    playlists: Playlist[];
    totalCount: number;
};

export type LandingPageCategory = GenericState<LandingPageCategoryData>;

export type LandingPageData = {
    categories: LandingPageCategory[];
    totalCount: number;
};

export type LandingPageState = GenericState<LandingPageData>;
