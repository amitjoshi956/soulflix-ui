import { QueryConstraint, query } from 'firebase/firestore';
import { Video } from 'core/base/types/videos';
import { DatabaseService } from './DatabaseService';

export class VideoService extends DatabaseService {
    constructor() {
        super('videos');
    }

    public async getVideoById(id: string) {
        return await super.getDocById<Video>(id);
    }

    public async getAllVideos(constraint?: QueryConstraint) {
        const q = constraint && query(this.collectionRef, constraint);
        return super.getAllDocs<Video>(q);
    }

    public async addVideo(data: Video) {
        return super.addDoc<Video>(data);
    }

    public async updateVideo(id: string, data: Partial<Video>) {
        return super.updateDoc<Partial<Video>>(id, data);
    }

    public async deleteVideo(id: string) {
        return super.deleteDoc(id);
    }
}
