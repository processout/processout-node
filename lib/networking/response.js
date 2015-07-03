'use strict';

var Base = require('basejs');

var Response = module.exports = Base.extend({
    raw:        null,
    statusCode: null,
    headers:    {},
    body:       null,
    rawBody:    null,

    constructor: function(data, resp) {
        this.raw        = resp;
        this.statusCode = resp.statusCode;
        this.headers    = resp.headers;
        this.body       = data;
        this.rawBody    = resp.raw;
    },

    isSuccess: function() {
        if(! ('success' in this.body))
            return false;

        return this.body.success;
    },

    getMessage: function() {
        if(! ('message' in this.body))
            return null;

        return this.body.message;
    },

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