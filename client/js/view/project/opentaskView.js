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
            'click .js_edit_subtask': 'editSubtask'
        };
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        View.apply(this);
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

    saveChanges(cb) {
        this.model.save(null, {
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
        if (e.keyCode === 13) { // ENTER
            var val = e.currentTarget.value;
            var comments = this.model.attributes.comments;
            var newComment = {
                id: comments.length,
                created: new Date,
                content: val,
                user_id: this.currentUser._id || null,
                userName: this.currentUser.name || null
            };
            comments.push(newComment);
            this.model.attributes.comments = comments;
            self.saveChanges(()=>{
                e.currentTarget.value = '';
                var extended = _.extend(newComment, {
                    firstLetterName: newComment.userName[0]
                });
                commentList.append(commentTemplate({comment:extended}));
                self.delegateEvents();
            })
        }
    }

    removeComment(e) {
        e.preventDefault();
        var self = this;
        var id = $(e.currentTarget).data('id');
        var comments = this.model.attributes.comments;
        _.each(comments, function(comment, index){
            if (comment.id === id) {
                comments.splice(index, 1);
            }
        });
        this.saveChanges(() => {
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
        if (e.keyCode === 13) { // ENTER
            var val = e.currentTarget.value;
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
            self.saveChanges(()=>{
                e.currentTarget.value = '';
                subtaskList.append(subtaskTemplate({subtask:newSubtask}));
                self.delegateEvents();
            })
        }
    }

    removeSubtask(e) {
        e.preventDefault();
        var self = this;
        var id = $(e.currentTarget).data('id');
        var subtasks = this.model.attributes.subtasks;
        _.each(subtasks, function(task, index){
            if (task.id === id) {
                subtasks.splice(index, 1);
            }
        });
        this.saveChanges(() => {
            var item = self.$el.find(`.js_subtask_item[data-id="${id}"]`);
            item.remove();
        });
    }

    editSubtask(e) {
        e.preventDefault();
        console.log('edit', e);
    }
}

export { openTaskView }