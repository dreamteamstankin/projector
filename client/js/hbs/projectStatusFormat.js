var config = [{
    type: 'open',
    content: 'Открыто',
    isLink: true
}, {
    type: 'wait',
    content: 'В ожидании'
}, {
    type: 'close',
    content: 'Закрыто'
}, {
    type: 'cancel',
    content: 'Отменено'
}, {
    type: 'progress',
    content: 'В работе'
}, {
    type: 'done',
    content: 'Сделано'
}];

module.exports = function (status) {
    var element;
    var currentStatus = config[status];
    if (currentStatus) {
        var text = document.createElement('span');

        text.className = 'header_tag';
        text.innerHTML = currentStatus.content;

        if (currentStatus.isLink) {
            element = document.createElement('a');
            element.setAttribute('url', '#');
            element.className = 'link style_solid label label_type_' + currentStatus.type;
        } else {
            element = document.createElement('div');
            element.className = 'label label_type_' + currentStatus.type;
        }

        element.setAttribute('data-status', status);
        element.appendChild(text);
        return element.outerHTML;
    } else {
        console.warn('статус неопределен ')
        return '';
    }
};