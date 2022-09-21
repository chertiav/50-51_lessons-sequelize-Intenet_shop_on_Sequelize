import createHttpError from "http-errors";
//==========================================
import { Item_Model, Brand, sequelize } from '../db/models'

class Item_ModelControler {
	async getItemModels (req, res, next) {
		try {
			const allItemModels = await Item_Model.findAll({
				attributes: {
					exclude: ['brand_id']
				},
				include: {
					model: Brand,
					attributes: ['title']
				},
				raw:true
			});
			if (allItemModels) {
				res.status(200).json(allItemModels)
			} else {
				next(createHttpError(404, `Any models hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneItemModel (req, res, next) {
		try {
			const id = req.params.id;
			const oneItemModels = await Item_Model.findByPk(id, {
				attributes: {
					exclude: ['brand_id']
				},
				include: {
					model: Brand,
					attributes: ['title']
				},
				raw:true
			})
			if (oneItemModels) {
				res.status(200).json(oneItemModels)
			} else {
				next(createHttpError(404, `Any models hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createItemModel (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newItemModel = await Item_Model.create(body, {transaction: t})
			if (newItemModel) {
				res.status(200).json(newItemModel)
			} else {
				next(createHttpError(404, `Any models hasn't been created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async updateItemModel (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updatedItemModel = await Item_Model.update(body,{
				transaction: t,
				where: {id: body.id}
			});
			if (updatedItemModel) {
				res.status(200).json(updatedItemModel)
			} else {
				next(createHttpError(404, `Any models hasn't been updated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async changeItemModel (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updatedItemModel]] = await Item_Model.update(body, {
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			})
			if (rowsCount) {
				res.status(200).json(updatedItemModel);
			} else {
				next(createHttpError(404, `Any models hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteItemModel (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedItemModel = await Item_Model.destroy({
				transaction: t,
				where: {id}
			});
			if (deletedItemModel) {
				res.send(res.statusCode);
			} else {
				next(createHttpError(404, `Any models hasn't been deleted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
}

export default new Item_ModelControler;