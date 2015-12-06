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
					name: 'Погодный сайт'
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
				src: 'img/attach.png',
				alt: 'Картинка 1'
			},{
				type: 'img',
				url: '#',
				src: 'img/attach.png',
				alt: 'Картинка 2'
			}
		],
		dashboard: {
			'Руководитель': {
				'link': {
					url: '#',
					name: 'Ахатов Антон'
				}
			},
			'Прогресс': {
				'nums':[{
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
			'Старт': {
				'text': {
					name: '11.08',
					color: 'black'
				}
			},
			'Релиз': {
				'text': {
					name: '29.09',
					color: 'red'
				}
			}
		},
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
					},{
						isEmpty: true
					}
				],
				body: [
					{
						color: 'black',
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
						color: 'black',
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
						color: 'black',
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
			},
			{
				header: [
					{
						title: 'Фронтенд'
					},{
						isEmpty: true
					},{
						isEmpty: true
					},{
						isEmpty: true
					},{
						isEmpty: true
					}
				],
				body: [
					{
						color: 'black',
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
						color: 'black',
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
						color: 'black',
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
		]
	});
});

module.exports = router;