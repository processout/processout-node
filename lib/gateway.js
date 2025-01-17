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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var Gateway = /** @class */ (function () {
    /**
     * Gateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Gateway(client, prefill) {
        this.client = null;
        /**
         * ID of the gateway
         * @type {string}
         */
        this.id = null;
        /**
         * Name of the payment gateway
         * @type {string}
         */
        this.name = null;
        /**
         * Name of the payment gateway that can be displayed
         * @type {string}
         */
        this.displayName = null;
        /**
         * Logo URL of the payment gateway
         * @type {string}
         */
        this.logoUrl = null;
        /**
         * URL of the payment gateway
         * @type {string}
         */
        this.url = null;
        /**
         * Supported flow by the gateway (one-off, subscription or tokenization)
         * @type {any}
         */
        this.flows = null;
        /**
         * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
         * @type {any}
         */
        this.tags = null;
        /**
         * True if the gateway can pull old transactions into ProcessOut, false otherwise
         * @type {boolean}
         */
        this.canPullTransactions = null;
        /**
         * True if the gateway supports refunds, false otherwise
         * @type {boolean}
         */
        this.canRefund = null;
        /**
         * True if the gateway supports oauth authentication, false otherwise
         * @type {boolean}
         */
        this.isOauthAuthentication = null;
        /**
         * Description of the payment gateway
         * @type {string}
         */
        this.description = null;
        if (typeof client === 'undefined')
            throw new Error("The Gateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGateway()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Gateway.prototype.getProcessOutObjectClass = function () {
        return "Gateway";
    };
    /**
     * Get Id
     * ID of the gateway
     * @return {string}
     */
    Gateway.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Name
     * Name of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {string}
     */
    Gateway.prototype.getDisplayName = function () {
        return this.displayName;
    };
    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setDisplayName = function (val) {
        this.displayName = val;
        return this;
    };
    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getLogoUrl = function () {
        return this.logoUrl;
    };
    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setLogoUrl = function (val) {
        this.logoUrl = val;
        return this;
    };
    /**
     * Get Url
     * URL of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @return {any}
     */
    Gateway.prototype.getFlows = function () {
        return this.flows;
    };
    /**
     * Set Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @param {any} val
     * @return {Gateway}
     */
    Gateway.prototype.setFlows = function (val) {
        this.flows = val;
        return this;
    };
    /**
     * Get Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @return {any}
     */
    Gateway.prototype.getTags = function () {
        return this.tags;
    };
    /**
     * Set Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @param {any} val
     * @return {Gateway}
     */
    Gateway.prototype.setTags = function (val) {
        this.tags = val;
        return this;
    };
    /**
     * Get CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getCanPullTransactions = function () {
        return this.canPullTransactions;
    };
    /**
     * Set CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setCanPullTransactions = function (val) {
        this.canPullTransactions = val;
        return this;
    };
    /**
     * Get CanRefund
     * True if the gateway supports refunds, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getCanRefund = function () {
        return this.canRefund;
    };
    /**
     * Set CanRefund
     * True if the gateway supports refunds, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setCanRefund = function (val) {
        this.canRefund = val;
        return this;
    };
    /**
     * Get IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getIsOauthAuthentication = function () {
        return this.isOauthAuthentication;
    };
    /**
     * Set IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setIsOauthAuthentication = function (val) {
        this.isOauthAuthentication = val;
        return this;
    };
    /**
     * Get Description
     * Description of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Set Description
     * Description of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setDescription = function (val) {
        this.description = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Gateway}
     */
    Gateway.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["flows"])
            this.setFlows(data["flows"]);
        if (data["tags"])
            this.setTags(data["tags"]);
        if (data["can_pull_transactions"])
            this.setCanPullTransactions(data["can_pull_transactions"]);
        if (data["can_refund"])
            this.setCanRefund(data["can_refund"]);
        if (data["is_oauth_authentication"])
            this.setIsOauthAuthentication(data["is_oauth_authentication"]);
        if (data["description"])
            this.setDescription(data["description"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Gateway.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "display_name": this.getDisplayName(),
            "logo_url": this.getLogoUrl(),
            "url": this.getUrl(),
            "flows": this.getFlows(),
            "tags": this.getTags(),
            "can_pull_transactions": this.getCanPullTransactions(),
            "can_refund": this.getCanRefund(),
            "is_oauth_authentication": this.getIsOauthAuthentication(),
            "description": this.getDescription(),
        };
    };
    /**
     * Get all the gateway configurations of the gateway

     * @param {any} options
     * @return {Promise<any>}
     */
    Gateway.prototype.fetchGatewayConfigurations = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateways/" + encodeURI(this.getName()) + "/gateway-configurations";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, a, body, i, tmp;
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
                                a = [];
                                body = respBody['gateway_configurations'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newGatewayConfiguration();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
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
    return Gateway;
}());
module.exports = Gateway;
//# sourceMappingURL=gateway.js.map