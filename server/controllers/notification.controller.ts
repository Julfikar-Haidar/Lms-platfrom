import { NextFunction, Request, Response } from "express";
import { CatchAsynchError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import NotificationModel from "../models/notificationModels";
import cron from "node-cron";
// get all the notifications --- only admin

export const getAllNotifications = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notification = await NotificationModel.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        notification,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// update all notifications --- only admin
export const updateNotifications = CatchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notification = await NotificationModel.findById(req.params.id);
      if (!notification) {
        return next(new ErrorHandler("No notification found", 400));
      } else {
        notification.status
          ? (notification.status = "read")
          : notification.status;
      }

      await notification.save();
      const notifications = await NotificationModel.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        notifications,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

cron.schedule("0 0 0  * * *", async () => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  await NotificationModel.deleteMany({
    status: "read",
    createdAt: { $lt: thirtyDaysAgo },
  });
  console.log("---Deleted read notification--");
});
