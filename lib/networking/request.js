"use strict";
var fetch = require("node-fetch");
var Request = /** @class */ (function () {
    function Request(client) {
        this.client = client;
    }
    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    Request.prototype.authenticate = function (req) {
        req.headers['Authorization'] = 'Basic ' + Buffer.from(this.client.getProjectID() + ":" + this.client.getProjectSecret()).toString('base64');
        return req;
    };
    /**
     * Prepare the request
     * @param  {object} req
     * @param  {any} options
     * @return {object}
     */
    Request.prototype.prepare = function (req, options) {
        if (!req.hasOwnProperty('headers'))
            req.headers = {};
        this.authenticate(req);
        req.compress = true;
        req.headers['API-Version'] = '1.4.0.0';
        req.headers['User-Agent'] = 'ProcessOut NodeJS-Bindings/8.0.0';
        req.headers['Content-Type'] = 'application/json';
        req.headers['Accept'] = 'application/json';
        if (typeof options === 'undefined')
            return req;
        if ('idempotencyKey' in options)
            req.headers['Idempotency-Key'] = options['idempotencyKey'];
        if ('disableLogging' in options)
            req.headers['Disable-Logging'] = options['disableLogging'];
        req.timeout = 65000;
        if ('timeout' in options)
            req.timeout = options.timeout;
        return req;
    };
    /**
     * Prepare the request data
     * @param  {object} data
     * @param  {object} options
     * @return {object}
     */
    Request.prototype.getData = function (data, options) {
        if (typeof options === 'undefined')
            return data;
        if ('expand' in options)
            data['expand'] = options['expand'];
        if ('filter' in options)
            data['filter'] = options['filter'];
        if ('limit' in options)
            data['limit'] = options['limit'];
        if ('endBefore' in options)
            data['end_before'] = options['endBefore'];
        if ('startAfter' in options)
            data['start_after'] = options['startAfter'];
        return data;
    };
    /**
     * Generate a get request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    Request.prototype.get = function (path, data, options) {
        data = this.getData(data, options);
        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }
        return fetch(this.client.getHost() + path + suffix, this.prepare({
            method: 'GET'
        }, options));
    };
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    Request.prototype.post = function (path, data, options) {
        return fetch(this.client.getHost() + path, this.prepare({
            method: 'POST',
            body: JSON.stringify(this.getData(data, options))
        }, options));
    };
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    Request.prototype.put = function (path, data, options) {
        return fetch(this.client.getHost() + path, this.prepare({
            method: 'PUT',
            body: JSON.stringify(this.getData(data, options))
        }, options));
    };
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    Request.prototype.delete = function (path, data, options) {
        data = this.getData(data, options);
        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }
        return fetch(this.client.getHost() + path + suffix, this.prepare({
            method: 'DELETE'
        }, options));
    };
    return Request;
}());
module.exports = Request;
//# sourceMappingURL=request.js.map