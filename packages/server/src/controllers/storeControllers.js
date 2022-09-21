import createHttpError from "http-errors";
//=======================================
import { Store, sequelize } from "../db/models";

class StoreController {
	async getStores (req, res, next){
		try {
			const allStores = await Store.findAll({raw:true});
			if (allStores) {
				res.status(200).json(allStores);
			} else {
				next(createHttpError(404, `Any store hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async getOneStore (req, res, next){
		try {
			const id = req.params.id;
			const oneStore = await Store.findByPk(id, {raw:true});
			if (oneStore) {
				res.status(200).json(oneStore);
			} else {
				next(createHttpError(404, `Any store hasn't been found`))
			}
		} catch (error) {
			next(error)
		}
	}
	async createStore (req, res, next){
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const newStore = await Store.create(body, {transaction: t});
			if (newStore) {
				res.status(200).json(newStore);
			} else {
				next(createHttpError(404, `Any store hasn't been created`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async updateStore (req, res, next){
		const t = await sequelize.transaction();
		try {
			const  body = req.body;
			const updetedStore = await Store.update(body, {
				transaction: t,
				where: {id: body.id}
			})
			if (updetedStore) {
				res.status(200).json(updetedStore);
			} else {
				next(createHttpError(404, `Any store hasn't been updeted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error);
		}
	}
	async changeStore (req, res, next){
		const t = await sequelize.transaction();
		try {
			const {params: {id}, body} = req;
			const [rowsCount, [updetedStore]] = await Store.update(body, {
				transaction: t,
				where: {id},
				raw: true,
				returning: true
			});
			if (rowsCount) {
				res.status(200).json(updetedStore);
			} else {
				next(createHttpError(404, `Any store hasn't been changed`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
	async deleteStore (req, res, next){
		const t = await sequelize.transaction();
		try {
			const id = req.params.id;
			const deletedStore = await Store.destroy({
				transaction: t,
				where: {id}
			});
			if (deletedStore) {
				res.send(res.statusCode);
			} else {
				next(createHttpError(404, `Any store hasn't been deleted`))
			}
			t.commit();
		} catch (error) {
			t.rollback();
			next(error)
		}
	}
}

export default new StoreController;