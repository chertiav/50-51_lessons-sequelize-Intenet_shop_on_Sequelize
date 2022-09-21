import {Router} from 'express';
//==============================
import brandControllers from '../controllers/brandControllers';

const brandRouter = new Router();

brandRouter.route('/')
	.get(brandControllers.getBrands)
	.post(brandControllers.createBrand)
	.put(brandControllers.updatedBrand)

brandRouter.route('/:id')
	.get(brandControllers.getOneBrand)
	.patch(brandControllers.changeBrand)
	.delete(brandControllers.deleteBrand)

export default brandRouter;
