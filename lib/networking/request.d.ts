import fetch = require('node-fetch');
import ProcessOut = require('../processout');
declare class Request {
    private client;
    constructor(client: ProcessOut);
    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    authenticate(req: any): any;
    /**
     * Prepare the request
     * @param  {object} req
     * @param  {any} options
     * @return {object}
     */
    prepare(req: any, options: any): any;
    /**
     * Prepare the request data
     * @param  {object} data
     * @param  {object} options
     * @return {object}
     */
    getData(data: any, options: any): any;
    /**
     * Generate a get request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    get(path: string, data: any, options: any): Promise<fetch.Response>;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    post(path: string, data: any, options: any): Promise<fetch.Response>;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    put(path: string, data: any, options: any): Promise<fetch.Response>;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    delete(path: string, data: any, options: any): Promise<fetch.Response>;
}
export = Request;
//# sourceMappingURL=request.d.ts.map