import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

startApp();