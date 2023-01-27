import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { sequelize } from './db.js';
import { User, Basket, Order, Favorites, BasketProduct, OrderProduct, FavoritesProduct, Product, ProductInfo, Type } from './models/models.js';
import { router } from './routes/index.js';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Work!!!' })
});

const startApp = async () => {


    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

startApp();