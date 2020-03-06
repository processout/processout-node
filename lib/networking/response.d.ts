import fetch = require('node-fetch');
declare class Response {
    /**
     * Raw response
     * @type {fetch.Response}
     */
    raw: fetch.Response;
    /**
     * Status code of the response
     * @type {int}
     */
    statusCode: number;
    /**
     * Headers of the response
     * @type {Object}
     */
    headers: any;
    /**
     * Unserialized body of the response
     * @type {Object}
     */
    body: any;
    /**
     * Response constructor
     * @param {Response} resp The response object
     * @param {Object}   result The result returned by parsing the response
     */
    constructor(resp: fetch.Response, body: any);
    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    isSuccess(): boolean;
    /**
     * Get the error code of the response
     * @return {string} error code
     */
    getCode(): string;
    /**
     * Get the error message of the response
     * @return {string} error message
     */
    getMessage(): string;
    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    check(): any;
}
export = Response;
//# sourceMappingURL=response.d.ts.map