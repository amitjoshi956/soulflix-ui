export type Video = {
    id: string;
    videoId: string;
    title: string;
    channelId: string;
    runtime: number;
    description?: string;
    thumbnail: string;
    uploadDate: Date;
    releaseDate: Date;
    categories: string[];
    views: number;
    likes: number;
    startTime?: number;
    endTime?: number;
    tags: string[];
};

export type SliderVideo = Pick<Video, 'id' | 'videoId' | 'title' | 'thumbnail' | 'tags'>;
