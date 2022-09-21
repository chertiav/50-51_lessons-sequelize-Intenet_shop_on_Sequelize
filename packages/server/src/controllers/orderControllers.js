import createHttpError from "http-errors";
//========================================
import { Order, sequelize } from "../db/models";

class OrderController {
	async getOrders (req, res, next) {
		try {
			const allOrders = await Order.findAll({raw:true});
			if (allOrders) {
				res.status(200).json(allOrders)
			} else {
				next(createHttpError(404, `Any order hasn't been found`));
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneOrder (req, res, next) {
		try {
			const id = req.params.id;
			const oneOrder = await Order.findByPk(id, {raw:true});
			if (oneOrder) {
				res.status(200).json(oneOrder);
			} else {
				next(createHttpError(404, `Any order hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createOrder (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newOrder = await Order.create(body, {transaction: t});
			if (newOrder) {
				res.status(200).json(newOrder);
			} else {
				next(createHttpError(404, `Any order hasn't been created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async updateOrder (req, res, next) {
		const  t = await sequelize.transaction();
		try {
			const body = req.body;
			const updatedOrder = await Order.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (updatedOrder) {
				res.status(200).json(updatedOrder);
			} else {
				next(createHttpError(404, `Any order hasn't been updated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async changeOrder (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updatedOrder]] = await Order.update(body, {
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			});
			if (rowsCount) {
				res.status(200).json(updatedOrder);
			} else {
				next(createHttpError(404, `Any order hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async deleteOrder (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedOrder = await Order.destroy({
				transaction: t,
				where:{id}
			})
			if (deletedOrder) {
				res.send(res.statusCode);
			} else {
				next(createHttpError(404, `Any order hasn't been deleted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new OrderController;