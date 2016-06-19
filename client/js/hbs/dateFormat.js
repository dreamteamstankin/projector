module.exports = function(format, date) {
    if (!date) return '—';
    return moment(date).format(format)
};