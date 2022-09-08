'use strict';

const brands = [
	{title:'ASUS', description: ''},
	{title:'Acer', description: ''},
	{title:'Dell', description: ''},
	{title:'HP', description: ''},
	{title:'Lenovo', description: ''},
	{title:'Apple', description: ''},
	{title:'Xiaomi', description: ''},
	{title:'Motorola', description: ''},
	{title:'Nokia', description: ''},
	{title:'OPPO', description: ''},
	{title:'LG', description: ''},
	{title:'SAMSUNG', description: ''},
	{title:'PHILIPS', description: ''},
	{title:'SONY', description: ''},
	{title:'Microsoft', description: ''},
	{title:'Pixus', description: ''},
	{title:'Prestigio', description: ''},
	{title:'JBL', description: ''},
	{title:'Beko', description: ''},
	{title:'Bosch', description: ''},
	{title:'WHIRLPOOL', description: ''},
	{title:'INDESIT', description: ''},
	{title:'ELECTROLUX', description: ''},
	{title:'Gorenje', description: ''},
	{title:'Michelin', description: ''},
	{title:'Bridgestone', description: ''},
	{title:'Continental', description: ''},
	{title:'Goodyear', description: ''},
	{title:'BAJAJ', description: ''},
	{title:'Forte', description: ''},
	{title:'Geon', description: ''},
	{title:'Blaupunkt', description: ''},
	{title:'Pioner', description: ''},
	{title:'Kenwood', description: ''},
	{title:'Exide', description: ''},
	{title:'FIAMM', description: ''},
	{title:'Daewoo', description: ''},
	{title:'Dnipro-M', description: ''},
	{title:'Cersanit', description: ''},
	{title:'Colombo', description: ''},
	{title:'Devit', description: ''},
	{title:'Aqua Rodos', description: ''},
	{title:'Aquarius', description: ''},
	{title:'Besco', description: ''},
	{title:'Agua', description: ''},
	{title:'Aquatica', description: ''},
	{title:'Drop', description: ''},
];

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Brands', brands, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Brands', null, {});
	}
};