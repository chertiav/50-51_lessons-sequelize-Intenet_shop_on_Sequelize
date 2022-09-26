import createHttpError from 'http-errors';
//=========================================
import {
	Item,
	Item_Category,
	Item_Model,
	Item_Type,
	Store,
	Brand,
	sequelize,
} from '../db/models';

class ItemController {
	async getAllItems(req, res, next) {
		try {
			const { limit, offset } = req.pagination;
			const allItems = await Item.findAll({
				attributes: {
					exclude: ['categ_id', 'type_id', 'model_id', 'store_id'],
				},
				include: [
					{ model: Item_Category, attributes: ['title'] },
					{
						model: Item_Model,
						attributes: ['title'],
						include: [{ model: Brand, attributes: ['title'] }],
					},
					{ model: Item_Type, attributes: ['title'] },
					{ model: Store, attributes: ['title'] },
				],
				raw: true,
				limit,
				offset,
			});
			if (allItems) {
				res.status(200).json(allItems);
			} else {
				next(createHttpError(404, `Any items hasn't been found`));
			}
		} catch (error) {
			next(error);
		}
	}
	async getOneItem(req, res, next) {
		try {
			const id = req.params.id;
			const oneItem = await Item.findByPk(id, {
				attributes: {
					exclude: ['categ_id', 'type_id', 'model_id', 'store_id'],
				},
				include: [
					{ model: Item_Category, attributes: ['title'] },
					{
						model: Item_Model,
						attributes: ['title'],
						include: [{ model: Brand, attributes: ['title'] }],
					},
					{ model: Item_Type, attributes: ['title'] },
					{ model: Store, attributes: ['title'] },
				],
				raw: true,
			});
			if (oneItem) {
				res.status(200).json(oneItem);
			} else {
				next(createHttpError(404, `Any items hasn't been found`));
			}
		} catch (error) {
			next(error);
		}
	}
	async createItem(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newItem = await Item.create(body, { transaction: t });
			if (newItem) {
				res.status(200).json(newItem);
			} else {
				next(createHttpError(404, `Any items hasn't been created`));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async updateItem(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updatedItem = await Item.update(body, {
				transaction: t,
				where: { id: body.id },
			});
			if (updatedItem) {
				res.status(200).json(updatedItem);
			} else {
				next(createHttpError(404, `Any items hasn't been updated`));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async changeItem(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {
				params: { id },
				body,
			} = req;
			const [rowsCount, [updatedItem]] = await Item.update(body, {
				transaction: t,
				where: { id },
				raw: true,
				returning: true,
			});
			if (rowsCount) {
				res.status(200).json(updatedItem);
			} else {
				next(createHttpError(404, `Any items hasn't been changed`));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async deleteItem(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedItem = await Item.destroy({
				transaction: t,
				where: { id },
			});
			if (deletedItem) {
				res.send(res.statusCode);
			} else {
				next(createHttpError(404, `Any items hasn't been deleted`));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
}

export default new ItemController();
