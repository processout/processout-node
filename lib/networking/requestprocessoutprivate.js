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

        req.headers['API-Version'] = '1.3.0.0';

        if (typeof options === 'undefined')
            return req;

        if ('idempotency_key' in options)
            req.headers['Idempotency-Key'] = options['idempotency_key'];
        if ('disable_logging' in options)
            req.headers['Disable-Logging'] = options['disable_logging'];

        return req;
    },

    /**
     * Prepare the request data
     * @param  object data
     * @param  object options
     * @return object data
     */
    getData: function(data, options) {
        if (typeof options === 'undefined')
            return data;

        if ('expand' in options)
            data['expand'] = options['expand'];

        if ('filter' in options)
            data['filter'] = options['filter'];

        return data;
    },

    /**
     * Generate a get request
     * @param  string path
     * @param  object data
     * @param  object options
     * @return restler
     */
    get: function(path, data, options) {
        data = this.getData(data, options);

        var out = new Array();
        for (key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.get(this._instance.getHost() + path + '?' +
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
        return rest.postJson(this._instance.getHost() + path,
            this.getData(data, options),
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
        return rest.putJson(this._instance.getHost() + path,
            this.getData(data, options),
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
        return rest.deleteJson(this._instance.getHost() + path,
            this.getData(data, options),
            this.prepare({}, options));
    }
}, {});
