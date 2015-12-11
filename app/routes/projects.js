var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('projects', {
		title: 'Проекты',
		sections: {
			description: 'Описание',
			attach: 'Прикрепленные файлы'
		},
		description: 'Подробная информация о текущей погоде и детальный прогноз всегда под рукой, где бы вы ни находились.',
		header: {
			title: [
				{
					name: 'Погодный сайт',
				}
			],
			label: {
				name: 'Готовится в релиз',
				color: 'orange'
			}			
		},
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
				title: 'Руководитель',
				type: 'link',
				value: {
					url: '#',
					name: 'Ахатов Антон'
				}
			},
			{
				title: 'Прогресс',
				type: 'nums',
				values:[{
						url: '#',
						num: '12',
						color: 'orange'
					},{
						url: '#',
						num: '23',
						color: 'green'
					},{
						url: '#',
						num: '92',
						color: 'gray'
				}]
			},
			{
				title: 'Старт',
				type: 'text',
				values: {
					name: '11.08',
					color: 'black'
				}
			},
			{
				title: 'Релиз',
				type: 'text',
				values: {
					name: '29.09',
					color: 'red'
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
					},{
						title: 'Прогресс',
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
					},
					{
						color: 'black',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '2.0'
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
					},
					{
						color: 'black',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '1.9'
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
			},
			{
				header: [
					{
						title: 'Фронтенд',
						isMain: true
					},
					{},
					{
						isRight: true
					},
					{}
				],
				body: [
					{
						isGroup: true,
						color: 'black',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '2.1'
							},
							{
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
					},
					{
						isGroupItem: true,
						color: 'blue',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '2.0'
							},
							{
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
					},
					{
						isGroupItem: true,
						color: 'red',
						url: '#',
						cells: [
							{
								type: 'main',
								title: '1.9'
							},
							{
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