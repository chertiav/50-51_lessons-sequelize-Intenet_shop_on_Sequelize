'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_model extends Model {
		static associate({Brand, Item}) {
			this.belongsTo(Brand, {foreignKey: 'brandId'});
			this.hasMany(Item, {foreignKey: 'modelId'});
		}
	}
	Model.init({
		modelId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		brandId: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Item_model',
		timestamps: false
	});
	return Item_model;
};