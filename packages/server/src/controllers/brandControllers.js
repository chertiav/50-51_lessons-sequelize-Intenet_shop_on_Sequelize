import createHttpError from 'http-errors';
//============================================
import {Brand, sequelize} from '../db/models';

class BrandController {
	async getBrands(req, res, next) {
		try {
			const allBrands = await Brand.findAll({raw:true});
			if (allBrands) {
				res.status(200).json(allBrands)
			} else {
				next(createHttpError(404, `Any brand hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneBrand(req, res, next) {
		try {
			const id = req.params.id;
			const brandByPk = await Brand.findByPk(id, {raw:true});
			if (brandByPk) {
				res.status(200).json(brandByPk)
			} else {
				next(createHttpError(404, `Brand hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createBrand(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newBrand = await Brand.create(body, {transaction:t})
			if (newBrand) {
				res.status(200).json(newBrand)
			} else {
				next(createHttpError(404, `Brand not found`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async updatedBrand(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updetedBrand = await Brand.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (updetedBrand) {
				res.status(200).json(updetedBrand)
			} else {
				next(createHttpError(404, `Brand hasn't been updeted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async changeBrand(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updatedBrand]] = await Brand.update(body,{
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			})
			if (rowsCount) {
				res.status(200).json(updatedBrand)
			} else {
				next(createHttpError(404, `Brand hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteBrand(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deleteBrand = await Brand.destroy({
				transaction: t,
				where: {id}
			})
			if (deleteBrand) {
				res.send(res.statusCode)
			} else {
				next(createHttpError(404, `Brand hasn't been delete`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new BrandController;