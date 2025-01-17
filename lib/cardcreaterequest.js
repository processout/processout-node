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
var CardCreateRequest = /** @class */ (function () {
    /**
     * CardCreateRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CardCreateRequest(client, prefill) {
        this.client = null;
        /**
         * Device used to create the card
         * @type {p.Device}
         */
        this.device = null;
        /**
         * Cardholder name
         * @type {string}
         */
        this.name = null;
        /**
         * Card PAN (raw)
         * @type {string}
         */
        this.number = null;
        /**
         * Card expiration day. Used for Apple Pay
         * @type {string}
         */
        this.expDay = null;
        /**
         * Card expiration month
         * @type {string}
         */
        this.expMonth = null;
        /**
         * Card expiration year
         * @type {string}
         */
        this.expYear = null;
        /**
         * CVC2
         * @type {string}
         */
        this.cvc2 = null;
        /**
         * Preferred card scheme
         * @type {string}
         */
        this.preferredScheme = null;
        /**
         * Metadata related to the card, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
         * @type {string}
         */
        this.tokenType = null;
        /**
         * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
         * @type {string}
         */
        this.eci = null;
        /**
         * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
         * @type {string}
         */
        this.cryptogram = null;
        /**
         * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
         * @type {string}
         */
        this.applepayResponse = null;
        /**
         * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
         * @type {string}
         */
        this.applepayMid = null;
        /**
         * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
         * @type {string}
         */
        this.paymentToken = null;
        /**
         * Cardholder contact information
         * @type {p.CardContact}
         */
        this.contact = null;
        /**
         * Cardholder shipping information
         * @type {p.CardShipping}
         */
        this.shipping = null;
        if (typeof client === 'undefined')
            throw new Error("The CardCreateRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardCreateRequest()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CardCreateRequest.prototype.getProcessOutObjectClass = function () {
        return "CardCreateRequest";
    };
    /**
     * Get Device
     * Device used to create the card
     * @return {p.Device}
     */
    CardCreateRequest.prototype.getDevice = function () {
        return this.device;
    };
    /**
     * Set Device
     * Device used to create the card
     * @param {p.Device} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setDevice = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newDevice().getProcessOutObjectClass())
            this.device = val;
        else {
            var obj = this.client.newDevice();
            obj.fillWithData(val);
            this.device = obj;
        }
        return this;
    };
    /**
     * Get Name
     * Cardholder name
     * @return {string}
     */
    CardCreateRequest.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Cardholder name
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Number
     * Card PAN (raw)
     * @return {string}
     */
    CardCreateRequest.prototype.getNumber = function () {
        return this.number;
    };
    /**
     * Set Number
     * Card PAN (raw)
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setNumber = function (val) {
        this.number = val;
        return this;
    };
    /**
     * Get ExpDay
     * Card expiration day. Used for Apple Pay
     * @return {string}
     */
    CardCreateRequest.prototype.getExpDay = function () {
        return this.expDay;
    };
    /**
     * Set ExpDay
     * Card expiration day. Used for Apple Pay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setExpDay = function (val) {
        this.expDay = val;
        return this;
    };
    /**
     * Get ExpMonth
     * Card expiration month
     * @return {string}
     */
    CardCreateRequest.prototype.getExpMonth = function () {
        return this.expMonth;
    };
    /**
     * Set ExpMonth
     * Card expiration month
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setExpMonth = function (val) {
        this.expMonth = val;
        return this;
    };
    /**
     * Get ExpYear
     * Card expiration year
     * @return {string}
     */
    CardCreateRequest.prototype.getExpYear = function () {
        return this.expYear;
    };
    /**
     * Set ExpYear
     * Card expiration year
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setExpYear = function (val) {
        this.expYear = val;
        return this;
    };
    /**
     * Get Cvc2
     * CVC2
     * @return {string}
     */
    CardCreateRequest.prototype.getCvc2 = function () {
        return this.cvc2;
    };
    /**
     * Set Cvc2
     * CVC2
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setCvc2 = function (val) {
        this.cvc2 = val;
        return this;
    };
    /**
     * Get PreferredScheme
     * Preferred card scheme
     * @return {string}
     */
    CardCreateRequest.prototype.getPreferredScheme = function () {
        return this.preferredScheme;
    };
    /**
     * Set PreferredScheme
     * Preferred card scheme
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setPreferredScheme = function (val) {
        this.preferredScheme = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    CardCreateRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @return {string}
     */
    CardCreateRequest.prototype.getTokenType = function () {
        return this.tokenType;
    };
    /**
     * Set TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setTokenType = function (val) {
        this.tokenType = val;
        return this;
    };
    /**
     * Get Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    CardCreateRequest.prototype.getEci = function () {
        return this.eci;
    };
    /**
     * Set Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setEci = function (val) {
        this.eci = val;
        return this;
    };
    /**
     * Get Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    CardCreateRequest.prototype.getCryptogram = function () {
        return this.cryptogram;
    };
    /**
     * Set Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setCryptogram = function (val) {
        this.cryptogram = val;
        return this;
    };
    /**
     * Get ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    CardCreateRequest.prototype.getApplepayResponse = function () {
        return this.applepayResponse;
    };
    /**
     * Set ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setApplepayResponse = function (val) {
        this.applepayResponse = val;
        return this;
    };
    /**
     * Get ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    CardCreateRequest.prototype.getApplepayMid = function () {
        return this.applepayMid;
    };
    /**
     * Set ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setApplepayMid = function (val) {
        this.applepayMid = val;
        return this;
    };
    /**
     * Get PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    CardCreateRequest.prototype.getPaymentToken = function () {
        return this.paymentToken;
    };
    /**
     * Set PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setPaymentToken = function (val) {
        this.paymentToken = val;
        return this;
    };
    /**
     * Get Contact
     * Cardholder contact information
     * @return {p.CardContact}
     */
    CardCreateRequest.prototype.getContact = function () {
        return this.contact;
    };
    /**
     * Set Contact
     * Cardholder contact information
     * @param {p.CardContact} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setContact = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCardContact().getProcessOutObjectClass())
            this.contact = val;
        else {
            var obj = this.client.newCardContact();
            obj.fillWithData(val);
            this.contact = obj;
        }
        return this;
    };
    /**
     * Get Shipping
     * Cardholder shipping information
     * @return {p.CardShipping}
     */
    CardCreateRequest.prototype.getShipping = function () {
        return this.shipping;
    };
    /**
     * Set Shipping
     * Cardholder shipping information
     * @param {p.CardShipping} val
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.setShipping = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCardShipping().getProcessOutObjectClass())
            this.shipping = val;
        else {
            var obj = this.client.newCardShipping();
            obj.fillWithData(val);
            this.shipping = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardCreateRequest}
     */
    CardCreateRequest.prototype.fillWithData = function (data) {
        if (data["device"])
            this.setDevice(data["device"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["number"])
            this.setNumber(data["number"]);
        if (data["exp_day"])
            this.setExpDay(data["exp_day"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["cvc2"])
            this.setCvc2(data["cvc2"]);
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["token_type"])
            this.setTokenType(data["token_type"]);
        if (data["eci"])
            this.setEci(data["eci"]);
        if (data["cryptogram"])
            this.setCryptogram(data["cryptogram"]);
        if (data["applepay_response"])
            this.setApplepayResponse(data["applepay_response"]);
        if (data["applepay_mid"])
            this.setApplepayMid(data["applepay_mid"]);
        if (data["payment_token"])
            this.setPaymentToken(data["payment_token"]);
        if (data["contact"])
            this.setContact(data["contact"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CardCreateRequest.prototype.toJSON = function () {
        return {
            "device": this.getDevice(),
            "name": this.getName(),
            "number": this.getNumber(),
            "exp_day": this.getExpDay(),
            "exp_month": this.getExpMonth(),
            "exp_year": this.getExpYear(),
            "cvc2": this.getCvc2(),
            "preferred_scheme": this.getPreferredScheme(),
            "metadata": this.getMetadata(),
            "token_type": this.getTokenType(),
            "eci": this.getEci(),
            "cryptogram": this.getCryptogram(),
            "applepay_response": this.getApplepayResponse(),
            "applepay_mid": this.getApplepayMid(),
            "payment_token": this.getPaymentToken(),
            "contact": this.getContact(),
            "shipping": this.getShipping(),
        };
    };
    /**
     * Create a new card.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    CardCreateRequest.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/cards";
        var data = {
            'device': this.getDevice(),
            'name': this.getName(),
            'number': this.getNumber(),
            'exp_day': this.getExpDay(),
            'exp_month': this.getExpMonth(),
            'exp_year': this.getExpYear(),
            'cvc2': this.getCvc2(),
            'preferred_scheme': this.getPreferredScheme(),
            'metadata': this.getMetadata(),
            'token_type': this.getTokenType(),
            'eci': this.getEci(),
            'cryptogram': this.getCryptogram(),
            'applepay_response': this.getApplepayResponse(),
            'applepay_mid': this.getApplepayMid(),
            'payment_token': this.getPaymentToken(),
            'contact': this.getContact(),
            'shipping': this.getShipping()
        };
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
                                body = body['card'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.post(path, data, options).then(callback, callbackError);
        });
    };
    return CardCreateRequest;
}());
module.exports = CardCreateRequest;
//# sourceMappingURL=cardcreaterequest.js.map