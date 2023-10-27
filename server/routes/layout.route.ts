import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  createdLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRole("admin"),
  createdLayout
);
layoutRouter.put(
  "/edit-layout",
  isAuthenticated,
  authorizeRole("admin"),
  editLayout
);
layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
