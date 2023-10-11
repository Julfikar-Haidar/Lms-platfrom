import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { uploadCourse } from "../controllers/course.controller";

const courseRouter = express.Router();
courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);

export default courseRouter;
