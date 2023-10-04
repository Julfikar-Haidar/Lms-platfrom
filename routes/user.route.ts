import exprees from "express";
import { acivateUser, registrationUser } from "../controllers/user.controller";
const userRouter = exprees.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", acivateUser);

export default userRouter;
