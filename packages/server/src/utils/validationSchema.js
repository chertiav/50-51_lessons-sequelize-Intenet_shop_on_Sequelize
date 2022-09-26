import * as Yup from 'yup';

const TITLE_NAME_SCHEMA = Yup.string()
	.trim()
	.matches(/^[A-Z,А-Я](\w+\s?)\w/);
const SOME_ID_SCHEMA = Yup.number()
	.positive(`This field must be positibe`)
	.integer(`This field must be integer`);

export const NEW_ITEM_VALIDATION_SCHEMA = Yup.object().shape({
	categ_id: SOME_ID_SCHEMA,
	type_id: SOME_ID_SCHEMA,
	model_id: SOME_ID_SCHEMA,
	store_id: SOME_ID_SCHEMA,
	title: TITLE_NAME_SCHEMA.required(),
});
export const UPDATE_ITEM_VALIDATION_SCHEMA = Yup.object().shape({
	categ_id: SOME_ID_SCHEMA,
	type_id: SOME_ID_SCHEMA,
	model_id: SOME_ID_SCHEMA,
	store_id: SOME_ID_SCHEMA,
	title: TITLE_NAME_SCHEMA,
});
export const PAGINATION_SCHEMA = Yup.object().shape({
	limit: Yup.number().min(1).max(5).required(),
	offset: Yup.number().required(),
});
