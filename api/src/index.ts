import express from 'express';
import cors from 'cors';
import itemsRoutes from './routes/itemsRoutes';
import usersRoutes from './routes/usersRoutes';


// Create Express app
const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define routes for item manipulation
app.use('/items', itemsRoutes);
// Define routes for users
app.use('/users', usersRoutes);

// Start server
app.listen(8000, () => {
    console.log('Server started on port 8000');
});