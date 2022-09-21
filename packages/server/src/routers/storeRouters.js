import { Router } from "express";
//===============================
import storeControllers from '../controllers/storeControllers';

const storeRouter = new Router();

storeRouter.route('/')
	.get(storeControllers.getStores)
	.post(storeControllers.createStore)
	.put(storeControllers.updateStore)

storeRouter.route('/:id')
	.get(storeControllers.getOneStore)
	.patch(storeControllers.changeStore)
	.delete(storeControllers.deleteStore)

export default storeRouter;