'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_Type extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'type_id'});
		}
	}
	Item_Type.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Item_Type',
		tableName:'item_types'
	});
	return Item_Type;
};