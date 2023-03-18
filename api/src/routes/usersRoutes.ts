import express from 'express';
import { signUpUser, getAllUsers, getUserById } from '../controllers/usersController';

const router = express.Router();

// Add a new user endpoint
router.post('/', signUpUser);

// Get all users endpoint
router.get('/', getAllUsers);

// Get all user by id
router.get('/:userId', getUserById);

export default router;