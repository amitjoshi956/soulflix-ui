import {
    DocumentData,
    Query,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';
import { db } from 'config/firebase.config';

export class DatabaseService {
    collectionName: string;
    get collectionRef() {
        return collection(db, this.collectionName);
    }

    constructor(col: string) {
        this.collectionName = col;
    }

    public async getAllDocs<TDoc>(query?: Query): Promise<TDoc[]> {
        const source = query ? query : this.collectionRef;
        const querySnapshot = await getDocs(source);
        const fetchedDocs: TDoc[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as TDoc[];
        return fetchedDocs;
    }

    public async getDocById<TDoc>(id: string): Promise<TDoc> {
        const docRef = doc(db, this.collectionName, id);
        const docSnapshot = await getDoc(docRef);
        const fetchedDoc: TDoc = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
        } as TDoc;
        return fetchedDoc;
    }

    public async addDoc<TDoc extends DocumentData>(data: TDoc) {
        const docRef = await addDoc(this.collectionRef, data);
        const newDoc: TDoc = {
            id: docRef.id,
            ...data,
        };
        return newDoc;
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
