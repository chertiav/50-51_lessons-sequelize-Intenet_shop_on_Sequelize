import createHttpError from "http-errors";
//=========================================
import {Customer_Phone, Customer, sequelize} from '../db/models';

class Customer_PhoneController {
	async getCustomerPhones (req, res, next) {
		try {
			const allCustomerPhones = await Customer_Phone.findAll({raw: true});
			if (allCustomerPhones) {
				res.status(200).json(allCustomerPhones)
			} else {
				next(createHttpError(404, `Any phones hasn't been found`))
			}
		} catch (error) {
			next(error);
		}
	}
	async getOneCustomerPhone (req, res, next){
		try {
			const id = req.params.id;
			const customerPhonesByPk = await Customer_Phone.findByPk(id, {raw: true});
			if (customerPhonesByPk) {
				res.status(200).json(customerPhonesByPk)
			} else {
				next(createHttpError(404, `Phone numbers by customer not found`))
			}
		} catch (error) {
				next(error);
		}
	}
	async createCustomerPhone (req, res, next){
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newCustomerPhones = await Customer_Phone.create(body, {transaction: t})
			if (newCustomerPhones) {
				res.status(200).json(newCustomerPhones)
			} else {
				next(createHttpError(404, `Phone number hasn't created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async updatedCustomerPhone (req, res, next){
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updateCustomerPhones = await Customer_Phone.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (updateCustomerPhones) {
				res.status(200).json(updateCustomerPhones)
			} else {
				next(createHttpError(404, `Phone number hasn't updated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async changeCustomerPhone (req, res, next){
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updateCustomerPhones]] = await Customer_Phone.update(body,{
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			})
			if (rowsCount) {
				res.status(200).json(updateCustomerPhones)
			} else {
				next(createHttpError(404, `Phone number hasn't updated`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteCustomerPhone (req, res, next){
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletePhone = await Customer_Phone.destroy({
				transaction: t,
				where: {id}
			})
			if (deletePhone) {
				res.send(res.statusCode)
			} else {
				next(createHttpError(404, `Phone hasn't been delete`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new Customer_PhoneController;