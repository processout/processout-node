"use strict";
// The content of this file was automatically generated
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var ApplePayAlternativeMerchantCertificates = /** @class */ (function () {
    /**
     * ApplePayAlternativeMerchantCertificates constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ApplePayAlternativeMerchantCertificates(client, prefill) {
        this.client = null;
        /**
         * number of alternative merchant certificate
         * @type {string}
         */
        this.count = null;
        /**
         * Alternative merchant certificates available
         * @type {any}
         */
        this.alternativeMerchantCertificates = null;
        if (typeof client === 'undefined')
            throw new Error("The ApplePayAlternativeMerchantCertificates object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newApplePayAlternativeMerchantCertificates()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ApplePayAlternativeMerchantCertificates.prototype.getProcessOutObjectClass = function () {
        return "ApplePayAlternativeMerchantCertificates";
    };
    /**
     * Get Count
     * number of alternative merchant certificate
     * @return {string}
     */
    ApplePayAlternativeMerchantCertificates.prototype.getCount = function () {
        return this.count;
    };
    /**
     * Set Count
     * number of alternative merchant certificate
     * @param {string} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    ApplePayAlternativeMerchantCertificates.prototype.setCount = function (val) {
        this.count = val;
        return this;
    };
    /**
     * Get AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @return {any}
     */
    ApplePayAlternativeMerchantCertificates.prototype.getAlternativeMerchantCertificates = function () {
        return this.alternativeMerchantCertificates;
    };
    /**
     * Set AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @param {any} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    ApplePayAlternativeMerchantCertificates.prototype.setAlternativeMerchantCertificates = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.alternativeMerchantCertificates = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newAlternativeMerchantCertificate();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.alternativeMerchantCertificates = a;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    ApplePayAlternativeMerchantCertificates.prototype.fillWithData = function (data) {
        if (data["count"])
            this.setCount(data["count"]);
        if (data["alternative_merchant_certificates"])
            this.setAlternativeMerchantCertificates(data["alternative_merchant_certificates"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ApplePayAlternativeMerchantCertificates.prototype.toJSON = function () {
        return {
            "count": this.getCount(),
            "alternative_merchant_certificates": this.getAlternativeMerchantCertificates(),
        };
    };
    /**
     * Fetch the project's alternative certificates by ID
     *
     * @param {any} options
     * @return {Promise<p.ApplePayAlternativeMerchantCertificates>}
     */
    ApplePayAlternativeMerchantCertificates.prototype.fetch = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/applepay/alternative-merchant-certificates";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, body, obj0;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['applepay_certificates'];
                                obj0 = cur.client.newApplePayAlternativeMerchantCertificates();
                                returnValues.push(obj0.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    return ApplePayAlternativeMerchantCertificates;
}());
module.exports = ApplePayAlternativeMerchantCertificates;
//# sourceMappingURL=applepayalternativemerchantcertificates.js.map