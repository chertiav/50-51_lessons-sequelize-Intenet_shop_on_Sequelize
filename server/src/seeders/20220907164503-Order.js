'use strict';

const orders = [
	{customerId: 3, code: 'CY-12152', date: '2022-01-01', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12153', date: '2022-01-02', paid: 'no', description: ''},
	{customerId: 2, code: 'CY-12154', date: '2022-01-03', paid: 'yes', description: ''},
	{customerId: 2, code: 'CY-12155', date: '2022-01-04', paid: 'yes', description: ''},
	{customerId: 4, code: 'CY-12156', date: '2022-01-05', paid: 'yes', description: ''},
	{customerId: 6, code: 'CY-12157', date: '2022-01-06', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12158', date: '2022-01-07', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12159', date: '2022-01-08', paid: 'yes', description: ''},
	{customerId: 6, code: 'CY-12160', date: '2022-01-09', paid: 'yes', description: ''},
	{customerId: 6, code: 'CY-12161', date: '2022-01-10', paid: 'yes', description: ''},
	{customerId: 2, code: 'CY-12162', date: '2022-01-11', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12163', date: '2022-01-12', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12164', date: '2022-01-13', paid: 'yes', description: ''},
	{customerId: 6, code: 'CY-12165', date: '2022-01-14', paid: 'yes', description: ''},
	{customerId: 2, code: 'CY-12166', date: '2022-01-15', paid: 'yes', description: ''},
	{customerId: 1, code: 'CY-12167', date: '2022-01-16', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12168', date: '2022-01-17', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12169', date: '2022-01-18', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12170', date: '2022-01-19', paid: 'yes', description: ''},
	{customerId: 2, code: 'CY-12171', date: '2022-01-20', paid: 'yes', description: ''},
	{customerId: 4, code: 'CY-12172', date: '2022-01-21', paid: 'yes', description: ''},
	{customerId: 1, code: 'CY-12173', date: '2022-01-22', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12174', date: '2022-01-23', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12175', date: '2022-01-24', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12176', date: '2022-01-25', paid: 'yes', description: ''},
	{customerId: 1, code: 'CY-12177', date: '2022-01-26', paid: 'yes', description: ''},
	{customerId: 6, code: 'CY-12178', date: '2022-01-27', paid: 'yes', description: ''},
	{customerId: 1, code: 'CY-12179', date: '2022-01-28', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12180', date: '2022-01-29', paid: 'yes', description: ''},
	{customerId: 5, code: 'CY-12181', date: '2022-01-30', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12182', date: '2022-01-31', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12183', date: '2022-02-01', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12184', date: '2022-02-02', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12185', date: '2022-02-03', paid: 'yes', description: ''},
	{customerId: 3, code: 'CY-12186', date: '2022-02-04', paid: 'yes', description: ''},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Orders', orders, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Orders', null, {});
	}
};

