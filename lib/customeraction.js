'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


var CustomerAction = module.exports = Base.extend({
    _instance: null,

    /**
     * URL to which you may redirect the customer
     * @type string
     */
    _url: "",

    /**
     * CustomerAction constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Url
     * URL to which you may redirect the customer
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect the customer
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return CustomerAction
     */
    fillWithData: function(data) {
        if (data["url"])
            this.setUrl(data["url"]);
        return this;
    },

    
}, {
    
});
