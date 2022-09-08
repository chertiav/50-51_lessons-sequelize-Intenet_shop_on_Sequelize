'use strict';

const phones = [
	{customerId: 1, type: 'рабочий', number: '+380000000000', description: ''},
	{customerId: 1, type: 'домашний', number: '+380001111111', description: ''},
	{customerId: 2, type: 'рабочий', number: '+380002222222', description: ''},
	{customerId: 2, type: 'домашний', number: '+380003333333', description: ''},
	{customerId: 3, type: 'рабочий', number: '+380004444444', description: ''},
	{customerId: 3, type: 'домашний', number: '+380005555555', description: ''},
	{customerId: 4, type: 'рабочий', number: '+380006767676', description: ''},
	{customerId: 5, type: 'рабочий', number: '+380007777777', description: ''},
	{customerId: 5, type: 'рабочий', number: '+380008888888', description: ''},
	{customerId: 5, type: 'домашний', number: '+380009999999', description: ''},
	{customerId: 6, type: 'рабочий', number: '+380001010101', description: ''},
	{customerId: 6, type: 'домашний', number: '+380001212121', description: ''},
	{customerId: 6, type: 'домашний', number: '+380001313131', description: ''},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Customer_phones', phones, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Customer_phones', null, {});
	}
};
