var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Главная',
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
					name: '11 авг 15',
					color: 'black'
				}
			}
		},
		tasks: [
			{
				header: [
					{
						title: 'Номер релиза',
						isAdd: true,
						isMain: true
					},{
						title: 'Задачи',
						isRight: true
					},{
						title: 'Старт'
					},{
						title: 'Релиз'
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
									}
								]
							},
							{
								type: 'text',
								title: '12 апр'
							},
							{
								type: 'text',
								title: 'Завтра'
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
									}
								]
							},
							{
								type: 'text',
								title: '12 апр'
							},
							{
								type: 'text',
								title: 'Завтра'
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
									}
								]
							},
							{
								type: 'text',
								title: '12 апр'
							},
							{
								type: 'text',
								title: 'Завтра'
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