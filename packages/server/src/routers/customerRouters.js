import { Router } from "express";
//===============================
import customerControllers from "../controllers/customerControllers";

const customerRouter = new Router();

customerRouter.route('/')
	.get(customerControllers.getCustomers)
	.post(customerControllers.createCustomer)
	.put(customerControllers.updateCustomer)

customerRouter.route('/:id')
	.get(customerControllers.getOneCustomer)
	.patch(customerControllers.changeCustomer)
	.delete(customerControllers.deleteCustomer)

export default customerRouter;