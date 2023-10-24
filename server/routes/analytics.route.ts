import exprees from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  getCoursesAnalytics,
  getOrderAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";

const analyticsRouter = exprees.Router();

analyticsRouter.get(
  "/get-analytics-user",
  isAuthenticated,
  authorizeRole("admin"),
  getUserAnalytics
);
analyticsRouter.get(
  "/get-analytics-courses",
  isAuthenticated,
  authorizeRole("admin"),
  getCoursesAnalytics
);
analyticsRouter.get(
  "/get-analytics-orders",
  isAuthenticated,
  authorizeRole("admin"),
  getOrderAnalytics
);

export default analyticsRouter;
