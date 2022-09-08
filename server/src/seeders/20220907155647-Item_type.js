'use strict';

const types = [
	{title:'Геймерские', description: 'Ноутбуки и компьютеры'},
	{title:'Для работы и учебы', description: 'Ноутбуки и компьютеры'},
	{title:'Тонкие и легкие', description: 'Ноутбуки и компьютеры'},
	{title:'Трансформеры', description: 'Ноутбуки и компьютеры'},
	{title:'Мобильные телефоны', description: 'Смартфоны, ТВ и электроника'},
	{title:'Телевизоры', description: 'Смартфоны, ТВ и электроника'},
	{title:'Планшеты', description: 'Смартфоны, ТВ и электроника'},
	{title:'Кабели и адаптеры', description: 'Смартфоны, ТВ и электроника'},
	{title:'Наушники и аксессуары', description: 'Смартфоны, ТВ и электроника'},
	{title:'Холодильники', description: 'Бытовая техника'},
	{title:'Стиральные машины', description: 'Бытовая техника'},
	{title:'Посудомоечные машины', description: 'Бытовая техника'},
	{title:'Кухонные плиты', description: 'Бытовая техника'},
	{title:'Морозильные камеры', description: 'Бытовая техника'},
	{title:'Автошины и диски', description: 'Инструменты и автотовары'},
	{title:'Моттотовары', description: 'Инструменты и автотовары'},
	{title:'Автозвук', description: 'Инструменты и автотовары'},
	{title:'Автозапчасти', description: 'Инструменты и автотовары'},
	{title:'Оборудование', description: 'Инструменты и автотовары'},
	{title:'Керамика', description: 'Сантехника и ремонт'},
	{title:'Мебель для ванной комнаты', description: 'Сантехника и ремонт'},
	{title:'Ванны', description: 'Сантехника и ремонт'},
	{title:'Сместители', description: 'Сантехника и ремонт'},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Item_types', types, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Item_types', null, {});
	}
};
