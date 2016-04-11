'use strict';

var rest = require('restler');
var Base = require('basejs');
var ProcessOut = require('../processout');

var RequestProcessoutPrivate = module.exports = Base.extend({
    _instance: null,

    constructor: function(instance) {
        this._instance = instance;
    },

    /**
     * Authenticate the request
     * @param  object req
     * @return object req
     */
    authenticate: function(req) {
        req.username = this._instance.getProjectId();
        req.password = this._instance.getProjectSecret();
        return req;
    },

    /**
     * Prepare the request
     * @param  object req
     * @param  object options
     * @return object req
     */
    prepare: function(req, options) {
        this.authenticate(req);
        
        if (! req.hasOwnProperty('headers'))
            req.headers = {};

        req.headers['API-Version'] = '1.1.0.0';

        if (typeof options === 'undefined')
            return req;

        if ('idempotency_key' in options)
            req.headers['Idempotency-Key'] = options['idempotency_key'];

        return req;
    },

    /**
     * Generate a get request
     * @param  string path
     * @param  object data
     * @param  object options
     * @return restler
     */
    get: function(path, data, options) {
        var out = new Array();
        for (key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.get(ProcessOut.HOST + path + '?' +
            out.join('&'), this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  object data
     * @param  object options
     * @return restler
     */
    post: function(path, data, options) {
        return rest.postJson(ProcessOut.HOST + path,
            data,
            this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  object data
     * @param  object options
     * @return restler
     */
    put: function(path, data, options) {
        return rest.putJson(ProcessOut.HOST + path,
            data,
            this.prepare({}, options));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  object data
     * @param  object options
     * @return restler
     */
    delete: function(path, data, options) {
        return rest.deleteJson(ProcessOut.HOST + path,
            data,
            this.prepare({}, options));
    }
}, {});
