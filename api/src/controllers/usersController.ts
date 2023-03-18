import { Request, Response } from 'express';
import { User } from '../models';
import { getUsers, getUser, addUser, db } from '../services/firestoreService';


const vendorsCollection = db.collection('vendors');
const consumersCollection = db.collection('consumers');

export const signUpUser = async (req: Request, res: Response) => {
    const { name, email, password, roles, address } = req.body;

    // Validate input data
    if (!name || !email || !password || !roles) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    try {
        // Create user in Firestore
        const newUser: User = { name, email, roles, address, id:'' };
        const addedUser = await addUser(newUser);

        // Create vendor or consumer document based on user role
        if (roles.includes('vendor')) {
            await vendorsCollection.doc(addedUser.id).set({ name });
        } else {
            await consumersCollection.doc(addedUser.id).set({ name });
        }

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await getUsers();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const user = await getUser(userId);

        // If the user doesn't exist, return a 404 error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user data
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user' });
    }
};