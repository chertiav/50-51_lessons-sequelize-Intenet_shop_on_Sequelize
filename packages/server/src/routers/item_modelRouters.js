import { Router } from "express";
//=================================
import item_modelControllers from '../controllers/item_modelControllers';

const itemModelRouter = new Router();

itemModelRouter.route('/')
	.get(item_modelControllers.getItemModels)
	.post(item_modelControllers.createItemModel)
	.put(item_modelControllers.updateItemModel)

	itemModelRouter.route('/:id')
	.get(item_modelControllers.getOneItemModel)
	.patch(item_modelControllers.changeItemModel)
	.delete(item_modelControllers.deleteItemModel)

export default itemModelRouter;