import express from 'express';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Create Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start server
app.listen(8000, () => {
    console.log('Server started on port 8000');
});