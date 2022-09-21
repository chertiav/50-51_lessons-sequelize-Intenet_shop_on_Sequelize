import { Router } from "express";
//==================================
import item_categoryControllers from '../controllers/item_categoryControllers';

const itemCategoryRouter = new Router();

itemCategoryRouter.route('/')
	.get(item_categoryControllers.getItemCategories)
	.post(item_categoryControllers.createItemCategory)
	.put(item_categoryControllers.udateItemCategory)

itemCategoryRouter.route('/:id')
	.get(item_categoryControllers.getOneItemCategory)
	.patch(item_categoryControllers.changeItemCategory)
	.delete(item_categoryControllers.deleteItemCategory)

export default itemCategoryRouter;