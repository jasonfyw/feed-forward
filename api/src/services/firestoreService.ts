import * as admin from 'firebase-admin';
import { Item, User } from '../models';

// Initialize Firebase Admin SDK
const serviceAccount = require('../../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore()

export const auth = admin.auth();

/**
 * Items 
 */
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

/**
 * Users
 */
export const addUser = async (user: User) => {

    // Check if a user with the same email already exists
    const existingUser = await db.collection('users').where('email', '==', user.email).get();
    if (!existingUser.empty) {
        throw new Error('User with email already exists');
    }

    // Create a new user document with a unique ID
    const newUserRef = await db.collection('users').doc();
    const newUser = { ...user, id: newUserRef.id };
    await newUserRef.set(newUser);

    return newUser;
};

export const getUsers = async () => {
    const snapshot = await db.collection('users').get();
    const users: User[] = [];
    snapshot.forEach((doc) => {
        const user = doc.data() as User;
        user.id = doc.id;
        users.push(user);
    });
    return users;
};

export const getUser = async (userId: string): Promise<User | null> => {
    try {
        // Fetch the user document from Firestore
        const userDoc = await db.collection('users').doc(userId).get();

        // If the user document doesn't exist, return null
        if (!userDoc.exists) {
            return null;
        }

        // Return the user document data
        const userData = userDoc.data() as User;
        return { ...userData, id: userId };
    } catch (error) {
        console.error(error);
        return null;
    }
};