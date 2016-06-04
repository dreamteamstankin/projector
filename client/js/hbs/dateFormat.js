module.exports = function(format, start, finish) {
    var date = moment(start).format(format);
    return date;
};