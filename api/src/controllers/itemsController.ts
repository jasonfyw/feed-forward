import { Request, Response } from 'express';
import { Item } from '../models';
import { getItems as getItemsFromFirestore, addItem as addItemToFirestore } from '../services/firestoreService';


export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getItemsFromFirestore();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving items' });
    }
};

export const addItem = async (req: Request, res: Response) => {
    const { name, originalPrice, reducedPrice, description, image, vendorId } = req.body;

    if (!name || !name || !originalPrice || !reducedPrice || !description || !image || !vendorId) {
        return res.status(400).json({ message: 'Invalid item data' });
    }

    try {
        const newItem: Item = { name, originalPrice, reducedPrice, description, image, vendorId, id: '' };
        const docRef = await addItemToFirestore(newItem);
        newItem.id = docRef.id;
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding item' });
    }
};