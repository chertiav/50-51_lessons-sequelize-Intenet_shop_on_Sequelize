'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Store extends Model {
		static associate({Item}) {
			this.hasMany(Item, {foreignKey: 'store_id'});
		}
	}
	Store.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Store',
		tableName:'stores'
	});
	return Store;
};