'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item extends Model {
		static associate({ Item_Category, Item_Type, Item_Model, Store, Order }) {
			this.belongsTo(Item_Category, { foreignKey: 'categ_id' });
			this.belongsTo(Item_Type, { foreignKey: 'type_id' });
			this.belongsTo(Item_Model, { foreignKey: 'model_id' });
			this.belongsTo(Store, { foreignKey: 'store_id' });
			this.belongsToMany(Order, {
				through: 'Order_Items',
				foreignKey: 'item_id',
			});
		}
	}
	Item.init(
		{
			categ_id: DataTypes.INTEGER,
			type_id: DataTypes.INTEGER,
			model_id: DataTypes.INTEGER,
			store_id: DataTypes.INTEGER,
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				set(value) {
					this.setDataValue('title', value.trim());
				},
			},
			amount: DataTypes.INTEGER,
			price: DataTypes.REAL,
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Item',
			tableName: 'items',
		},
	);
	return Item;
};
