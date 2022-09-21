import createHttpError from "http-errors";
import bcrypt from 'bcrypt';
//========================================
import {Customer, Customer_Phone, Order, Item, sequelize} from '../db/models';

class CustomerController {
	async getCustomers (req, res, next) {
		try {
			const getAllCustomers = await Customer.findAll({
				include: [{
					model: Customer_Phone,
					attributes: ['type', 'number'],
					as: 'phones'
				}]
			});
			if (getAllCustomers) {
				res.status(200).json(getAllCustomers)
			} else {
				next(createHttpError(404, `Any customers hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneCustomer (req, res, next) {
		try {
			const id = req.params.id;
			const customerByPk = await Customer.findByPk(id, {
				include: [{
					model: Customer_Phone,
					attributes: ['type', 'number'],
					as: 'phones'
				}]
			});
			if (customerByPk) {
				res.status(200).json(customerByPk)
			} else {
				next(createHttpError(404, `Any customers hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createCustomer (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newCustomer = await Customer.create(body, {transaction: t})
			if (newCustomer) {
				res.status(200).json(newCustomer)
			} else {
				next(createHttpError(404, `Customer hasn't been created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next (error)
		}
	}
	async updateCustomer (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updatedCustomer = await Customer.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (updatedCustomer) {
				res.status(200).json(updatedCustomer)
			} else {
				next(createHttpError(404, `Customer hasn't been updated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async changeCustomer (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updatedCustomer]] = await Customer.update(body,{
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			})
			if (rowsCount) {
				res.status(200).json(updatedCustomer)
			} else {
				next(createHttpError(404,  `Customer hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteCustomer (req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedCustomer = await Customer.destroy({
				transaction: t,
				where: {id}
			});
			if (deletedCustomer) {
				res.send(res.statusCode)
			} else {
				next(createHttpError(404, `Customer hasn't been delete`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new CustomerController;