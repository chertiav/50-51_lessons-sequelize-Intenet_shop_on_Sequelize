'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_Category extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'categ_id'});
		}
	}
	Item_Category.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Item_Category',
		tableName:'item_categories'
	});
	return Item_Category;
};