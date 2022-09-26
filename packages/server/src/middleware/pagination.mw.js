import { PAGINATION_SCHEMA } from '../utils/validationSchema';

export const paginationItems = async (req, res, next) => {
	const { page, result } = req.query;
	const defaultPagionation = {
		limit: 5,
		offset: 0,
	};
	const pagination = {
		limit: result ?? 5,
		offset: (page - 1) * result || 0,
	};
	try {
		if (await PAGINATION_SCHEMA.isValid(pagination)) {
			req.pagination = pagination;
			console.log(pagination);
		} else {
			req.pagination = defaultPagionation;
		}
		next();
	} catch (error) {
		next(error);
	}
};
