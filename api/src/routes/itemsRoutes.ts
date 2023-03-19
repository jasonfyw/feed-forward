import express from 'express';
import { getItems, addItem, addItems } from '../controllers/itemsController';

const router = express.Router();

// Define routes for /items
router.get('/', getItems);
router.post('/', addItem);
router.post('/batch', addItems);

export default router;