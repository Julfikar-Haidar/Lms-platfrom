import exprees from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  getAllNotifications,
  updateNotifications,
} from "../controllers/notification.controller";

const notificationRoute = exprees.Router();

notificationRoute.get(
  "/get-all-notification",
  isAuthenticated,
  authorizeRole("admin"),
  getAllNotifications
);
notificationRoute.put(
  "/update-notification/:id",
  isAuthenticated,
  authorizeRole("admin"),
  updateNotifications
);

export default notificationRoute;
