import { Router } from "express";
//===================================================
import customer_phoneControllers from "../controllers/customer_phoneControllers";

const customerPhonesRouter = new Router();

customerPhonesRouter.route('/')
	.get(customer_phoneControllers.getCustomerPhones)
	.post(customer_phoneControllers.createCustomerPhone)
	.put(customer_phoneControllers.updatedCustomerPhone)

customerPhonesRouter.route('/:id')
	.get(customer_phoneControllers.getOneCustomerPhone)
	.patch(customer_phoneControllers.changeCustomerPhone)
	.delete(customer_phoneControllers.deleteCustomerPhone)

export default customerPhonesRouter;