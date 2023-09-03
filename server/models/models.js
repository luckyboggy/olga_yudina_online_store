import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surename: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  addres: { type: DataTypes.JSON },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // user_id
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  time: { type: DataTypes.TIME },
  status: { type: DataTypes.STRING },
  // user_id
});

const Favorites = sequelize.define("favorites", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // user_id
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // basket_id
  // product_id
});

const OrderProduct = sequelize.define("order_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // basket_id
  // product_id
});

const FavoritesProduct = sequelize.define("favorites_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // basket_id
  // product_id
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.ARRAY(DataTypes.STRING) },
  description: { type: DataTypes.STRING },
  // type_id
});

const ProductInfo = sequelize.define("product_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  // product_id
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Collection = sequelize.define("collection", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Favorites);
Favorites.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Favorites.hasMany(FavoritesProduct);
FavoritesProduct.belongsTo(Favorites);

Product.hasMany(ProductInfo, { as: "info" });
ProductInfo.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

Product.hasMany(FavoritesProduct);
FavoritesProduct.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

Collection.hasMany(Product);
Product.belongsTo(Collection);

export {
  User,
  Basket,
  Order,
  Favorites,
  BasketProduct,
  OrderProduct,
  FavoritesProduct,
  Product,
  ProductInfo,
  Type,
  Collection,
};
