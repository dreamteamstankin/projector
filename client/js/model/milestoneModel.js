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
        this.url = '//localhost:7000/milestone';
        this.model = MilestoneModel;
        this.parse = function(response) {
            if (response.status){
                return response.data;
            }
        }
    }
}

const Milestones = new MilestoneCollection;


export { MilestoneModel, Milestones }