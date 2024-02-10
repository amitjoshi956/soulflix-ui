import { Video } from './videos';

export type Playlist = {
    id: string;
    playlistId: string;
    title: string;
    description: string;
    thumbnail: string;
    channelId: string;
    videos: Video[];
    uploadDate: Date;
};
