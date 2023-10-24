import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createdLayout } from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRole("admin"),
  createdLayout
);

export default layoutRouter;
