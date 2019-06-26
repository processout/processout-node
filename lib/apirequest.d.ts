import Promise = require("promise");
import ProcessOut = require("./processout");
declare class APIRequest {
    private client;
    /**
     * ID of the API request
     * @type {string}
     */
    private id;
    /**
     * Project used to send the API request
     * @type {any}
     */
    private project;
    /**
     * API version used to process the request
     * @type {any}
     */
    private apiVersion;
    /**
     * Idempotency key used to identify the request
     * @type {string}
     */
    private idempotencyKey;
    /**
     * URL called
     * @type {string}
     */
    private url;
    /**
     * HTTP verb used in the request (GET, POST etc)
     * @type {string}
     */
    private method;
    /**
     * Headers sent with the request (client to server)
     * @type {any}
     */
    private headers;
    /**
     * Body of the request (client to server)
     * @type {string}
     */
    private body;
    /**
     * Response code (such as 200 for a successful request)
     * @type {number}
     */
    private responseCode;
    /**
     * Headers sent in the response (server to client)
     * @type {any}
     */
    private responseHeaders;
    /**
     * Body of the response (client to server)
     * @type {string}
     */
    private responseBody;
    /**
     * Number of milliseconds needed to process the request
     * @type {number}
     */
    private responseMs;
    /**
     * Define whether or not the API request was made in the sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the API request was made
     * @type {string}
     */
    private createdAt;
    /**
     * APIRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APIRequest);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the API request
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the API request
     * @param {string} val
     * @return {APIRequest}
     */
    setId(val: string): APIRequest;
    /**
     * Get Project
     * Project used to send the API request
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project used to send the API request
     * @param {any} val
     * @return {APIRequest}
     */
    setProject(val: any): APIRequest;
    /**
     * Get ApiVersion
     * API version used to process the request
     * @return {any}
     */
    getApiVersion(): any;
    /**
     * Set ApiVersion
     * API version used to process the request
     * @param {any} val
     * @return {APIRequest}
     */
    setApiVersion(val: any): APIRequest;
    /**
     * Get IdempotencyKey
     * Idempotency key used to identify the request
     * @return {string}
     */
    getIdempotencyKey(): string;
    /**
     * Set IdempotencyKey
     * Idempotency key used to identify the request
     * @param {string} val
     * @return {APIRequest}
     */
    setIdempotencyKey(val: string): APIRequest;
    /**
     * Get Url
     * URL called
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL called
     * @param {string} val
     * @return {APIRequest}
     */
    setUrl(val: string): APIRequest;
    /**
     * Get Method
     * HTTP verb used in the request (GET, POST etc)
     * @return {string}
     */
    getMethod(): string;
    /**
     * Set Method
     * HTTP verb used in the request (GET, POST etc)
     * @param {string} val
     * @return {APIRequest}
     */
    setMethod(val: string): APIRequest;
    /**
     * Get Headers
     * Headers sent with the request (client to server)
     * @return {any}
     */
    getHeaders(): any;
    /**
     * Set Headers
     * Headers sent with the request (client to server)
     * @param {any} val
     * @return {APIRequest}
     */
    setHeaders(val: any): APIRequest;
    /**
     * Get Body
     * Body of the request (client to server)
     * @return {string}
     */
    getBody(): string;
    /**
     * Set Body
     * Body of the request (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    setBody(val: string): APIRequest;
    /**
     * Get ResponseCode
     * Response code (such as 200 for a successful request)
     * @return {number}
     */
    getResponseCode(): number;
    /**
     * Set ResponseCode
     * Response code (such as 200 for a successful request)
     * @param {number} val
     * @return {APIRequest}
     */
    setResponseCode(val: number): APIRequest;
    /**
     * Get ResponseHeaders
     * Headers sent in the response (server to client)
     * @return {any}
     */
    getResponseHeaders(): any;
    /**
     * Set ResponseHeaders
     * Headers sent in the response (server to client)
     * @param {any} val
     * @return {APIRequest}
     */
    setResponseHeaders(val: any): APIRequest;
    /**
     * Get ResponseBody
     * Body of the response (client to server)
     * @return {string}
     */
    getResponseBody(): string;
    /**
     * Set ResponseBody
     * Body of the response (client to server)
     * @param {string} val
     * @return {APIRequest}
     */
    setResponseBody(val: string): APIRequest;
    /**
     * Get ResponseMs
     * Number of milliseconds needed to process the request
     * @return {number}
     */
    getResponseMs(): number;
    /**
     * Set ResponseMs
     * Number of milliseconds needed to process the request
     * @param {number} val
     * @return {APIRequest}
     */
    setResponseMs(val: number): APIRequest;
    /**
     * Get Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the API request was made in the sandbox environment
     * @param {boolean} val
     * @return {APIRequest}
     */
    setSandbox(val: boolean): APIRequest;
    /**
     * Get CreatedAt
     * Date at which the API request was made
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the API request was made
     * @param {string} val
     * @return {APIRequest}
     */
    setCreatedAt(val: string): APIRequest;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIRequest}
     */
    fillWithData(data: any): APIRequest;
    /**
     * Get all the API requests.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Find an API request by its ID.
     * @param string apiRequestId
     * @param {any} options
     * @return {this}
     */
    find(apiRequestId: any, options: any): Promise<any>;
}
export = APIRequest;
//# sourceMappingURL=apirequest.d.ts.map