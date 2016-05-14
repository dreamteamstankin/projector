const { Model, Collection } = Backbone;

class MilestoneModel extends Model {
    constructor(option) {
        super(option);
    }

    defaults() {
        return {
            id: 'GIS',
            branch: 'Master',
            title: 'Погодный сайт',
            description: 'Жизненный цикл',
            start: (new Date()),
            finish: (new Date()),
            viewtype: 1,
            tasks: []
        }
    }
}

class MilestoneCollection extends Collection {
    constructor() {
        super();
        this.model = MilestoneModel;
    }
}

const Milestones = new MilestoneCollection;


Milestones.fetch({ data: $.param({ project: 'GIS'}) });



Milestones.add([new MilestoneModel({
    id: 'GIS-M-1',
    branch: 'GIS-M-1',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}),new MilestoneModel({
    id: 'GIS-M-2',
    branch: 'GIS-M-2',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}),new MilestoneModel({
    id: 'GIS-M-3',
    branch: 'GIS-M-3',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}),new MilestoneModel({
    id: 'GIS-M-4',
    branch: 'GIS-M-4',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
}),new MilestoneModel({
    id: 'GIS-M-5',
    branch: 'GIS-M-5',
    title: 'Погодный сайт',
    description: 'Жизненный цикл продукции, несмотря на внешние воздействия, притягивает из ряда вон выходящий критерий сходимости Коши, что и требовалось доказать',
    start: (new Date()),
    finish: (new Date()),
    viewtype: 1,
    tasks: [{
        id: 'GIS-1',
        branch: 'GIS-1',
        title: 'Раз',
        status: 1
    }, {
        id: 'GIS-2',
        branch: 'GIS-2',
        title: 'Два',
        status: 2
    }, {
        id: 'GIS-3',
        branch: 'GIS-3',
        title: 'Три',
        status: 3
    }, {
        id: 'GIS-4',
        branch: 'GIS-4',
        title: 'Четыре',
        status: 4
    }, {
        id: 'GIS-5',
        branch: 'GIS-5',
        title: 'Пять',
        status: 5
    }]
})]);

export { MilestoneModel, Milestones }