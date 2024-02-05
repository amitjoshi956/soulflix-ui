import {
    DocumentData,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase.config';

export class DatabaseService {
    collectionName: string;

    constructor(col: string) {
        this.collectionName = col;
    }

    public async getAllDocs() {
        const collectionRef = collection(db, this.collectionName);
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    }

    public async getDocById(id: string) {
        const docRef = doc(db, this.collectionName, id);
        const docSnapshot = await getDoc(docRef);
        return {
            id: docSnapshot.id,
            ...docSnapshot.data(),
        };
    }

    public async addDoc<T extends DocumentData>(data: T) {
        const collectionRef = collection(db, this.collectionName);
        const docRef = await addDoc(collectionRef, data);
        return {
            id: docRef.id,
            ...data,
        };
    }

    public async updateDoc<T extends DocumentData>(id: string, data: T) {
        const docRef = doc(db, this.collectionName, id);
        await updateDoc(docRef, data);
    }

    public async deleteDoc(id: string) {
        const docRef = doc(db, this.collectionName, id);
        await deleteDoc(docRef);
    }
}
