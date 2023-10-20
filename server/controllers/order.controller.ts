import ejs from "ejs";
import { NextFunction, Request, Response } from "express";
import { CatchAsynchError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import { IOrder } from "../models/orderModels";
import userModel from "../models/user.model";
import CourseModel from "../models/course.module";
import { getAllOrderService, newOrder } from "../services/order.service";
import path from "path";
import sendMail from "../utils/sendMail";
import NotificationModel from "../models/notificationModels";

// craeet order
export const createOrder = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, payment_info } = req.body as IOrder;

      const user = await userModel.findById(req.user?._id);
      console.log(user, "user", courseId);

      const courseExitsUser = user?.courses.some(
        (course: any) => course._id.toString() === courseId
      );

      if (courseExitsUser) {
        return next(
          new ErrorHandler("You have already purchased this course", 400)
        );
      }

      const course = await CourseModel.findById(courseId);
      if (!course) {
        return next(new ErrorHandler("Course not found", 400));
      }

      const data: any = {
        courseId: course._id,
        userId: user?._id,
        payment_info,
      };

      const mailData = {
        order: {
          _id: course._id.toString().slice(0, 6),
          name: course.name,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      };

      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/order-confirmation.ejs"),
        { order: mailData }
      );

      try {
        if (user) {
          await sendMail({
            email: user.email,
            subject: "Order confirmation",
            template: "order-confirmation.ejs",
            data: mailData,
          });
        }
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }
      user?.courses.push(course?._id);
      await user?.save();

      await NotificationModel.create({
        user: user?._id,
        title: "New Order",
        message: `You have a new order from ${course?.name}`,
      });
      // console.log("before", course.purchased);

      if (typeof course.purchased === "number") {
        course.purchased += 1;
      }
      // course.purchased ? (course.purchased += 1) : course.purchased;
      // console.log("course.purchased after", course.purchased);

      await course.save();

      newOrder(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get all order
export const getAllOrder = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllOrderService(res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
