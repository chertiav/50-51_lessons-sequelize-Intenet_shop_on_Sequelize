import { Router } from "express";
//===============================
import item_typeControllers from '../controllers/item_typeControllers';

const itemTypeRouter = new Router();

itemTypeRouter.route('/')
	.get(item_typeControllers.getItemTypes)
	.post(item_typeControllers.createItemType)
	.put(item_typeControllers.updateItemType)

itemTypeRouter.route('/:id')
	.get(item_typeControllers.getOneItemType)
	.patch(item_typeControllers.changeItemType)
	.delete(item_typeControllers.deleteItemType)

export default itemTypeRouter;