'use strict';

var Base = require('basejs');

var Response = module.exports = Base.extend({
    /**
     * Raw response (restler object)
     * @type {restler}
     */
    raw: null,

    /**
     * Status code of the response
     * @type {int}
     */
    statusCode: null,

    /**
     * Headers of the response
     * @type {Object}
     */
    headers: null,

    /**
     * Unserialized body of the response
     * @type {Object}
     */
    body: null,

    /**
     * Serialized body of the response (raw body)
     * @type {string}
     */
    rawBody: null,

    /**
     * Response constructor
     * @param  {Object} data Response data
     * @param  {restler} resp Reslter object
     */
    constructor: function(data, resp) {
        this.raw        = resp;
        this.statusCode = resp.statusCode;
        this.headers    = resp.headers;
        this.body       = data;
        this.rawBody    = resp.raw;
    },

    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    isSuccess: function() {
        if(! ('success' in this.body))
            return false;

        return this.body.success;
    },

    /**
     * Get the error message of the response
     * @return {string} error message
     */
    getMessage: function() {
        if(! ('message' in this.body))
            return null;

        return this.body.message;
    },

    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    check: function() {
        switch(this.statusCode) {
            case 400:
                return new Error('[API ERROR] ' + this.getMessage());
            case 404:
                return new Error('[NOT FOUND ERROR] ' + this.getMessage());
            case 401:
            case 402:
                return new Error('[API AUTHENTICATION ERROR] ' +
                    this.getMessage());
        }

        if(this.statusCode < 200 || this.statusCode > 206 ||
                ! this.isSuccess()) {
            return new Error('[API ERROR] ProcessOut returned an error which couldn\'t be identified (' +
                this.statusCode + '): ' + this.getMessage());
        }

        return null;
    }
});