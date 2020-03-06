// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class APIRequest {
    private client: ProcessOut = null;

    /**
     * ID of the API request
     * @type {string}
     */
    private id: string = null;

    /**
     * Project used to send the API request
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * API version used to process the request
     * @type {p.APIVersion}
     */
    private apiVersion: p.APIVersion = null;

    /**
     * Idempotency key used to identify the request
     * @type {string}
     */
    private idempotencyKey: string = null;

    /**
     * URL called
     * @type {string}
     */
    private url: string = null;

    /**
     * HTTP verb used in the request (GET, POST etc)
     * @type {string}
     */
    private method: string = null;

    /**
     * Headers sent with the request (client to server)
     * @type {any}
     */
    private headers: any = null;

    /**
     * Body of the request (client to server)
     * @type {string}
     */
    private body: string = null;

    /**
     * Response code (such as 200 for a successful request)
     * @type {number}
     */
    private responseCode: number = null;

    /**
     * Headers sent in the response (server to client)
     * @type {any}
     */
    private responseHeaders: any = null;

    /**
     * Body of the response (client to server)
     * @type {string}
     */
    private responseBody: string = null;

    /**
     * Number of milliseconds needed to process the request
     * @type {number}
     */
    private responseMs: number = null;

    /**
     * Define whether or not the API request was made in the sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the API request was made
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * APIRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APIRequest) {
        if (typeof client === 'undefined')
            throw new Error("The APIRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIRequest()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "APIRequest";
    }

    /**
     * Get Id
     * ID of the API request
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the API request
     * @param {string} val
     * @return {APIRequest}
     */
    public setId(val: string): APIRequest {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project used to send the API request
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project used to send the API request
     * @param {p.Project} val
     * @return {APIRequest}
     */
    public setProject(val: p.Project): APIRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ApiVersion
     * API version used to process the request
     * @return {p.APIVersion}
     */
    public getApiVersion(): p.APIVersion {
        return this.apiVersion;
    }

    /**
     * Set ApiVersion
     * API version used to process the request
     * @param {p.APIVersion} val
     * @return {APIRequest}
     */
    public setApiVersion(val: p.APIVersion): APIRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPIVersion().getProcessOutObjectClass())
            this.apiVersion = val;
        else {
            var obj = this.client.newAPIVersion();
            obj.fillWithData(val);
            this.apiVersion = obj;
        }
        return this;
    }

    /**
     * Get IdempotencyKey
     * Idempotency key used to identify the request
     * @return {string}
     */
    public getIdempotencyKey(): string {
        return this.idempotencyKey;
    }

    /**
     * Set IdempotencyKey
     * Idempotency key used to identify the request
     * @param {string} val
     * @return {APIRequest}
     */
    public setIdempotencyKey(val: string): APIRequest {
        this.idempotencyKey = val;
        return this;
    }

    /**
     * Get Url
     * URL called
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL called
     * @param {string} val
     * @return {APIRequest}
     */
    public setUrl(val: string): APIRequest {
        this.url = val;
        return this;
    }

    /**
     * Get Method
     * HTTP verb used in the request (GET, POST etc)
     * @return {string}
     */
    public getMethod(): string {
        return this.method;
    }

    /**
     * Set Method
     * HTTP verb used in the request (GET, POST etc)
     * @param {string} val
     * @return {APIRequest}
     */
    public setMethod(val: string): APIRequest {
        this.method = val;
        return this;
    }

    /**
     * Get Headers
     * Headers sent with the request (client to server)
     * @return {any}
     */
    public getHeaders(): any {
        return this.headers;
    }

    /**
     * Set Headers
     * Headers sent with the request (client to server)
     * @param {any} val
     * @return {APIRequest}
     */
    public setHeaders(val: any): APIRequest {
        this.headers = val;
        return this;
    }

    /**
     * Get Body
     * Body of the request (client to server)
     * @return {string}
     */
    public getBody(): string {
        return this.body;
    }

    /**
     * Set Body
     * Body of the request (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    public setBody(val: string): APIRequest {
        this.body = val;
        return this;
    }

    /**
     * Get ResponseCode
     * Response code (such as 200 for a successful request)
     * @return {number}
     */
    public getResponseCode(): number {
        return this.responseCode;
    }

    /**
     * Set ResponseCode
     * Response code (such as 200 for a successful request)
     * @param {number} val
     * @return {APIRequest}
     */
    public setResponseCode(val: number): APIRequest {
        this.responseCode = val;
        return this;
    }

    /**
     * Get ResponseHeaders
     * Headers sent in the response (server to client)
     * @return {any}
     */
    public getResponseHeaders(): any {
        return this.responseHeaders;
    }

    /**
     * Set ResponseHeaders
     * Headers sent in the response (server to client)
     * @param {any} val
     * @return {APIRequest}
     */
    public setResponseHeaders(val: any): APIRequest {
        this.responseHeaders = val;
        return this;
    }

    /**
     * Get ResponseBody
     * Body of the response (client to server)
     * @return {string}
     */
    public getResponseBody(): string {
        return this.responseBody;
    }

    /**
     * Set ResponseBody
     * Body of the response (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    public setResponseBody(val: string): APIRequest {
        this.responseBody = val;
        return this;
    }

    /**
     * Get ResponseMs
     * Number of milliseconds needed to process the request
     * @return {number}
     */
    public getResponseMs(): number {
        return this.responseMs;
    }

    /**
     * Set ResponseMs
     * Number of milliseconds needed to process the request
     * @param {number} val
     * @return {APIRequest}
     */
    public setResponseMs(val: number): APIRequest {
        this.responseMs = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @param {boolean} val
     * @return {APIRequest}
     */
    public setSandbox(val: boolean): APIRequest {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the API request was made
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the API request was made
     * @param {string} val
     * @return {APIRequest}
     */
    public setCreatedAt(val: string): APIRequest {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIRequest}
     */
    public fillWithData(data: any): APIRequest {
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
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
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
    }

    /**
     * Get all the API requests.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/api-requests";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['api_requests'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newAPIRequest();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find an API request by its ID.
	 * @param string apiRequestId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(apiRequestId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/api-requests/{request_id}";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['api_request'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = APIRequest;
