'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_category extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'categId'});
		}
	}
	Item_category.init({
		categId: {
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
		modelName: 'Item_category',
		timestamps: false
	});
	return Item_category;
};