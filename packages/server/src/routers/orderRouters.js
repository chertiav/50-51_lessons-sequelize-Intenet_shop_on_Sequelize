import { Router } from "express";
//===============================
import orderControllers from "../controllers/orderControllers";

const orderRouter = new Router();

orderRouter.route('/')
	.get(orderControllers.getOrders)
	.post(orderControllers.createOrder)
	.put(orderControllers.updateOrder)

orderRouter.route('/:id')
	.get(orderControllers.getOneOrder)
	.patch(orderControllers.changeOrder)
	.delete(orderControllers.deleteOrder)

export default orderRouter;