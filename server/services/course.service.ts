import { Response } from "express";
import { CatchAsynchError } from "../middleware/catchAsyncError";
import CourseModel from "../models/course.module";

// create course
export const createCourse = CatchAsynchError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);
