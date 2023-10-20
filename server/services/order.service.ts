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

// get all orders
export const getAllOrderService = async (res: Response) => {
  const order = await OrderModel.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    order,
  });
};
