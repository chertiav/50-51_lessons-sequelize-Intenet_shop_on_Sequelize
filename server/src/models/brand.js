'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Brand extends Model {
		static associate({Item_Model}) {
			this.hasMany(Item_Model, {foreignKey: 'brand_id'});
		 }
	}
	Brand.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT
	}, {
		sequelize,
		modelName: 'Brand',
		tableName:'brands'
	});
	return Brand;
};