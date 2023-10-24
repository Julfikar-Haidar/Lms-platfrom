import { NextFunction, Request, Response } from "express";
import { CatchAsynchError } from "../middleware/catchAsyncError";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { generateLast12MonthData } from "../utils/analytics.generator";
import CourseModel from "../models/course.module";
import OrderModel from "../models/orderModels";

// get user analytics -- only for admin
export const getUserAnalytics = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await generateLast12MonthData(userModel);
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get courses analytics -- only for admin
export const getCoursesAnalytics = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courses = await generateLast12MonthData(CourseModel);
      res.status(200).json({
        success: true,
        courses,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get order analytics -- only for admin
export const getOrderAnalytics = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await generateLast12MonthData(OrderModel);
      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
