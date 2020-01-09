import btoa = require('btoa');

class GatewayRequest {
    private gatewayConfigurationID: string = "";
    private method:                 string = "";
    private url:                    string = "";
    private headers:                any    = {};
    private body:                   string = "";

    /** 
     * Create a new gateway request abstraction object
     * @param {string} gatewayConfigurationID
     * @param {string} method
     * @param {string} url
     * @param {array} headers
     * @param {string} body
     */
    constructor(gatewayConfigurationID: string, method: string, url: string, headers: any, body: string) {
        this.gatewayConfigurationID = gatewayConfigurationID;
        this.method                 = method;
        this.url                    = url;
        this.headers                = headers;
        this.body                   = body;
    }

    /**
     * toString returns the gateway request token generated from this object
     * @return {string}
     */
    public toString(): string {
        return "gway_req_" + btoa(JSON.stringify({
            "gateway_configuration_id": this.gatewayConfigurationID,
            "method":                   this.method,
            "url":                      this.url,
            "headers":                  this.headers,
            "body":                     this.body
        }));
    }
}
export = GatewayRequest;
