'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_type extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'typeId'});
		}
	}
	Item_type.init({
		typeId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Item_type',
		timestamps: false
	});
	return Item_type;
};