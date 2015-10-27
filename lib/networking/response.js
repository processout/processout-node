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
     * @param  {object}  result The result returned by parsing the response
     * @param  {restler} resp Restler object
     */
    constructor: function(result, resp) {
        this.raw        = resp;
        this.statusCode = resp.statusCode;
        this.headers    = resp.headers;
        this.rawBody    = resp.raw;
        this.body       = result;
    },

    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    isSuccess: function() {
        
        
        
        
        if( ! ('success' in this.body) || ! this.body['success'])
            return false;
        
        

        return true;
    },

    /**
     * Get the error message of the response
     * @return {string} error message
     */
    getMessage: function() {
        var message = '';
        
        
        if('message' in this.body)
            message = message + this.body['message'];
        
        
        
        

        return message;
    },

    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    check: function() {
        if(! this.isSuccess()) {
            switch(this.statusCode) {
                case 404:
                    return new Error('[NOT FOUND ERROR] The resource could not be found (404): ' +
                        this.getMessage());
                case 401:
                    return new Error('[API AUTHENTICATION ERROR] Your ProcessOut credentials could not be verified (401): ' +
                        this.getMessage());
            }

            return new Error('[API ERROR] ProcessOut returned an error (' +
                this.statusCode + '): ' + this.getMessage());
        }

        return null;
    }
});
