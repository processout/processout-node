'use strict';

var rest = require('restler');
var Base = require('basejs');
var ProcessOut = require('../processout');

// Fix zlib compression
var zlib = require('zlib');
var original_decode = rest.Request.prototype._decode;
rest.Request.prototype._decode = function(body, response, callback) {
    if (response.headers['content-encoding'] == "gzip") {
        zlib.gunzip(body, {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
        }, callback);
    } else {
        original_decode(body, response, callback);
    }
};

var Request = module.exports = Base.extend({
    _client: null,

    constructor: function(client) {
        this._client = client;
    },

    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    authenticate: function(req) {
        req.username = this._client.getProjectID();
        req.password = this._client.getProjectSecret();
        return req;
    },

    /**
     * Prepare the request
     * @param  {object} req
     * @param  {object} options
     * @return {object}
     */
    prepare: function(req, options) {
        this.authenticate(req);

        if (! req.hasOwnProperty('headers'))
            req.headers = {};

        req.headers['API-Version'] = '1.4.0.0';
        req.headers['User-Agent'] = 'ProcessOut NodeJS-Bindings/6.11.1';

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
    },

    /**
     * Prepare the request data
     * @param  {object} data
     * @param  {object} options
     * @return {object}
     */
    getData: function(data, options) {
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
    },

    /**
     * Generate a get request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    get: function(path, data, options) {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.get(this._client.getHost() + path + '?' +
            out.join('&'), this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    post: function(path, data, options) {
        return rest.postJson(this._client.getHost() + path,
            this.getData(data, options),
            this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    put: function(path, data, options) {
        return rest.putJson(this._client.getHost() + path,
            this.getData(data, options),
            this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    delete: function(path, data, options) {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.del(this._client.getHost() + path + '?' +
            out.join('&'), this.prepare({}, options));
    }
}, {});
