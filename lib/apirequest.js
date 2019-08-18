"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var APIRequest = /** @class */ (function () {
    /**
     * APIRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function APIRequest(client, prefill) {
        this.client = null;
        /**
         * ID of the API request
         * @type {string}
         */
        this.id = null;
        /**
         * Project used to send the API request
         * @type {p.Project}
         */
        this.project = null;
        /**
         * API version used to process the request
         * @type {p.APIVersion}
         */
        this.apiVersion = null;
        /**
         * Idempotency key used to identify the request
         * @type {string}
         */
        this.idempotencyKey = null;
        /**
         * URL called
         * @type {string}
         */
        this.url = null;
        /**
         * HTTP verb used in the request (GET, POST etc)
         * @type {string}
         */
        this.method = null;
        /**
         * Headers sent with the request (client to server)
         * @type {any}
         */
        this.headers = null;
        /**
         * Body of the request (client to server)
         * @type {string}
         */
        this.body = null;
        /**
         * Response code (such as 200 for a successful request)
         * @type {number}
         */
        this.responseCode = null;
        /**
         * Headers sent in the response (server to client)
         * @type {any}
         */
        this.responseHeaders = null;
        /**
         * Body of the response (client to server)
         * @type {string}
         */
        this.responseBody = null;
        /**
         * Number of milliseconds needed to process the request
         * @type {number}
         */
        this.responseMs = null;
        /**
         * Define whether or not the API request was made in the sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the API request was made
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The APIRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIRequest()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    APIRequest.prototype.getProcessOutObjectClass = function () {
        return "APIRequest";
    };
    /**
     * Get Id
     * ID of the API request
     * @return {string}
     */
    APIRequest.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the API request
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project used to send the API request
     * @return {p.Project}
     */
    APIRequest.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project used to send the API request
     * @param {p.Project} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ApiVersion
     * API version used to process the request
     * @return {p.APIVersion}
     */
    APIRequest.prototype.getApiVersion = function () {
        return this.apiVersion;
    };
    /**
     * Set ApiVersion
     * API version used to process the request
     * @param {p.APIVersion} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setApiVersion = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPIVersion().getProcessOutObjectClass())
            this.apiVersion = val;
        else {
            var obj = this.client.newAPIVersion();
            obj.fillWithData(val);
            this.apiVersion = obj;
        }
        return this;
    };
    /**
     * Get IdempotencyKey
     * Idempotency key used to identify the request
     * @return {string}
     */
    APIRequest.prototype.getIdempotencyKey = function () {
        return this.idempotencyKey;
    };
    /**
     * Set IdempotencyKey
     * Idempotency key used to identify the request
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setIdempotencyKey = function (val) {
        this.idempotencyKey = val;
        return this;
    };
    /**
     * Get Url
     * URL called
     * @return {string}
     */
    APIRequest.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL called
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Method
     * HTTP verb used in the request (GET, POST etc)
     * @return {string}
     */
    APIRequest.prototype.getMethod = function () {
        return this.method;
    };
    /**
     * Set Method
     * HTTP verb used in the request (GET, POST etc)
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setMethod = function (val) {
        this.method = val;
        return this;
    };
    /**
     * Get Headers
     * Headers sent with the request (client to server)
     * @return {any}
     */
    APIRequest.prototype.getHeaders = function () {
        return this.headers;
    };
    /**
     * Set Headers
     * Headers sent with the request (client to server)
     * @param {any} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setHeaders = function (val) {
        this.headers = val;
        return this;
    };
    /**
     * Get Body
     * Body of the request (client to server)
     * @return {string}
     */
    APIRequest.prototype.getBody = function () {
        return this.body;
    };
    /**
     * Set Body
     * Body of the request (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setBody = function (val) {
        this.body = val;
        return this;
    };
    /**
     * Get ResponseCode
     * Response code (such as 200 for a successful request)
     * @return {number}
     */
    APIRequest.prototype.getResponseCode = function () {
        return this.responseCode;
    };
    /**
     * Set ResponseCode
     * Response code (such as 200 for a successful request)
     * @param {number} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setResponseCode = function (val) {
        this.responseCode = val;
        return this;
    };
    /**
     * Get ResponseHeaders
     * Headers sent in the response (server to client)
     * @return {any}
     */
    APIRequest.prototype.getResponseHeaders = function () {
        return this.responseHeaders;
    };
    /**
     * Set ResponseHeaders
     * Headers sent in the response (server to client)
     * @param {any} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setResponseHeaders = function (val) {
        this.responseHeaders = val;
        return this;
    };
    /**
     * Get ResponseBody
     * Body of the response (client to server)
     * @return {string}
     */
    APIRequest.prototype.getResponseBody = function () {
        return this.responseBody;
    };
    /**
     * Set ResponseBody
     * Body of the response (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setResponseBody = function (val) {
        this.responseBody = val;
        return this;
    };
    /**
     * Get ResponseMs
     * Number of milliseconds needed to process the request
     * @return {number}
     */
    APIRequest.prototype.getResponseMs = function () {
        return this.responseMs;
    };
    /**
     * Set ResponseMs
     * Number of milliseconds needed to process the request
     * @param {number} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setResponseMs = function (val) {
        this.responseMs = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @return {boolean}
     */
    APIRequest.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @param {boolean} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the API request was made
     * @return {string}
     */
    APIRequest.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the API request was made
     * @param {string} val
     * @return {APIRequest}
     */
    APIRequest.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIRequest}
     */
    APIRequest.prototype.fillWithData = function (data) {
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
    };
    /**
     * Get all the API requests.
     *
     * @param {any} options
     * @return {array}
     */
    APIRequest.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/api-requests";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['api_requests'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newAPIRequest();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Find an API request by its ID.
     * @param string apiRequestId
     * @param {any} options
     * @return {this}
     */
    APIRequest.prototype.find = function (apiRequestId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/api-requests/{request_id}";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['api_request'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    return APIRequest;
}());
module.exports = APIRequest;
//# sourceMappingURL=apirequest.js.map