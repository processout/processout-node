import rest = require('restler');
import ProcessOut = require('../processout');
import zlib = require('zlib');

// Fix zlib compression
var original_decode = rest.Request.prototype._decode;
rest.Request.prototype._decode = function(body, response, callback) {
    if (response.headers['content-encoding'] == "gzip") {
        zlib.gunzip(body, {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
        }, callback);
    } else {
        original_decode(body, response, callback);
    }
};

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
        req.username = this.client.getProjectID();
        req.password = this.client.getProjectSecret();
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

        if (! req.hasOwnProperty('headers'))
            req.headers = {};

        req.headers['API-Version'] = '1.4.0.0';
        req.headers['User-Agent'] = 'ProcessOut NodeJS-Bindings/7.0.0';

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
     * @return {restler}
     */
    public get(path: string, data: any, options: any): any {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.get(this.client.getHost() + path + '?' +
            out.join('&'), this.prepare({}, options));
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    public post(path: string, data: any, options: any): any {
        return rest.postJson(this.client.getHost() + path,
            this.getData(data, options),
            this.prepare({}, options));
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    public put(path: string, data: any, options: any): any {
        return rest.putJson(this.client.getHost() + path,
            this.getData(data, options),
            this.prepare({}, options));
    }

    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @return {restler}
     */
    public delete(path: string, data: any, options: any): any {
        data = this.getData(data, options);

        var out = new Array();
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }

        return rest.del(this.client.getHost() + path + '?' +
            out.join('&'), this.prepare({}, options));
    }
}
export = Request;
