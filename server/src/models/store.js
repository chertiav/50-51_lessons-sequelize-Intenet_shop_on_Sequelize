'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Store extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'storeId'});
		}
	}
	Store.init({
		storeId: {
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
		modelName: 'Store',
		timestamps: false
	});
	return Store;
};