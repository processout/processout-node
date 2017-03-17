'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var WebhookEndpoint = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the webhook endpoint
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the webhook endpoint belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * URL to which the webhook endpoint points to
     * @type {string}
     */
    _url: null,

    /**
     * Slice of string representing the whitelisted events posted to the endpoint
     * @type {object}
     */
    _eventsWhitelist: null,

    /**
     * Define whether or not the webhook endpoint is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the webhook endpoint was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * WebhookEndpoint constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The WebhookEndpoint object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhookEndpoint()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the webhook endpoint
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the webhook endpoint
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the webhook endpoint belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the webhook endpoint belongs
     * @param {object} val
     * @return {WebhookEndpoint}
     */
    setProject: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._project = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get ProjectId
     * ID of the project to which the webhook belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the webhook belongs
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Url
     * URL to which the webhook endpoint points to
     * @return {string}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which the webhook endpoint points to
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @return {object}
     */
    getEventsWhitelist: function() {
        return this._eventsWhitelist;
    },

    /**
     * Set EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @param {object} val
     * @return {WebhookEndpoint}
     */
    setEventsWhitelist: function(val) {
        this._eventsWhitelist = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @param {bool} val
     * @return {WebhookEndpoint}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the webhook endpoint was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the webhook endpoint was created
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {WebhookEndpoint}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["events_whitelist"])
            this.setEventsWhitelist(data["events_whitelist"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    
}, {});
