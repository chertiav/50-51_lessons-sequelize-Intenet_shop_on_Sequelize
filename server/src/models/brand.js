'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Brand extends Model {
		static associate({Item_model}) {
			this.hasMany(Item_model, {foreignKey: 'brandId'});
		 }
	}
	Brand.init({
		brandId: {
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
		description: DataTypes.TEXT
	}, {
		sequelize,
		modelName: 'Brand',
		timestamps: false
	});
	return Brand;
};