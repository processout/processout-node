'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var APIVersion = module.exports = Base.extend({
    _client: null,

    /**
     * Name used to identify the API version
     * @type {string}
     */
    _name: null,

    /**
     * Description of the API version. Can contain a changelog
     * @type {string}
     */
    _description: null,

    /**
     * Date at which the API version was released
     * @type {string}
     */
    _createdAt: null,

    /**
     * APIVersion constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The APIVersion object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIVersion()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Name
     * Name used to identify the API version
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name used to identify the API version
     * @param {string} val
     * @return {APIVersion}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Description
     * Description of the API version. Can contain a changelog
     * @return {string}
     */
    getDescription: function() {
        return this._description;
    },

    /**
     * Set Description
     * Description of the API version. Can contain a changelog
     * @param {string} val
     * @return {APIVersion}
     */
    setDescription: function(val) {
        this._description = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the API version was released
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the API version was released
     * @param {string} val
     * @return {APIVersion}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIVersion}
     */
    fillWithData: function(data) {
        if (data["name"])
            this.setName(data["name"]);
        if (data["description"])
            this.setDescription(data["description"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    
}, {});
