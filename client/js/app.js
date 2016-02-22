/*global $ */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;
var dataTasks = {
    "head": ["Номер релиза", "В работе", "Ветка", "Назначено"],
    "body": [{
        "id": "1",
        "title": "Верстка макета",
        "timePass": "12 дней",
        "status": "open",
        "branch": "GIS-512",
        "assign": "Антон Ахатов"
    }, {
        "id": "2",
        "title": "nginx",
        "timePass": "1 день",
        "status": "open",
        "branch": "GIS-51",
        "assign": "Соломкина Таша"
    }, {
        "id": "3",
        "title": "Кэширование в localStorage",
        "timePass": "4 дня",
        "status": "open",
        "branch": "GIS-911",
        "assign": "Антон"
    }]
}

$(function() {
    'use strict';
    
    var Task = Backbone.Model.extend({
        defaults: {
            id: "1",
            title: "1",
            timePass: "1",
            status: "1",
            branch: "1",
            assign: "1"
        }
    });

    var TasksCollection = Backbone.Collection.extend({
        model: Task
    });
    var Tasks = new TasksCollection();

    _.each(dataTasks.body, function(task) {
        Tasks.add(new Task(task))
    })

    var TasksView = Backbone.View.extend({
        el: '.js_tasks',
        initialize: function() {
            this.render()
        },
        render: function() {
            Tasks.each(function(model) {
                var task = new TaskView({
                    model: model
                })
                this.$el.append(task.render().el);
            }.bind(this));
            return this
        }
    });
    var TaskView = Backbone.View.extend({
        tagName: 'a',
        attributes: {
            'href': '#task/',
            'class': 'task link style_hover_light style_black'
        },
        template: _.template($('#task-template').html()),
        events: {},
        initialize: function() {
            // ставим ссылку на элемент
            
        },
        render: function() {
            var href = this.attributes.href + this.model.attributes.id
            this.$el
                .attr('href', href)
                .html(this.template(this.model.attributes));
            return this;
        }
    });
    var app = new TasksView();

    var ProjectRouter = Backbone.Router.extend({
        routes: {
            '': 'project',
            'task': 'task',
            'task/:id': 'taskId'
        },
        project: function () {
            console.log('индекс')
        },
        task: function () {
            console.log('таск')
        },
        taskId: function (id) {
            console.log('таск', id)
        }
    });
    new ProjectRouter();
    Backbone.history.start();
    // {pushState:true}

});
