'use strict';

var Base = require('basejs');

var GatewayRequest = module.exports = Base.extend({
    _gatewayConfigurationID: "",
    _method:                 "",
    _url:                    "",
    _headers:                {},
    _body:                   "",

    constructor: function(gatewayConfigurationID, method, url, headers, body) {
        this._gatewayConfigurationID = gatewayConfigurationID;
        this._method                 = method;
        this._url                    = url;
        this._headers                = headers;
        this._body                   = body;
    },

    /**
     * toString returns the gateway request token generated from this object
     * @return string
     */
    toString: function() {
        return "gway_req_" + btoa(JSON.stringify({
            "gateway_configuration_id": this._gatewayConfigurationID,
            "method":                   this._method,
            "url":                      this._url,
            "headers":                  this._headers,
            "body":                     this._body
        }));
    }
}, {});
