import { Request, Response } from 'express';
import { Item } from '../models';
import { getItems as getItemsFromFirestore, addItem as addItemToFirestore, db } from '../services/firestoreService';


export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getItemsFromFirestore();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving items' });
    }
};

export const getItemsByVendorId = async (req: Request, res: Response) => {
    const vendorId = req.params.vendorId;
    console.log(vendorId)

    try {
        const itemsRef = db.collection('items');
        const itemsSnapshot = await itemsRef.where('vendorId', '==', vendorId).get();

        // Map the query snapshot to an array of item objects
        const items: Item[] = [];
        itemsSnapshot.forEach(doc => {
            const itemData = doc.data() as Item;
            items.push({ ...itemData, id: doc.id, });
        });

        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching items' });
    }
}

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

export const addItems = async (req: Request, res: Response) => {
    const { vendorId, items } = req.body as { vendorId: string, items: Item[] }

    try {
        const batch = db.batch();

        // Add each item to the batch
        items?.forEach(item => {
            const newItemRef = db.collection('items').doc();
            const newItem: Item = { ...item, id: newItemRef.id, vendorId: vendorId };
            batch.set(newItemRef, newItem);
        });

        // Commit the batch
        await batch.commit();

        res.status(201).json({ message: 'Items added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding items' });
    }
}