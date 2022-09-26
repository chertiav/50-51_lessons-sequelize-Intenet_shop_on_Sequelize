import { Router } from 'express';
//===============================
import customerControllers from '../controllers/customerControllers';
import { upload } from '../middleware/index';

const customerRouter = new Router();

customerRouter
	.route('/')
	.get(customerControllers.getCustomers)
	.post(customerControllers.createCustomer)
	.put(customerControllers.updateCustomer);

customerRouter
	.route('/:id')
	.get(customerControllers.getOneCustomer)
	.patch(customerControllers.changeCustomer)
	.delete(customerControllers.deleteCustomer);

customerRouter
	.route('/:id/images')
	.patch(
		upload.uploadCustomerImage.single('customerImage'),
		customerControllers.addCustomerImage,
	);

export default customerRouter;
