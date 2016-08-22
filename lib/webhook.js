'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Webhook = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the recurring invoice
     * @type string
     */
    _id: "",

    /**
     * Event the webhook is linked to
     * @type object
     */
    _event: null,

    /**
     * URL to which the webhook will be posted
     * @type string
     */
    _requestUrl: "",

    /**
     * Method used to send the webhook (GET or POST)
     * @type string
     */
    _requestMethod: "",

    /**
     * The response body the webhook received when sending its payload
     * @type string
     */
    _responseBody: "",

    /**
     * The response code the webhook received when sending its payload
     * @type string
     */
    _responseCode: "",

    /**
     * The response headers the webhook received when sending its payload
     * @type string
     */
    _responseHeaders: "",

    /**
     * The time it took for the webhook to send its payload
     * @type integer
     */
    _responseTimeMs: 0,

    /**
     * The status of the webhook. 0: pending, 1: success, 2: error
     * @type integer
     */
    _status: 0,

    /**
     * Date at which the webhook was created
     * @type string
     */
    _createdAt: "",

    /**
     * Date at webhook will be/is released
     * @type string
     */
    _releaseAt: "",

    /**
     * Webhook constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the recurring invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the recurring invoice
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Event
     * Event the webhook is linked to
     * @return object
     */
    getEvent: function() {
        return this._event;
    },

    /**
     * Set Event
     * Event the webhook is linked to
     * @param object val
     * @return this
     */
    setEvent: function(val) {
        if (typeof val === 'object')
            this._event = val;
        else {
            var obj = new Event(this._instance);
            obj.fillWithData(val);
            this._event = obj;
        }
        return this;
    },

    /**
     * Get RequestUrl
     * URL to which the webhook will be posted
     * @return float
     */
    getRequestUrl: function() {
        return this._requestUrl;
    },

    /**
     * Set RequestUrl
     * URL to which the webhook will be posted
     * @param float val
     * @return this
     */
    setRequestUrl: function(val) {
        this._requestUrl = val;
        return this;
    },

    /**
     * Get RequestMethod
     * Method used to send the webhook (GET or POST)
     * @return float
     */
    getRequestMethod: function() {
        return this._requestMethod;
    },

    /**
     * Set RequestMethod
     * Method used to send the webhook (GET or POST)
     * @param float val
     * @return this
     */
    setRequestMethod: function(val) {
        this._requestMethod = val;
        return this;
    },

    /**
     * Get ResponseBody
     * The response body the webhook received when sending its payload
     * @return float
     */
    getResponseBody: function() {
        return this._responseBody;
    },

    /**
     * Set ResponseBody
     * The response body the webhook received when sending its payload
     * @param float val
     * @return this
     */
    setResponseBody: function(val) {
        this._responseBody = val;
        return this;
    },

    /**
     * Get ResponseCode
     * The response code the webhook received when sending its payload
     * @return float
     */
    getResponseCode: function() {
        return this._responseCode;
    },

    /**
     * Set ResponseCode
     * The response code the webhook received when sending its payload
     * @param float val
     * @return this
     */
    setResponseCode: function(val) {
        this._responseCode = val;
        return this;
    },

    /**
     * Get ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @return float
     */
    getResponseHeaders: function() {
        return this._responseHeaders;
    },

    /**
     * Set ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @param float val
     * @return this
     */
    setResponseHeaders: function(val) {
        this._responseHeaders = val;
        return this;
    },

    /**
     * Get ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @return int
     */
    getResponseTimeMs: function() {
        return this._responseTimeMs;
    },

    /**
     * Set ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @param int val
     * @return this
     */
    setResponseTimeMs: function(val) {
        this._responseTimeMs = val;
        return this;
    },

    /**
     * Get Status
     * The status of the webhook. 0: pending, 1: success, 2: error
     * @return int
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * The status of the webhook. 0: pending, 1: success, 2: error
     * @param int val
     * @return this
     */
    setStatus: function(val) {
        this._status = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the webhook was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the webhook was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Get ReleaseAt
     * Date at webhook will be/is released
     * @return float
     */
    getReleaseAt: function() {
        return this._releaseAt;
    },

    /**
     * Set ReleaseAt
     * Date at webhook will be/is released
     * @param float val
     * @return this
     */
    setReleaseAt: function(val) {
        this._releaseAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Webhook
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["event"])
            this.setEvent(data["event"]);
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

    
}, {
    
});