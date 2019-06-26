'use strict';

import ProcessOutAuthenticationError = require('../errors/processoutauthenticationerror');
import ProcessOutNotFoundError       = require('../errors/processoutnotfounderror');
import ProcessOutValidationError     = require('../errors/processoutvalidationerror');
import ProcessOutInternalError       = require('../errors/processoutinternalerror');
import ProcessOutError               = require('../errors/processouterror');

class Response {
    /**
     * Raw response (restler object)
     * @type {restler}
     */
    public raw: any = null;

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
     * Serialized body of the response (raw body)
     * @type {string}
     */
    public rawBody: string = null;

    /**
     * Response constructor
     * @param  {object}  result The result returned by parsing the response
     * @param  {restler} resp Restler object
     */
    constructor(result: any, resp: any) {
        this.raw        = resp;
        this.statusCode = resp.statusCode;
        this.headers    = resp.headers;
        this.rawBody    = resp.raw;
        this.body       = result;
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
