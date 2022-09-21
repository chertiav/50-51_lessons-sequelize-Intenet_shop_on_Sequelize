import createHttpError from "http-errors";
//========================================
import { Item_Type, sequelize } from "../db/models";

class Item_TypeController {
	async getItemTypes (req, res, next) {
		try {
			const allItemTypes = await Item_Type.findAll({raw:true});
			if (allItemTypes) {
				res.status(200).json(allItemTypes);
			} else {
				next(createHttpError(404 `Any types hasn't been found`));
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneItemType (req, res, next) {
		try {
			const id = req.params.id;
			const oneItemTypes = await Item_Type.findByPk(id,{raw:true});
			if (oneItemTypes) {
				res.status(200).json(oneItemTypes)
			} else {
				next(createHttpError(404, `Any types hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createItemType (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newItemType = await Item_Type.create(body, {transaction: t});
			if (newItemType) {
				res.status(200).json(newItemType);
			} else {
				next(createHttpError(404, `Any types hasn't been created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async updateItemType (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const udetedItemType = await Item_Type.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (udetedItemType) {
				res.status(200).json(udetedItemType)
			} else {
				next(createHttpError(404, `Any types hasn't been updeted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async changeItemType (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updateItemType]] = await Item_Type.update(body, {
				transaction: t,
				where: {id},
				raw: true,
				returning:true
			});
			if (updateItemType) {
				res.status(200).json(updateItemType)
			} else {
				next(createHttpError(404, `Any types hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async deleteItemType (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deleteditemType = await Item_Type.destroy({
				transaction: t,
				where: {id}
			})
			if (deleteditemType) {
				res.send(res.statusCode)
			} else {
				next(createHttpError(404, `Any types hasn't been deleted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new Item_TypeController;