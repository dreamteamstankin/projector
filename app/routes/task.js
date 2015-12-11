var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('task', {
		title: 'Задача',
		level: 2,
		sections: {
			description: 'Описание',
			attach: 'Прикрепленные файлы',
			list: 'Связано',
			comments: 'Комментарии'
		},
		description: 'Подробная информация о текущей погоде и детальный прогноз всегда под рукой, где бы вы ни находились.',
		header: {
			title: [
				{
					name: 'Погодный сайт',
					url: '/projects/'
				},
				{
					name: 'Релиз 2.1',
					url: '/groups/'
				},
				{
					name: 'Правки по верстке',
					url: '/group/'
				},
				{
					name: 'Верстка радара'
				}
			]
		},
		list: [
			{
				url: '#',
				branch: 'GIS-200',
				description: 'Родитель'
			},
			{
				url: '#',
				branch: 'GIS-200',
				description: 'Дизайн-макеты'
			}
		],
		attach: [
			{
				type: 'img',
				url: '#',
				src: '/img/attach.png',
				alt: 'Картинка 1'
			},{
				type: 'img',
				url: '#',
				src: '/img/attach.png',
				alt: 'Картинка 2'
			}
		],
		dashboard: [
			{
				title: 'Исполнитель',
				type: 'link',
				value: {
					url: '#',
					name: 'Ахатов Антон'
				}
			},
			{
				title: 'Ветка',
				type: 'text',
				values: {
					name: 'GIS-624',
					color: 'black'
				}
			},
			{
				title: 'Старт',
				type: 'text',
				values: {
					name: '29.09',
					color: 'black'
				}
			}
		],
		tasks: [
			{
				header: [
					{
						title: 'Фронтенд',
						isAdd: true,
						isMain: true
					},
					{},
					{
						title: '',
						isRight: true
					},{
						title: 'Назначено'
					},
					{}
				],
				body: [
					{
						color: 'black',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '2.1'
							},
							{
								type: 'icon',
								state: 'problem'
							},
							{
								type: 'text',
								title: 'GIS-512'
							},
							{
								type: 'text',
								title: 'Антон Ахатов'
							},
							{
								type: 'menu'
							}
						]
					},
					{
						isGroup: true,
						color: 'black',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '2.0'
							},
							{
								type: 'icon',
								state: 'done'
							},
							{
								isRight: true,
								type: 'nums',
								nums: [
									{
										url: '#',
										num: '1',
										color: 'black'
									},{
										url: '#',
										num: '4',
										color: 'gray'
									}
								]
							},
							{
								type: 'text',
								title: 'Антон Ахатов'
							},
							{
								type: 'menu'
							}
						]
					}
				]
			}
		],
		tracker: {
			time: (new Date).getMilliseconds(),
			tasks: [
				{
					url: '#',
					branch: 'GIS-452',
					type: 'problem',
					time: (new Date).getMilliseconds() + 'ч',
					description: 'Решение проблем с MongoDB'
				},{
					url: '#',
					branch: 'GIS-452',
					type: 'open',
					time: (new Date).getMilliseconds() + 'ч',
					description: 'Преобразование картинки в pdf'
				},{
					url: '#',
					branch: 'GIS-452',
					time: (new Date).getMilliseconds() + 'ч',
					description: 'Новая верстка каталога'
				},{
					url: '#',
					branch: 'GIS-452',
					time: (new Date).getMilliseconds() + 'ч',
					description: 'Изменение цветов геомагнетики'
				},{
					url: '#',
					branch: 'GIS-452',
					type: 'done',
					time: (new Date).getMilliseconds() + 'ч',
					description: 'Вставить погодные фоны'
				}
			]
		}
	});
});

module.exports = router;