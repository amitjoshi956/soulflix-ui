import { where } from 'firebase/firestore';
import { Video } from 'core/base/types/videos';
import { VideoService } from 'core/service/VideosService';
import { GenericApiResponse } from 'core/base/types';

const videosService = new VideoService();
export class LandingPageService {
    public static async getLandingPageCategories(): Promise<GenericApiResponse<Video[]>> {
        // TODO: Make this dynamic based on lanidng page categories
        const queryConstraint = where('categories', 'array-contains', 'AIPxtMTTX3YFMOCcenf8');
        return await videosService.getAllVideos(queryConstraint);
    }
}
