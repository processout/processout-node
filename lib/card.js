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
        while (_) try {
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
var Card = /** @class */ (function () {
    /**
     * Card constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Card(client, prefill) {
        this.client = null;
        /**
         * ID of the card
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the card belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the card belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Token linked to the card, which can be used to process payments
         * @type {p.Token}
         */
        this.token = null;
        /**
         * Scheme of the card, such as visa or mastercard
         * @type {string}
         */
        this.scheme = null;
        /**
         * Co-scheme of the card, such as carte bancaire
         * @type {string}
         */
        this.coScheme = null;
        /**
         * Customer preferred scheme, such as carte bancaire vs visa
         * @type {string}
         */
        this.preferredScheme = null;
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
         * First 6 digits of the card
         * @type {string}
         */
        this.iin = null;
        /**
         * Last 4 digits of the card
         * @type {string}
         */
        this.last4Digits = null;
        /**
         * Expiry month
         * @type {number}
         */
        this.expMonth = null;
        /**
         * Expiry year, in a 4 digits format
         * @type {number}
         */
        this.expYear = null;
        /**
         * Status of the CVC check initially made on the card when the CVC was provided
         * @type {string}
         */
        this.cvcCheck = null;
        /**
         * Status of the AVS check initially made on the card when the AVS was provided
         * @type {string}
         */
        this.avsCheck = null;
        /**
         * Name of the card holder
         * @type {string}
         */
        this.name = null;
        /**
         * Address line of the card holder
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address line of the card holder
         * @type {string}
         */
        this.address2 = null;
        /**
         * City of the card holder
         * @type {string}
         */
        this.city = null;
        /**
         * State of the card holder
         * @type {string}
         */
        this.state = null;
        /**
         * ZIP code of the card holder
         * @type {string}
         */
        this.zip = null;
        /**
         * Country code of the card holder (ISO-3166, 2 characters format)
         * @type {string}
         */
        this.countryCode = null;
        /**
         * IP address of the card (IPv4 or IPv6)
         * @type {string}
         */
        this.ipAddress = null;
        /**
         * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
         * @type {string}
         */
        this.fingerprint = null;
        /**
         * This field defines if the card was tokenized with a 3rd party tokenization method such as applepay
         * @type {string}
         */
        this.tokenType = null;
        /**
         * Metadata related to the card, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Contains true if the card will expire soon, false otherwise
         * @type {boolean}
         */
        this.expiresSoon = null;
        /**
         * Define whether or not the card is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the card was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Card object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCard()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Card.prototype.getProcessOutObjectClass = function () {
        return "Card";
    };
    /**
     * Get Id
     * ID of the card
     * @return {string}
     */
    Card.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the card
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the card belongs
     * @return {p.Project}
     */
    Card.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the card belongs
     * @param {p.Project} val
     * @return {Card}
     */
    Card.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ProjectId
     * ID of the project to which the card belongs
     * @return {string}
     */
    Card.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the card belongs
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Token
     * Token linked to the card, which can be used to process payments
     * @return {p.Token}
     */
    Card.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Set Token
     * Token linked to the card, which can be used to process payments
     * @param {p.Token} val
     * @return {Card}
     */
    Card.prototype.setToken = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    };
    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    Card.prototype.getScheme = function () {
        return this.scheme;
    };
    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setScheme = function (val) {
        this.scheme = val;
        return this;
    };
    /**
     * Get CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @return {string}
     */
    Card.prototype.getCoScheme = function () {
        return this.coScheme;
    };
    /**
     * Set CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setCoScheme = function (val) {
        this.coScheme = val;
        return this;
    };
    /**
     * Get PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @return {string}
     */
    Card.prototype.getPreferredScheme = function () {
        return this.preferredScheme;
    };
    /**
     * Set PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setPreferredScheme = function (val) {
        this.preferredScheme = val;
        return this;
    };
    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    Card.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    Card.prototype.getBankName = function () {
        return this.bankName;
    };
    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setBankName = function (val) {
        this.bankName = val;
        return this;
    };
    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    Card.prototype.getBrand = function () {
        return this.brand;
    };
    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setBrand = function (val) {
        this.brand = val;
        return this;
    };
    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    Card.prototype.getIin = function () {
        return this.iin;
    };
    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setIin = function (val) {
        this.iin = val;
        return this;
    };
    /**
     * Get Last4Digits
     * Last 4 digits of the card
     * @return {string}
     */
    Card.prototype.getLast4Digits = function () {
        return this.last4Digits;
    };
    /**
     * Set Last4Digits
     * Last 4 digits of the card
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setLast4Digits = function (val) {
        this.last4Digits = val;
        return this;
    };
    /**
     * Get ExpMonth
     * Expiry month
     * @return {number}
     */
    Card.prototype.getExpMonth = function () {
        return this.expMonth;
    };
    /**
     * Set ExpMonth
     * Expiry month
     * @param {number} val
     * @return {Card}
     */
    Card.prototype.setExpMonth = function (val) {
        this.expMonth = val;
        return this;
    };
    /**
     * Get ExpYear
     * Expiry year, in a 4 digits format
     * @return {number}
     */
    Card.prototype.getExpYear = function () {
        return this.expYear;
    };
    /**
     * Set ExpYear
     * Expiry year, in a 4 digits format
     * @param {number} val
     * @return {Card}
     */
    Card.prototype.setExpYear = function (val) {
        this.expYear = val;
        return this;
    };
    /**
     * Get CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @return {string}
     */
    Card.prototype.getCvcCheck = function () {
        return this.cvcCheck;
    };
    /**
     * Set CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setCvcCheck = function (val) {
        this.cvcCheck = val;
        return this;
    };
    /**
     * Get AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @return {string}
     */
    Card.prototype.getAvsCheck = function () {
        return this.avsCheck;
    };
    /**
     * Set AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setAvsCheck = function (val) {
        this.avsCheck = val;
        return this;
    };
    /**
     * Get Name
     * Name of the card holder
     * @return {string}
     */
    Card.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Address1
     * Address line of the card holder
     * @return {string}
     */
    Card.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address line of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address line of the card holder
     * @return {string}
     */
    Card.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address line of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City of the card holder
     * @return {string}
     */
    Card.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State of the card holder
     * @return {string}
     */
    Card.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP code of the card holder
     * @return {string}
     */
    Card.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP code of the card holder
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @return {string}
     */
    Card.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @return {string}
     */
    Card.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    /**
     * Set IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setIpAddress = function (val) {
        this.ipAddress = val;
        return this;
    };
    /**
     * Get Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @return {string}
     */
    Card.prototype.getFingerprint = function () {
        return this.fingerprint;
    };
    /**
     * Set Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setFingerprint = function (val) {
        this.fingerprint = val;
        return this;
    };
    /**
     * Get TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method such as applepay
     * @return {string}
     */
    Card.prototype.getTokenType = function () {
        return this.tokenType;
    };
    /**
     * Set TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method such as applepay
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setTokenType = function (val) {
        this.tokenType = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Card.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Card}
     */
    Card.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @return {boolean}
     */
    Card.prototype.getExpiresSoon = function () {
        return this.expiresSoon;
    };
    /**
     * Set ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @param {boolean} val
     * @return {Card}
     */
    Card.prototype.setExpiresSoon = function (val) {
        this.expiresSoon = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the card is in sandbox environment
     * @return {boolean}
     */
    Card.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the card is in sandbox environment
     * @param {boolean} val
     * @return {Card}
     */
    Card.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the card was created
     * @return {string}
     */
    Card.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the card was created
     * @param {string} val
     * @return {Card}
     */
    Card.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Card}
     */
    Card.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["co_scheme"])
            this.setCoScheme(data["co_scheme"]);
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["last_4_digits"])
            this.setLast4Digits(data["last_4_digits"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["cvc_check"])
            this.setCvcCheck(data["cvc_check"]);
        if (data["avs_check"])
            this.setAvsCheck(data["avs_check"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        if (data["fingerprint"])
            this.setFingerprint(data["fingerprint"]);
        if (data["token_type"])
            this.setTokenType(data["token_type"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["expires_soon"])
            this.setExpiresSoon(data["expires_soon"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Card.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "token": this.getToken(),
            "scheme": this.getScheme(),
            "co_scheme": this.getCoScheme(),
            "preferred_scheme": this.getPreferredScheme(),
            "type": this.getType(),
            "bank_name": this.getBankName(),
            "brand": this.getBrand(),
            "iin": this.getIin(),
            "last_4_digits": this.getLast4Digits(),
            "exp_month": this.getExpMonth(),
            "exp_year": this.getExpYear(),
            "cvc_check": this.getCvcCheck(),
            "avs_check": this.getAvsCheck(),
            "name": this.getName(),
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "zip": this.getZip(),
            "country_code": this.getCountryCode(),
            "ip_address": this.getIpAddress(),
            "fingerprint": this.getFingerprint(),
            "token_type": this.getTokenType(),
            "metadata": this.getMetadata(),
            "expires_soon": this.getExpiresSoon(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the cards.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Card.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/cards";
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
                                body = respBody['cards'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newCard();
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
    /**
     * Find a card by its ID.
     * @param string cardId
     * @param {any} options
     * @return {Promise<any>}
     */
    Card.prototype.find = function (cardId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/cards/" + encodeURI(cardId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body;
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
                                err_2 = _a.sent();
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
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Anonymize the card.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    Card.prototype.anonymize = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/cards/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues;
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
                                err_3 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                returnValues.push(response.isSuccess());
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.delete(path, data, options).then(callback, callbackError);
        });
    };
    return Card;
}());
module.exports = Card;
//# sourceMappingURL=card.js.map