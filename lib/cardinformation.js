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
var CardInformation = /** @class */ (function () {
    /**
     * CardInformation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CardInformation(client, prefill) {
        this.client = null;
        /**
         * First 6 digits of the card
         * @type {string}
         */
        this.iin = null;
        /**
         * Scheme of the card, such as visa or mastercard
         * @type {string}
         */
        this.scheme = null;
        /**
         * Type of the card (Credit, Debit, ...)
         * @type {string}
         */
        this.type = null;
        /**
         * Name of the bank of the card
         * @type {string}
         */
        this.bankName = null;
        /**
         * Level of the card (Electron, Classic, Gold, ...)
         * @type {string}
         */
        this.brand = null;
        /**
         * Category of the card (consumer, commercial, ...)
         * @type {string}
         */
        this.category = null;
        /**
         * Country that issued the card
         * @type {string}
         */
        this.country = null;
        if (typeof client === 'undefined')
            throw new Error("The CardInformation object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardInformation()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CardInformation.prototype.getProcessOutObjectClass = function () {
        return "CardInformation";
    };
    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    CardInformation.prototype.getIin = function () {
        return this.iin;
    };
    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setIin = function (val) {
        this.iin = val;
        return this;
    };
    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    CardInformation.prototype.getScheme = function () {
        return this.scheme;
    };
    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setScheme = function (val) {
        this.scheme = val;
        return this;
    };
    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    CardInformation.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    CardInformation.prototype.getBankName = function () {
        return this.bankName;
    };
    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setBankName = function (val) {
        this.bankName = val;
        return this;
    };
    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    CardInformation.prototype.getBrand = function () {
        return this.brand;
    };
    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setBrand = function (val) {
        this.brand = val;
        return this;
    };
    /**
     * Get Category
     * Category of the card (consumer, commercial, ...)
     * @return {string}
     */
    CardInformation.prototype.getCategory = function () {
        return this.category;
    };
    /**
     * Set Category
     * Category of the card (consumer, commercial, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setCategory = function (val) {
        this.category = val;
        return this;
    };
    /**
     * Get Country
     * Country that issued the card
     * @return {string}
     */
    CardInformation.prototype.getCountry = function () {
        return this.country;
    };
    /**
     * Set Country
     * Country that issued the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setCountry = function (val) {
        this.country = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardInformation}
     */
    CardInformation.prototype.fillWithData = function (data) {
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["category"])
            this.setCategory(data["category"]);
        if (data["country"])
            this.setCountry(data["country"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CardInformation.prototype.toJSON = function () {
        return {
            "iin": this.getIin(),
            "scheme": this.getScheme(),
            "type": this.getType(),
            "bank_name": this.getBankName(),
            "brand": this.getBrand(),
            "category": this.getCategory(),
            "country": this.getCountry(),
        };
    };
    /**
     * Fetch card information from the IIN.
     * @param string iin
     * @param {any} options
     * @return {Promise<any>}
     */
    CardInformation.prototype.fetch = function (iin, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/iins/" + encodeURI(iin) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, body;
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
                                body = body['card_information'];
                                returnValues.push(cur.fillWithData(body));
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
    return CardInformation;
}());
module.exports = CardInformation;
//# sourceMappingURL=cardinformation.js.map