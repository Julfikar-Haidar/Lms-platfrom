import exprees from "express";
import {
  acivateUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const userRouter = exprees.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", acivateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-all-users",
  isAuthenticated,
  authorizeRole("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user-role",
  isAuthenticated,
  authorizeRole("admin"),
  updateUserRole
);

export default userRouter;
