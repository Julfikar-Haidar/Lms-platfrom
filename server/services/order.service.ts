import { NextFunction, Response } from "express";
import { CatchAsynchError } from "../middleware/catchAsyncError";
import OrderModel from "../models/orderModels";

// create a new order
export const newOrder = CatchAsynchError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await OrderModel.create(data);

    res.status(201).json({
      success: true,
      order,
    });
  }
);
