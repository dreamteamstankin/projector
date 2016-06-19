import { Storage } from '../../helpers/storage'
import { TaskModel, Tasks  } from '../../model/taskModel'
import { UserModel, Users } from '../../model/userModel'

const { View } = Backbone;
const listViewItemTemplate = require('../../../templates/project/opentask.hbs');
const subtaskTemplate = require('../../../templates/components/subtask.hbs');
const commentTemplate = require('../../../templates/components/comment.hbs');

class openTaskView extends View {
    constructor(task) {
        super({
            tagName: 'td',
            className: 'opentask__wrap',
            attributes: {
                'colspan': 6
            }
        });
        this.model = task;
        this.template = listViewItemTemplate;
        this.events = {
            'keypress .js_add_comment': 'addComment',
            'click .js_remove_comment': 'removeComment',
            'click .js_edit_comment': 'editComment',
            'keypress .js_add_subtask': 'addSubtask',
            'click .js_remove_subtask': 'removeSubtask',
            'click .js_edit_subtask': 'editSubtask',
            'change .js_subtask_checked' : 'checkedSubtask'
        };
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        View.apply(this);
    }

    render() {
        this.data = _.extend(this.model.attributes, {
            workflow: [{
                title: 'Открыто',
                date_finish: new Date()
            }, {
                title: 'Разработка',
                date_finish: '2016-10-10',
                username: 'Ахатов',
                isActive: true
            }, {
                title: 'Тестирование',
                date_finish: '2016-10-12'
            }, {
                title: 'Согласование',
                date_finish: '2016-10-13',
                username: 'Иванов'
            }, {
                title: 'Срок',
                date_finish: '2016-10-15'
            }],
            description: 'Описание проекта',
            finish: '2016-10-15'
        });
        this.$el.html(this.template(this.data));
        return this;
    }

    saveChanges(data, cb) {
        this.model.save(data, {
            headers: {
                company_id: Storage.getCookie('company_id'),
                token: Storage.getCookie('token')
            },
            success: cb
        });
    }

    addComment(e) {
        var self = this;
        var commentList = this.$el.find('.js_comments');
        var val = e.currentTarget.value;
        if (e.keyCode === 13 && val.length) { // ENTER
            var comments = this.model.attributes.comments;
            var newComment = {
                id: comments.length,
                created: new Date,
                content: val,
                user_id: this.currentUser._id || null,
                userName: this.currentUser.name || null
            };
            comments.push(newComment);
            self.saveChanges(comments, ()=> {
                e.currentTarget.value = '';
                var extended = _.extend(newComment, {
                    firstLetterName: newComment.userName[0]
                });
                commentList.append(commentTemplate({comment: extended}));
                self.delegateEvents();
            })
        }
    }

    removeComment(e) {
        e.preventDefault();
        var self = this;
        var id = $(e.currentTarget).data('id');
        var comments = this.model.attributes.comments;
        _.each(comments, function (comment, index) {
            if (comment.id === id) {
                comments.splice(index, 1);
            }
        });
        this.saveChanges(comments, () => {
            var item = self.$el.find(`.js_comment_item[data-id="${id}"]`);
            item.remove();
        });
    }

    editComment(e) {
        e.preventDefault();
        console.log('edit', e);
    }

    addSubtask(e) {
        var self = this;
        var subtaskList = this.$el.find('.js_subtasks');
        var val = e.currentTarget.value;
        if (e.keyCode === 13 && val.length) { // ENTER
            var subtasks = this.model.attributes.subtasks;
            var newSubtask = {
                id: subtasks.length,
                completed: false,
                date_start: new Date,
                date_finish: null,
                count_money: 0,
                count_time: 0,
                title: val,
                user_id: this.currentUser._id || null,
                userName: this.currentUser.name || null
            };
            subtasks.push(newSubtask);
            self.saveChanges(subtasks, ()=> {
                e.currentTarget.value = '';
                subtaskList.append(subtaskTemplate({subtask: newSubtask}));
                self.delegateEvents();
            })
        }
    }

    removeSubtask(e) {
        e.preventDefault();
        var self = this;
        var id = $(e.currentTarget).data('id');
        var subtasks = this.model.attributes.subtasks;
        _.each(subtasks, function (task, index) {
            if (task && task.id === id) {
                subtasks.splice(index, 1);
            }
        });
        this.saveChanges(subtasks, () => {
            var item = self.$el.find(`.js_subtask_item[data-id="${id}"]`);
            item.remove();
        });
    }

    editSubtask(e) {
        e.preventDefault();
        console.log('edit', e);
    }

    checkedSubtask (e) {
        e.preventDefault();
        var id = $(e.currentTarget).parent().parent().data('id');
        var subtasks = this.model.attributes.subtasks;
        _.each(subtasks, function (task) {
            if (task && task.id === id) {
                task.completed = e.currentTarget.checked;
            }
        });
        this.saveChanges(subtasks);
    }
}

export { openTaskView }