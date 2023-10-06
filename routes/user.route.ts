import exprees from "express";
import {
  acivateUser,
  loginUser,
  logoutUser,
  registrationUser,
} from "../controllers/user.controller";
const userRouter = exprees.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", acivateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);

export default userRouter;
