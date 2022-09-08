'use strict';

const customers = [
	{name:'Иванов Иван Иванович', email: 'ivanov@gmail.com', description: ''},
	{name:'Петров Петр Петрович', email: 'petrov@gmail.com', description: ''},
	{name:'Семенов Семен Семенович', email: 'semenov@gmail.com', description: ''},
	{name:'Васильев Василий Васильевич', email: 'vasilev@gmail.com', description: ''},
	{name:'Сергеев Сергей Сергеевич', email: 'sergeev@gmail.com', description: ''},
	{name:'Дмитриев Дмитрий Дмитриевич', email: 'dmitriev@gmail.com', description: ''},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Customers', customers, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Customers', null, {});
	}
};
