import models from "../models/";
import jwt from "jsonwebtoken";
import PasswordHasher from "./password-hasher-service";

const { User } = models;

export default class UserService {
  constructor() {
    this.passwordHasher = new PasswordHasher();
  }

  async create(user) {
      user.password = await this.passwordHasher.hash(user.password);
      user = User.create(user);
      return this.generateAccessToken(user);
  }

  async findByEmail(email) {
      return await User.findOne({ where: {email} });
  }

  async signIn(email, password) {
      let user = await this.findByEmail(email);
      if (!user) {
          return null;
      }
      if (await this.passwordHasher.check(password, user.password)=== true) {
          return this.generateAccessToken(user);
      } else {
          return null;
      }
  }

  generateAccessToken(user) {
    if (!user) {
      throw new Error("invalid user");
    }
    let userInfo = user.toJSON();
    delete userInfo.password;
    let payload = {
      user: userInfo
    };
    const token = jwt.sign(payload, process.env.AUTH_SECRET, {
      algorithm: "HS256",
      issuer: process.env.TOKEN_ISSUER,
      subject: `${user.id}`
    });
    return token;
  }
}
