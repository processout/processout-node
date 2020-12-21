import fetch = require('node-fetch');
import ProcessOut = require('../processout');

class Request {
    private client: ProcessOut;
    private fetch: fetch;
    
    constructor(client: ProcessOut) {
        this.client = client;
        this.fetch = client.fetch || fetch;
    }

    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    public authenticate(req: any): any {
        req.headers['Authorization'] = 'Basic ' + Buffer.from(this.client.getProjectID() + ":" + this.client.getProjectSecret()).toString('base64');
        return req;
    }

    /**
     * Prepare the request
     * @param  {object} req
     * @param  {any} options
     * @return {object}
     */
    public prepare(req: any, options: any): any {
        if (! req.hasOwnProperty('headers'))
            req.headers = {};

        this.authenticate(req);
        req.compress = true;

        req.headers['API-Version']  = '1.4.0.0';
        req.headers['User-Agent']   = 'ProcessOut NodeJS-Bindings/8.0.0';
        req.headers['Content-Type'] = 'application/json';
        req.headers['Accept']       = 'application/json';

        if (typeof options === 'undefined')
            return req;

        if ('idempotencyKey' in options)
            req.headers['Idempotency-Key'] = options['idempotencyKey'];
        if ('disableLogging' in options)
            req.headers['Disable-Logging'] = options['disableLogging'];

        req.timeout = 65000;
        if ('timeout' in options)
            req.timeout = options.timeout;

        return req;
    }

    /**
     * Prepare the request data
     * @param  {object} data
     * @param  {object} options
     * @return {object}
     */
    public getData(data: any, options: any): any {
        if (typeof options === 'undefined')
            return data;

        if ('expand' in options)
            data['expand'] = options['expand'];
        if ('filter' in options)
            data['filter'] = options['filter'];
        if ('limit' in options)
            data['limit'] = options['limit'];
        if ('endBefore' in options)
            data['end_before'] = options['endBefore'];
        if ('startAfter' in options)
            data['start_after'] = options['startAfter'];

        return data;
    }

    /**
     * Generate a get request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    public get(path: string, data: any, options: any): Promise<fetch.Response> {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }

        return this.fetch(
            this.client.getHost() + path + suffix, 
            this.prepare({
                method: 'GET'
            }, options)
        );
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    public post(path: string, data: any, options: any): Promise<fetch.Response> {
        return this.fetch(
            this.client.getHost() + path,
            this.prepare({
                method: 'POST',
                body:   JSON.stringify(this.getData(data, options))
            }, options)
        );
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    public put(path: string, data: any, options: any): Promise<fetch.Response> {
        return this.fetch(
            this.client.getHost() + path, 
            this.prepare({
                method: 'PUT',
                body:   JSON.stringify(this.getData(data, options))
            }, options)
        );
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {Promise}
     */
    public delete(path: string, data: any, options: any): Promise<fetch.Response> {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }

        return this.fetch(
            this.client.getHost() + path + suffix,
            this.prepare({
                method: 'DELETE'
            }, options)
        );
    }
}
export = Request;
