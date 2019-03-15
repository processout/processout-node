'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Webhook = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the webhook
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the webhook belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the webhook belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Event the webhook is linked to
     * @type {object}
     */
    _event: null,

    /**
     * ID of the event the webhook is linked to
     * @type {string}
     */
    _eventId: null,

    /**
     * URL to which the webhook will be posted
     * @type {string}
     */
    _requestUrl: null,

    /**
     * Method used to send the webhook (GET or POST)
     * @type {string}
     */
    _requestMethod: null,

    /**
     * The response body the webhook received when sending its payload
     * @type {string}
     */
    _responseBody: null,

    /**
     * The response code the webhook received when sending its payload
     * @type {string}
     */
    _responseCode: null,

    /**
     * The response headers the webhook received when sending its payload
     * @type {string}
     */
    _responseHeaders: null,

    /**
     * The time it took for the webhook to send its payload
     * @type {integer}
     */
    _responseTimeMs: null,

    /**
     * The status of the webhook. Either delivered or failed
     * @type {string}
     */
    _status: null,

    /**
     * Date at which the webhook was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Date at webhook will be/is released
     * @type {string}
     */
    _releaseAt: null,

    /**
     * Webhook constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Webhook object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhook()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the webhook
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the webhook
     * @param {string} val
     * @return {Webhook}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the webhook belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the webhook belongs
     * @param {object} val
     * @return {Webhook}
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
     * @return {Webhook}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Event
     * Event the webhook is linked to
     * @return {object}
     */
    getEvent: function() {
        return this._event;
    },

    /**
     * Set Event
     * Event the webhook is linked to
     * @param {object} val
     * @return {Webhook}
     */
    setEvent: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newEvent().getClass())
            this._event = val;
        else {
            var obj = this._client.newEvent();
            obj.fillWithData(val);
            this._event = obj;
        }
        return this;
    },

    /**
     * Get EventId
     * ID of the event the webhook is linked to
     * @return {string}
     */
    getEventId: function() {
        return this._eventId;
    },

    /**
     * Set EventId
     * ID of the event the webhook is linked to
     * @param {string} val
     * @return {Webhook}
     */
    setEventId: function(val) {
        this._eventId = val;
        return this;
    },

    /**
     * Get RequestUrl
     * URL to which the webhook will be posted
     * @return {string}
     */
    getRequestUrl: function() {
        return this._requestUrl;
    },

    /**
     * Set RequestUrl
     * URL to which the webhook will be posted
     * @param {string} val
     * @return {Webhook}
     */
    setRequestUrl: function(val) {
        this._requestUrl = val;
        return this;
    },

    /**
     * Get RequestMethod
     * Method used to send the webhook (GET or POST)
     * @return {string}
     */
    getRequestMethod: function() {
        return this._requestMethod;
    },

    /**
     * Set RequestMethod
     * Method used to send the webhook (GET or POST)
     * @param {string} val
     * @return {Webhook}
     */
    setRequestMethod: function(val) {
        this._requestMethod = val;
        return this;
    },

    /**
     * Get ResponseBody
     * The response body the webhook received when sending its payload
     * @return {string}
     */
    getResponseBody: function() {
        return this._responseBody;
    },

    /**
     * Set ResponseBody
     * The response body the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseBody: function(val) {
        this._responseBody = val;
        return this;
    },

    /**
     * Get ResponseCode
     * The response code the webhook received when sending its payload
     * @return {string}
     */
    getResponseCode: function() {
        return this._responseCode;
    },

    /**
     * Set ResponseCode
     * The response code the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseCode: function(val) {
        this._responseCode = val;
        return this;
    },

    /**
     * Get ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @return {string}
     */
    getResponseHeaders: function() {
        return this._responseHeaders;
    },

    /**
     * Set ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    setResponseHeaders: function(val) {
        this._responseHeaders = val;
        return this;
    },

    /**
     * Get ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @return {int}
     */
    getResponseTimeMs: function() {
        return this._responseTimeMs;
    },

    /**
     * Set ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @param {int} val
     * @return {Webhook}
     */
    setResponseTimeMs: function(val) {
        this._responseTimeMs = val;
        return this;
    },

    /**
     * Get Status
     * The status of the webhook. Either delivered or failed
     * @return {string}
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * The status of the webhook. Either delivered or failed
     * @param {string} val
     * @return {Webhook}
     */
    setStatus: function(val) {
        this._status = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the webhook was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the webhook was created
     * @param {string} val
     * @return {Webhook}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Get ReleaseAt
     * Date at webhook will be/is released
     * @return {string}
     */
    getReleaseAt: function() {
        return this._releaseAt;
    },

    /**
     * Set ReleaseAt
     * Date at webhook will be/is released
     * @param {string} val
     * @return {Webhook}
     */
    setReleaseAt: function(val) {
        this._releaseAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Webhook}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["event"])
            this.setEvent(data["event"]);
        if (data["event_id"])
            this.setEventId(data["event_id"]);
        if (data["request_url"])
            this.setRequestUrl(data["request_url"]);
        if (data["request_method"])
            this.setRequestMethod(data["request_method"]);
        if (data["response_body"])
            this.setResponseBody(data["response_body"]);
        if (data["response_code"])
            this.setResponseCode(data["response_code"]);
        if (data["response_headers"])
            this.setResponseHeaders(data["response_headers"]);
        if (data["response_time_ms"])
            this.setResponseTimeMs(data["response_time_ms"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["release_at"])
            this.setReleaseAt(data["release_at"]);
        return this;
    },

    
}, {});
