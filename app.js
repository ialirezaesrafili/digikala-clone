const express = require('express');
const { initDataBase } = require('./config/models.initial');
require('dotenv').config();



async function main() {
    const app = express();
    const port = process.env.PORT || 3000;

    
    // Middleware to parse incoming requests
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); 

    await initDataBase();
    // 404 Route Handling
    app.use((req, res, next) => {
        return res.status(404).json({
            message: 'Route not found'
        });
    });

    // Global Error Handling Middleware
    app.use((err, req, res, next) => {
        const status = err?.status ?? 500;
        const message = err?.message ?? 'INTERNAL SERVER ERROR';
        return res.status(status).json({ message });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}`);
    });
}

main();
