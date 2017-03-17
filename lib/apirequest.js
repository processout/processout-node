'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var APIRequest = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the API request
     * @type {string}
     */
    _id: null,

    /**
     * Project used to send the API request
     * @type {object}
     */
    _project: null,

    /**
     * API version used to process the request
     * @type {object}
     */
    _apiVersion: null,

    /**
     * Idempotency key used to identify the request
     * @type {string}
     */
    _idempotencyKey: null,

    /**
     * URL called
     * @type {string}
     */
    _url: null,

    /**
     * HTTP verb used in the request (GET, POST etc)
     * @type {string}
     */
    _method: null,

    /**
     * Headers sent with the request (client to server)
     * @type {dictionary}
     */
    _headers: null,

    /**
     * Body of the request (client to server)
     * @type {string}
     */
    _body: null,

    /**
     * Response code (such as 200 for a successful request)
     * @type {integer}
     */
    _responseCode: null,

    /**
     * Headers sent in the response (server to client)
     * @type {dictionary}
     */
    _responseHeaders: null,

    /**
     * Body of the response (client to server)
     * @type {string}
     */
    _responseBody: null,

    /**
     * Number of milliseconds needed to process the request
     * @type {float}
     */
    _responseMs: null,

    /**
     * Define whether or not the API request was made in the sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the API request was made
     * @type {string}
     */
    _createdAt: null,

    /**
     * APIRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The APIRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIRequest()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the API request
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the API request
     * @param {string} val
     * @return {APIRequest}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project used to send the API request
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project used to send the API request
     * @param {object} val
     * @return {APIRequest}
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
     * Get ApiVersion
     * API version used to process the request
     * @return {object}
     */
    getApiVersion: function() {
        return this._apiVersion;
    },

    /**
     * Set ApiVersion
     * API version used to process the request
     * @param {object} val
     * @return {APIRequest}
     */
    setApiVersion: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newAPIVersion().getClass())
            this._apiVersion = val;
        else {
            var obj = this._client.newAPIVersion();
            obj.fillWithData(val);
            this._apiVersion = obj;
        }
        return this;
    },

    /**
     * Get IdempotencyKey
     * Idempotency key used to identify the request
     * @return {string}
     */
    getIdempotencyKey: function() {
        return this._idempotencyKey;
    },

    /**
     * Set IdempotencyKey
     * Idempotency key used to identify the request
     * @param {string} val
     * @return {APIRequest}
     */
    setIdempotencyKey: function(val) {
        this._idempotencyKey = val;
        return this;
    },

    /**
     * Get Url
     * URL called
     * @return {string}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL called
     * @param {string} val
     * @return {APIRequest}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Method
     * HTTP verb used in the request (GET, POST etc)
     * @return {string}
     */
    getMethod: function() {
        return this._method;
    },

    /**
     * Set Method
     * HTTP verb used in the request (GET, POST etc)
     * @param {string} val
     * @return {APIRequest}
     */
    setMethod: function(val) {
        this._method = val;
        return this;
    },

    /**
     * Get Headers
     * Headers sent with the request (client to server)
     * @return {object}
     */
    getHeaders: function() {
        return this._headers;
    },

    /**
     * Set Headers
     * Headers sent with the request (client to server)
     * @param {object} val
     * @return {APIRequest}
     */
    setHeaders: function(val) {
        this._headers = val;
        return this;
    },

    /**
     * Get Body
     * Body of the request (client to server)
     * @return {string}
     */
    getBody: function() {
        return this._body;
    },

    /**
     * Set Body
     * Body of the request (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    setBody: function(val) {
        this._body = val;
        return this;
    },

    /**
     * Get ResponseCode
     * Response code (such as 200 for a successful request)
     * @return {int}
     */
    getResponseCode: function() {
        return this._responseCode;
    },

    /**
     * Set ResponseCode
     * Response code (such as 200 for a successful request)
     * @param {int} val
     * @return {APIRequest}
     */
    setResponseCode: function(val) {
        this._responseCode = val;
        return this;
    },

    /**
     * Get ResponseHeaders
     * Headers sent in the response (server to client)
     * @return {object}
     */
    getResponseHeaders: function() {
        return this._responseHeaders;
    },

    /**
     * Set ResponseHeaders
     * Headers sent in the response (server to client)
     * @param {object} val
     * @return {APIRequest}
     */
    setResponseHeaders: function(val) {
        this._responseHeaders = val;
        return this;
    },

    /**
     * Get ResponseBody
     * Body of the response (client to server)
     * @return {string}
     */
    getResponseBody: function() {
        return this._responseBody;
    },

    /**
     * Set ResponseBody
     * Body of the response (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    setResponseBody: function(val) {
        this._responseBody = val;
        return this;
    },

    /**
     * Get ResponseMs
     * Number of milliseconds needed to process the request
     * @return {float}
     */
    getResponseMs: function() {
        return this._responseMs;
    },

    /**
     * Set ResponseMs
     * Number of milliseconds needed to process the request
     * @param {float} val
     * @return {APIRequest}
     */
    setResponseMs: function(val) {
        this._responseMs = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @param {bool} val
     * @return {APIRequest}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the API request was made
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the API request was made
     * @param {string} val
     * @return {APIRequest}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIRequest}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["api_version"])
            this.setApiVersion(data["api_version"]);
        if (data["idempotency_key"])
            this.setIdempotencyKey(data["idempotency_key"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["method"])
            this.setMethod(data["method"]);
        if (data["headers"])
            this.setHeaders(data["headers"]);
        if (data["body"])
            this.setBody(data["body"]);
        if (data["response_code"])
            this.setResponseCode(data["response_code"]);
        if (data["response_headers"])
            this.setResponseHeaders(data["response_headers"]);
        if (data["response_body"])
            this.setResponseBody(data["response_body"]);
        if (data["response_ms"])
            this.setResponseMs(data["response_ms"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the API requests.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/api-requests";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['api_requests'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newAPIRequest();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find an API request by its ID.
	 * @param string apiRequestId
     * @param {object} options
     * @return {this}
     */
    find: function(apiRequestId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/api-requests/{request_id}";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['api_request'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
