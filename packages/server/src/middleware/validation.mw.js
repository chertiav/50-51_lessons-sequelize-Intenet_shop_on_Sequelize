import createHttpError from 'http-errors';
//========================================
import {
	NEW_ITEM_VALIDATION_SCHEMA,
	UPDATE_ITEM_VALIDATION_SCHEMA,
} from '../utils/validationSchema';

export const validateNewItem = async (req, res, next) => {
	const body = req.body;
	try {
		await NEW_ITEM_VALIDATION_SCHEMA.validate(body, {
			abortEarly: false,
		});
		next();
	} catch (error) {
		next(error);
	}
};
export const validateChangeItem = async (req, res, next) => {
	const body = req.body;
	try {
		await UPDATE_ITEM_VALIDATION_SCHEMA.validate(body, {
			abortEarly: false,
		});
		next();
	} catch (error) {
		next(error);
	}
};
