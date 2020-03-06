import fetch = require('node-fetch');
import ProcessOutAuthenticationError = require('../errors/processoutauthenticationerror');
import ProcessOutNotFoundError       = require('../errors/processoutnotfounderror');
import ProcessOutValidationError     = require('../errors/processoutvalidationerror');
import ProcessOutInternalError       = require('../errors/processoutinternalerror');
import ProcessOutError               = require('../errors/processouterror');

class Response {
    /**
     * Raw response
     * @type {fetch.Response}
     */
    public raw: fetch.Response = null;

    /**
     * Status code of the response
     * @type {int}
     */
    public statusCode: number = null;

    /**
     * Headers of the response
     * @type {Object}
     */
    public headers: any = null;

    /**
     * Unserialized body of the response
     * @type {Object}
     */
    public body: any = null;

    /**
     * Response constructor
     * @param {Response} resp The response object
     * @param {Object}   result The result returned by parsing the response
     */
    constructor(resp: fetch.Response, body: any) {
        this.raw        = resp;
        this.statusCode = resp.status;
        this.headers    = resp.headers;
        this.body       = body;
    }

    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    public isSuccess(): boolean {
        if( ! ('success' in this.body) || ! this.body['success'])
            return false;
        
        return true;
    }

    /**
     * Get the error code of the response
     * @return {string} error code
     */
    public getCode(): string {
        if('error_type' in this.body)
            return this.body['error_type'];

        return '';
    }

    /**
     * Get the error message of the response
     * @return {string} error message
     */
    public getMessage(): string {
        if('message' in this.body)
            return this.body['message'];

        return '';
    }

    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    public check(): any {
        if(! this.isSuccess()) {
            switch(this.statusCode) {
                case 404:
                    return new ProcessOutNotFoundError(this.getCode(), this.getMessage());
                case 401:
                    return new ProcessOutAuthenticationError(this.getCode(), this.getMessage());
                case 400:
                    return new ProcessOutValidationError(this.getCode(), this.getMessage());
            }

            if (this.statusCode >= 500)
                return new ProcessOutInternalError(this.getCode(), this.getMessage());

            return new ProcessOutError(this.getCode(), this.getMessage());
        }
    }
}
export = Response;
