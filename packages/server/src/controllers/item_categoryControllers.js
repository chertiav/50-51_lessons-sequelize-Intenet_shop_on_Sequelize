import createHttpError from "http-errors";
//=========================================
import { Item_Category, sequelize } from "../db/models";

class Item_CategoryController {
	async getItemCategories (req, res, next) {
		try {
			const allItemCategories = await Item_Category.findAll({raw:true});
			if (allItemCategories) {
				res.status(200).json(allItemCategories)
			} else {
				next(createHttpError(404, `Any categories hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneItemCategory (req, res, next) {
		try {
			const id = req.params.id;
			const oneItemCategory = await Item_Category.findByPk(id,{raw:true});
			if (oneItemCategory) {
				res.status(200).json(oneItemCategory);
			} else {
				next(createHttpError(404, `Any categories hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createItemCategory (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newItemCategory = await Item_Category.create(body, {transaction: t})
			if (newItemCategory) {
				res.status(200).json(newItemCategory)
			} else {
				next(createHttpError(404, `Any categories hasn't been created` ))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async udateItemCategory (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const udatedItemCategory = await Item_Category.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (udatedItemCategory) {
				res.status(200).json(udatedItemCategory)
			} else {
				next(createHttpError(404, `Any categories hasn't been  udated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}

	}
	async changeItemCategory (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [udatedItemCategory]] = await Item_Category.update(body, {
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			})
			if (rowsCount) {
				res.status(200).json(udatedItemCategory)
			} else {
				next(createHttpError(404, `Any categories hasn't been  udated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteItemCategory (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedItemCategory = await Item_Category.destroy({
				transaction: t,
				where: {id}
			});
			if (deletedItemCategory) {
				res.send(res.statusCode)
			} else {
				next(createHttpError(404 , `Any categories hasn't been deleted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new Item_CategoryController;