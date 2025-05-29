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
var Balances = /** @class */ (function () {
    /**
     * Balances constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Balances(client, prefill) {
        this.client = null;
        /**
         * Vouchers linked to the customer
         * @type {any}
         */
        this.vouchers = null;
        /**
         * Available balance of the customer
         * @type {p.Balance}
         */
        this.availableBalance = null;
        /**
         * Customer action to be performed, such as redirecting to a URL
         * @type {p.BalancesCustomerAction}
         */
        this.customerAction = null;
        if (typeof client === 'undefined')
            throw new Error("The Balances object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newBalances()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Balances.prototype.getProcessOutObjectClass = function () {
        return "Balances";
    };
    /**
     * Get Vouchers
     * Vouchers linked to the customer
     * @return {any}
     */
    Balances.prototype.getVouchers = function () {
        return this.vouchers;
    };
    /**
     * Set Vouchers
     * Vouchers linked to the customer
     * @param {any} val
     * @return {Balances}
     */
    Balances.prototype.setVouchers = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.vouchers = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newBalance();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.vouchers = a;
        }
        return this;
    };
    /**
     * Get AvailableBalance
     * Available balance of the customer
     * @return {p.Balance}
     */
    Balances.prototype.getAvailableBalance = function () {
        return this.availableBalance;
    };
    /**
     * Set AvailableBalance
     * Available balance of the customer
     * @param {p.Balance} val
     * @return {Balances}
     */
    Balances.prototype.setAvailableBalance = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newBalance().getProcessOutObjectClass())
            this.availableBalance = val;
        else {
            var obj = this.client.newBalance();
            obj.fillWithData(val);
            this.availableBalance = obj;
        }
        return this;
    };
    /**
     * Get CustomerAction
     * Customer action to be performed, such as redirecting to a URL
     * @return {p.BalancesCustomerAction}
     */
    Balances.prototype.getCustomerAction = function () {
        return this.customerAction;
    };
    /**
     * Set CustomerAction
     * Customer action to be performed, such as redirecting to a URL
     * @param {p.BalancesCustomerAction} val
     * @return {Balances}
     */
    Balances.prototype.setCustomerAction = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newBalancesCustomerAction().getProcessOutObjectClass())
            this.customerAction = val;
        else {
            var obj = this.client.newBalancesCustomerAction();
            obj.fillWithData(val);
            this.customerAction = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balances}
     */
    Balances.prototype.fillWithData = function (data) {
        if (data["vouchers"])
            this.setVouchers(data["vouchers"]);
        if (data["available_balance"])
            this.setAvailableBalance(data["available_balance"]);
        if (data["customer_action"])
            this.setCustomerAction(data["customer_action"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Balances.prototype.toJSON = function () {
        return {
            "vouchers": this.getVouchers(),
            "available_balance": this.getAvailableBalance(),
            "customer_action": this.getCustomerAction(),
        };
    };
    /**
     * Fetch a customer token's balance
     * @param string tokenId
     * @param {any} options
     * @return {Promise<p.Balances>}
     */
    Balances.prototype.find = function (tokenId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/balances/tokens/" + encodeURI(tokenId) + "";
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
                                body = body['balances'];
                                obj0 = cur.client.newBalances();
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
    return Balances;
}());
module.exports = Balances;
//# sourceMappingURL=balances.js.map