import Router from "express";
import asyncWrapper from "../utilities/async-wrapper";
import UsersService from "../services/user-service";
import validator from "../middleware/validator";
import AuthenticationError from "../errors/authentication-error";

const router = new Router();
const usersService = new UsersService();

router.post(
  "/sign-up",
  [validator("User", "default")],
  asyncWrapper(async (req, res) => {
    let token = await usersService.create(req.body);
    res.send(token);
  })
);

router.post(
  "/sign-in",
  [validator("User", "login")].asyncWrapper(async (req, res) => {
    let { email, password } = req.body;
    let token = await usersService.signIn(email, password);
    if (!token) {
        throw new AuthenticationError('Invalid Credentials');
    } else {
        res.send(token);    
    }
  })
);

export default router;
