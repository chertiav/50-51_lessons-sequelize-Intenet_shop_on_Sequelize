'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item_Model extends Model {
		static associate({ Brand, Item }) {
			this.belongsTo(Brand, { foreignKey: 'brand_id' });
			this.hasOne(Item, { foreignKey: 'model_id' });
		}
	}
	Item_Model.init(
		{
			brand_id: DataTypes.INTEGER,
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Item_Model',
			tableName: 'item_models',
		},
	);
	return Item_Model;
};
