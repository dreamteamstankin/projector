/*
class Storage {
    constructor() {
        super();
    }
    setItem (key, value) {
        try {
            if (allKeys.indexOf(key) === -1) {
                allKeys.push(key);
                storage[allKeysString] = JSON.stringify(allKeys);
            }
            storage[key] = value;
        }
        catch (err) {
            clear();
        }
    }
    getItem (key) {
        var item = storage[key];
        if (item === undefined) {
            //localStorage returns null, not undefined if an item does not exist
            //so do the same if using the fallback
            item = null;
        }
        return item;
    }

    removeItem (key) {
        var indexOfKey = allKeys.indexOf(key);
        if (indexOfKey !== -1) {
            //remove the item from storage
            if (storage === fallbackStorage) {
                delete storage[key];
            }
            else {
                storage.removeItem(key);
            }
            //remove the key from the keys array
            allKeys.splice(indexOfKey, 1);
            //store the key array minus the removed item
            storage[allKeysString] = JSON.stringify(allKeys);
        }
    }

    _setItem (key, value, ttl, path, domain, secure) {
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

    _getItem (key) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : "";
    }

    _removeItem (key, path, domain) {
        path = (!path || typeof path != 'string') ? '' : path;
        domain = (!domain || typeof domain != 'string') ? '' : domain;
        if (this._getItem(key)) this._setItem(key, '', 'Thu, 01-Jan-70 00:00:01 GMT', path, (!domain || domain == '') ? document.domain : domain);
    }

    clear () {
        if (storage === fallbackStorage) {
            fallbackStorage = {};
            storage = fallbackStorage;
        }
        else {
            storage.clear();
        }
        allKeys = [];
    }
}

export { Storage }



window.Projector = window.Projector || {};
Projector.Storage = Storage();*/
