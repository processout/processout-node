import rest = require('request');
import ProcessOut = require('../processout');

class Request {
    private client: ProcessOut;
    
    constructor(client: ProcessOut) {
        this.client = client;
    }

    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    public authenticate(req: any): any {
        req.auth = {
            user: this.client.getProjectID(),
            pass: this.client.getProjectSecret()
        };
        return req;
    }

    /**
     * Prepare the request
     * @param  {object} req
     * @param  {any} options
     * @return {object}
     */
    public prepare(req: any, options: any): any {
        this.authenticate(req);
        req.gzip = true;
        req.json = true;

        if (! req.hasOwnProperty('headers'))
            req.headers = {};

        req.headers['API-Version'] = '1.4.0.0';
        req.headers['User-Agent'] = 'ProcessOut NodeJS-Bindings/7.2.2';

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
     * @param  {callback} callback
     * @return {restler}
     */
    public get(path: string, data: any, options: any, callback: any): any {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }

        return rest(this.prepare({
            method: 'GET',
            uri: this.client.getHost() + path + suffix
        }, options), callback);
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    public post(path: string, data: any, options: any, callback: any): any {
        return rest(this.prepare({
            method: 'POST',
            uri: this.client.getHost() + path,
            body: this.getData(data, options)
        }, options), callback);
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    public put(path: string, data: any, options: any, callback: any): any {
        return rest(this.prepare({
            method: 'PUT',
            uri: this.client.getHost() + path,
            body: this.getData(data, options)
        }, options), callback);
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    public delete(path: string, data: any, options: any, callback: any): any {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        var suffix = '';
        if (out.length > 0) {
            suffix = '?' + out.join('&');
        }

        return rest(this.prepare({
            method: 'DELETE',
            uri: this.client.getHost() + path + suffix
        }, options), callback);
    }
}
export = Request;
