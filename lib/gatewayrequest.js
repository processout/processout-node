"use strict";
var btoa = require("btoa");
var GatewayRequest = /** @class */ (function () {
    /**
     * Create a new gateway request abstraction object
     * @param {string} gatewayConfigurationID
     * @param {string} method
     * @param {string} url
     * @param {array} headers
     * @param {string} body
     */
    function GatewayRequest(gatewayConfigurationID, method, url, headers, body) {
        this.gatewayConfigurationID = "";
        this.method = "";
        this.url = "";
        this.headers = {};
        this.body = "";
        this.gatewayConfigurationID = gatewayConfigurationID;
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.body = body;
    }
    /**
     * toString returns the gateway request token generated from this object
     * @return {string}
     */
    GatewayRequest.prototype.toString = function () {
        return "gway_req_" + btoa(JSON.stringify({
            "gateway_configuration_id": this.gatewayConfigurationID,
            "method": this.method,
            "url": this.url,
            "headers": this.headers,
            "body": this.body
        }));
    };
    return GatewayRequest;
}());
module.exports = GatewayRequest;
