import * as admin from 'firebase-admin';
import { Item } from '../models';

// Initialize Firebase Admin SDK
const serviceAccount = require('../../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore()

export const getItems = async () => {
    const snapshot = await db.collection('items').get();
    const items: Item[] = [];
    snapshot.forEach((doc) => {
        const item = doc.data() as Item;
        item.id = doc.id;
        items.push(item);
    });
    return items;
};

export const addItem = async (item: Item) => {
    const docRef = await db.collection('items').add(item);
    item.id = docRef.id;
    return item;
};

export const updateItem = async (id: string, updates: Partial<Item>) => {
    await db.collection('items').doc(id).update(updates);
    const item = await db.collection('items').doc(id).get();
    return { id: item.id, ...item.data() } as Item;
};

export const deleteItem = async (id: string) => {
    await db.collection('items').doc(id).delete();
};