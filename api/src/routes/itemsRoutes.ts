import express from 'express';
import { getItems, addItem } from '../controllers/itemsController';

const router = express.Router();

// Define routes for /items
router.get('/', getItems);
router.post('/', addItem);

export default router;