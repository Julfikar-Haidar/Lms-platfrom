import exprees from "express";
import { createOrder, getAllOrder } from "../controllers/order.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";

const orderRouter = exprees.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get(
  "/get-all-orders",
  isAuthenticated,
  authorizeRole("admin"),
  getAllOrder
);

export default orderRouter;
