import ProcessOut = require('./processout');
import * as p from '.';
declare class ErrorCodes {
    private client;
    /**
     * Error codes from gateways by category.
     * @type {p.CategoryErrorCodes}
     */
    private gateway;
    /**
     * ErrorCodes constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ErrorCodes);
    getProcessOutObjectClass(): string;
    /**
     * Get Gateway
     * Error codes from gateways by category.
     * @return {p.CategoryErrorCodes}
     */
    getGateway(): p.CategoryErrorCodes;
    /**
     * Set Gateway
     * Error codes from gateways by category.
     * @param {p.CategoryErrorCodes} val
     * @return {ErrorCodes}
     */
    setGateway(val: p.CategoryErrorCodes): ErrorCodes;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ErrorCodes}
     */
    fillWithData(data: any): ErrorCodes;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get all error codes.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
}
export = ErrorCodes;
//# sourceMappingURL=errorcodes.d.ts.map