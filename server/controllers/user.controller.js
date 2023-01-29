import { ApiError } from "../error/ApiError.js";
import { User, Basket } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateJwt = (id, name, surename, email, phone, role) => {
  return jwt.sign(
    { id, name, surename, email, phone, role },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
};

class UserController {
  async registration(req, res, next) {
    const { name, surename, email, phone, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или пароль"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      name,
      surename,
      email,
      phone,
      role,
      password: hashPassword,
    });
    const basket = await Basket.create({ userId: user.id });

    const jsonWebToken = generateJwt(
      user.id,
      user.name,
      user.surename,
      user.email,
      user.phone,
      user.role
    );

    return res.json({ jsonWebToken });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким email не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      next(ApiError.internal("Неверный пароль"));
    }

    const jsonWebToken = generateJwt(user.id, user.email, user.role);
    return res.json({ jsonWebToken });
  }
  async check(req, res, next) {
    const jsonWebToken = generateJwt(
      req.user.id,
      req.user.email,
      req.user.role
    );
    return res.json({ jsonWebToken });
  }
}

const userController = new UserController();

export { userController };
