import { Router } from "express";
//===============================
import itemControllers from "../controllers/itemControllers";

const itemRouter = new Router();

itemRouter.route('/')
	.get(itemControllers.getAllItems)
	.post(itemControllers.createItem)
	.put(itemControllers.updateItem)

itemRouter.route('/:id')
	.get(itemControllers.getOneItem)
	.patch(itemControllers.changeItem)
	.delete(itemControllers.deleteItem)

export default itemRouter;