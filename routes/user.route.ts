import exprees from "express";
import {
  acivateUser,
  loginUser,
  logoutUser,
  registrationUser,
} from "../controllers/user.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const userRouter = exprees.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", acivateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, logoutUser);

export default userRouter;
