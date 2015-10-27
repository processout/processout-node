'use strict';

var rest = require('restler');
var Base = require('basejs');
var ProcessOut = require('../processout');

var RequestProcessoutPublic = module.exports = Base.extend({
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
        

        

        

        return req;
    },

    /**
     * Generate a get request
     * @param  string path
     * @param  array  data
     * @return rester
     */
    get: function(path, data) {
        var out = new Array();
        for (key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.get(ProcessOut.HOST + path + '?' +
            out.join('&'), this.authenticate({}));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  array  data
     * @return rester
     */
    post: function(path, data) {
        return rest.postJson(ProcessOut.HOST + path,
            data,
            this.authenticate({}));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  array  data
     * @return rester
     */
    put: function(path, data) {
        return rest.putJson(ProcessOut.HOST + path,
            data,
            this.authenticate({}));
    },

    /**
     * Generate a post request
     * @param  string path
     * @param  array  data
     * @return rester
     */
    delete: function(path, data) {
        return rest.deleteJson(ProcessOut.HOST + path,
            data,
            this.authenticate({}));
    }
}, {});
