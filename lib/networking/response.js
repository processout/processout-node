"use strict";
var ProcessOutAuthenticationError = require("../errors/processoutauthenticationerror");
var ProcessOutNotFoundError = require("../errors/processoutnotfounderror");
var ProcessOutValidationError = require("../errors/processoutvalidationerror");
var ProcessOutInternalError = require("../errors/processoutinternalerror");
var ProcessOutError = require("../errors/processouterror");
var Response = /** @class */ (function () {
    /**
     * Response constructor
     * @param  {object}  result The result returned by parsing the response
     * @param  {restler} resp Restler object
     */
    function Response(result, resp) {
        /**
         * Raw response (restler object)
         * @type {restler}
         */
        this.raw = null;
        /**
         * Status code of the response
         * @type {int}
         */
        this.statusCode = null;
        /**
         * Headers of the response
         * @type {Object}
         */
        this.headers = null;
        /**
         * Unserialized body of the response
         * @type {Object}
         */
        this.body = null;
        this.raw = resp;
        this.statusCode = resp.statusCode;
        this.headers = resp.headers;
        this.body = result;
    }
    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    Response.prototype.isSuccess = function () {
        if (!('success' in this.body) || !this.body['success'])
            return false;
        return true;
    };
    /**
     * Get the error code of the response
     * @return {string} error code
     */
    Response.prototype.getCode = function () {
        if ('error_type' in this.body)
            return this.body['error_type'];
        return '';
    };
    /**
     * Get the error message of the response
     * @return {string} error message
     */
    Response.prototype.getMessage = function () {
        if ('message' in this.body)
            return this.body['message'];
        return '';
    };
    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    Response.prototype.check = function () {
        if (!this.isSuccess()) {
            switch (this.statusCode) {
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
    };
    return Response;
}());
module.exports = Response;
//# sourceMappingURL=response.js.map