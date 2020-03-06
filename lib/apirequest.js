"use strict";
// The content of this file was automatically generated
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
     * Implements a JSON custom marshaller
     * @return {any}
     */
    APIRequest.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "api_version": this.getApiVersion(),
            "idempotency_key": this.getIdempotencyKey(),
            "url": this.getUrl(),
            "method": this.getMethod(),
            "headers": this.getHeaders(),
            "body": this.getBody(),
            "response_code": this.getResponseCode(),
            "response_headers": this.getResponseHeaders(),
            "response_body": this.getResponseBody(),
            "response_ms": this.getResponseMs(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the API requests.
     *
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, a, body, i, tmp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['api_requests'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newAPIRequest();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find an API request by its ID.
     * @param string apiRequestId
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_2 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['api_request'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    return APIRequest;
}());
module.exports = APIRequest;
//# sourceMappingURL=apirequest.js.map