var _hoursToExpireDate = function (ttl) {
    if (parseInt(ttl) == 'NaN' )
        return '';
    else {
        var now = new Date();
        now.setTime(now.getTime() + (parseInt(ttl) * 60 * 60 * 1000));
        return now.toUTCString();
    }
};

class StorageHelper {
    constructor() {}
    setCookie (key, value, ttl, path, domain, secure) {
        var cookie = [key + '=' + value];
        if (ttl) {
            if (typeof ttl === 'string') {
                cookie.push('expires=' + ttl);
            }
            else {
                ttl = ttl ? ttl : 365 * 24;
                cookie.push('expires=' + _hoursToExpireDate(ttl));
            }
        }
        cookie.push('path=' + ((!path || path == '') ? '/' : path));
        cookie.push('domain=' + ((!domain || domain == '') ? document.domain : domain));

        if (secure) cookie.push('secure');
        document.cookie = cookie.join(';');
    }

    getCookie (key) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : "";
    }

    removeCookie (key, path, domain) {
        path = (!path || typeof path != 'string') ? '' : path;
        domain = (!domain || typeof domain != 'string') ? '' : domain;
        if (this.getCookie(key)) this.setCookie(key, '', 'Thu, 01-Jan-70 00:00:01 GMT', path, (!domain || domain == '') ? document.domain : domain);
    }
}

var Storage = new StorageHelper();

export { Storage }
