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
var Customer = /** @class */ (function () {
    /**
     * Customer constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Customer(client, prefill) {
        this.client = null;
        /**
         * ID of the customer
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the customer belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the customer belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Default token of the customer
         * @type {p.Token}
         */
        this.defaultToken = null;
        /**
         * ID of the default token of the customer
         * @type {string}
         */
        this.defaultTokenId = null;
        /**
         * List of the customer tokens
         * @type {any}
         */
        this.tokens = null;
        /**
         * List of the customer subscriptions
         * @type {any}
         */
        this.subscriptions = null;
        /**
         * List of the customer transactions
         * @type {any}
         */
        this.transactions = null;
        /**
         * Customer balance. Can be positive or negative
         * @type {string}
         */
        this.balance = null;
        /**
         * Currency of the customer balance. Once the currency is set it cannot be modified
         * @type {string}
         */
        this.currency = null;
        /**
         * Email of the customer
         * @type {string}
         */
        this.email = null;
        /**
         * First name of the customer
         * @type {string}
         */
        this.firstName = null;
        /**
         * Last name of the customer
         * @type {string}
         */
        this.lastName = null;
        /**
         * Address of the customer
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address of the customer
         * @type {string}
         */
        this.address2 = null;
        /**
         * City of the customer
         * @type {string}
         */
        this.city = null;
        /**
         * State of the customer
         * @type {string}
         */
        this.state = null;
        /**
         * ZIP code of the customer
         * @type {string}
         */
        this.zip = null;
        /**
         * Country code of the customer (ISO-3166, 2 characters format)
         * @type {string}
         */
        this.countryCode = null;
        /**
         * IP address of the customer (IPv4 or IPv6)
         * @type {string}
         */
        this.ipAddress = null;
        /**
         * Phone number of the customer
         * @type {string}
         */
        this.phoneNumber = null;
        /**
         * Legal document number
         * @type {string}
         */
        this.legalDocument = null;
        /**
         * Sex of the customer
         * @type {string}
         */
        this.sex = null;
        /**
         * Define whether or not the customer is a business
         * @type {boolean}
         */
        this.isBusiness = null;
        /**
         * Metadata related to the customer, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the customer is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the customer was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Customer object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomer()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Customer.prototype.getProcessOutObjectClass = function () {
        return "Customer";
    };
    /**
     * Get Id
     * ID of the customer
     * @return {string}
     */
    Customer.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the customer belongs
     * @return {p.Project}
     */
    Customer.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the customer belongs
     * @param {p.Project} val
     * @return {Customer}
     */
    Customer.prototype.setProject = function (val) {
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
     * ID of the project to which the customer belongs
     * @return {string}
     */
    Customer.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the customer belongs
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get DefaultToken
     * Default token of the customer
     * @return {p.Token}
     */
    Customer.prototype.getDefaultToken = function () {
        return this.defaultToken;
    };
    /**
     * Set DefaultToken
     * Default token of the customer
     * @param {p.Token} val
     * @return {Customer}
     */
    Customer.prototype.setDefaultToken = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.defaultToken = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.defaultToken = obj;
        }
        return this;
    };
    /**
     * Get DefaultTokenId
     * ID of the default token of the customer
     * @return {string}
     */
    Customer.prototype.getDefaultTokenId = function () {
        return this.defaultTokenId;
    };
    /**
     * Set DefaultTokenId
     * ID of the default token of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setDefaultTokenId = function (val) {
        this.defaultTokenId = val;
        return this;
    };
    /**
     * Get Tokens
     * List of the customer tokens
     * @return {any}
     */
    Customer.prototype.getTokens = function () {
        return this.tokens;
    };
    /**
     * Set Tokens
     * List of the customer tokens
     * @param {any} val
     * @return {Customer}
     */
    Customer.prototype.setTokens = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.tokens = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newToken();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.tokens = a;
        }
        return this;
    };
    /**
     * Get Subscriptions
     * List of the customer subscriptions
     * @return {any}
     */
    Customer.prototype.getSubscriptions = function () {
        return this.subscriptions;
    };
    /**
     * Set Subscriptions
     * List of the customer subscriptions
     * @param {any} val
     * @return {Customer}
     */
    Customer.prototype.setSubscriptions = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.subscriptions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newSubscription();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.subscriptions = a;
        }
        return this;
    };
    /**
     * Get Transactions
     * List of the customer transactions
     * @return {any}
     */
    Customer.prototype.getTransactions = function () {
        return this.transactions;
    };
    /**
     * Set Transactions
     * List of the customer transactions
     * @param {any} val
     * @return {Customer}
     */
    Customer.prototype.setTransactions = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.transactions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newTransaction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.transactions = a;
        }
        return this;
    };
    /**
     * Get Balance
     * Customer balance. Can be positive or negative
     * @return {string}
     */
    Customer.prototype.getBalance = function () {
        return this.balance;
    };
    /**
     * Set Balance
     * Customer balance. Can be positive or negative
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setBalance = function (val) {
        this.balance = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @return {string}
     */
    Customer.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Email
     * Email of the customer
     * @return {string}
     */
    Customer.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Set Email
     * Email of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setEmail = function (val) {
        this.email = val;
        return this;
    };
    /**
     * Get FirstName
     * First name of the customer
     * @return {string}
     */
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    /**
     * Set FirstName
     * First name of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setFirstName = function (val) {
        this.firstName = val;
        return this;
    };
    /**
     * Get LastName
     * Last name of the customer
     * @return {string}
     */
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    /**
     * Set LastName
     * Last name of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setLastName = function (val) {
        this.lastName = val;
        return this;
    };
    /**
     * Get Address1
     * Address of the customer
     * @return {string}
     */
    Customer.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address of the customer
     * @return {string}
     */
    Customer.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City of the customer
     * @return {string}
     */
    Customer.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State of the customer
     * @return {string}
     */
    Customer.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP code of the customer
     * @return {string}
     */
    Customer.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP code of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @return {string}
     */
    Customer.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @return {string}
     */
    Customer.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    /**
     * Set IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setIpAddress = function (val) {
        this.ipAddress = val;
        return this;
    };
    /**
     * Get PhoneNumber
     * Phone number of the customer
     * @return {string}
     */
    Customer.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    /**
     * Set PhoneNumber
     * Phone number of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setPhoneNumber = function (val) {
        this.phoneNumber = val;
        return this;
    };
    /**
     * Get LegalDocument
     * Legal document number
     * @return {string}
     */
    Customer.prototype.getLegalDocument = function () {
        return this.legalDocument;
    };
    /**
     * Set LegalDocument
     * Legal document number
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setLegalDocument = function (val) {
        this.legalDocument = val;
        return this;
    };
    /**
     * Get Sex
     * Sex of the customer
     * @return {string}
     */
    Customer.prototype.getSex = function () {
        return this.sex;
    };
    /**
     * Set Sex
     * Sex of the customer
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setSex = function (val) {
        this.sex = val;
        return this;
    };
    /**
     * Get IsBusiness
     * Define whether or not the customer is a business
     * @return {boolean}
     */
    Customer.prototype.getIsBusiness = function () {
        return this.isBusiness;
    };
    /**
     * Set IsBusiness
     * Define whether or not the customer is a business
     * @param {boolean} val
     * @return {Customer}
     */
    Customer.prototype.setIsBusiness = function (val) {
        this.isBusiness = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Customer.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Customer}
     */
    Customer.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the customer is in sandbox environment
     * @return {boolean}
     */
    Customer.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the customer is in sandbox environment
     * @param {boolean} val
     * @return {Customer}
     */
    Customer.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the customer was created
     * @return {string}
     */
    Customer.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the customer was created
     * @param {string} val
     * @return {Customer}
     */
    Customer.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Customer}
     */
    Customer.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["default_token"])
            this.setDefaultToken(data["default_token"]);
        if (data["default_token_id"])
            this.setDefaultTokenId(data["default_token_id"]);
        if (data["tokens"])
            this.setTokens(data["tokens"]);
        if (data["subscriptions"])
            this.setSubscriptions(data["subscriptions"]);
        if (data["transactions"])
            this.setTransactions(data["transactions"]);
        if (data["balance"])
            this.setBalance(data["balance"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["first_name"])
            this.setFirstName(data["first_name"]);
        if (data["last_name"])
            this.setLastName(data["last_name"]);
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
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["legal_document"])
            this.setLegalDocument(data["legal_document"]);
        if (data["sex"])
            this.setSex(data["sex"]);
        if (data["is_business"])
            this.setIsBusiness(data["is_business"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
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
    Customer.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "default_token": this.getDefaultToken(),
            "default_token_id": this.getDefaultTokenId(),
            "tokens": this.getTokens(),
            "subscriptions": this.getSubscriptions(),
            "transactions": this.getTransactions(),
            "balance": this.getBalance(),
            "currency": this.getCurrency(),
            "email": this.getEmail(),
            "first_name": this.getFirstName(),
            "last_name": this.getLastName(),
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "zip": this.getZip(),
            "country_code": this.getCountryCode(),
            "ip_address": this.getIpAddress(),
            "phone_number": this.getPhoneNumber(),
            "legal_document": this.getLegalDocument(),
            "sex": this.getSex(),
            "is_business": this.getIsBusiness(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get the subscriptions belonging to the customer.

     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.fetchSubscriptions = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "/subscriptions";
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
                                body = respBody['subscriptions'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newSubscription();
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
     * Get the customer's tokens.

     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.fetchTokens = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "/tokens";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, a, body, i, tmp;
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
                                a = [];
                                body = respBody['tokens'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newToken();
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
     * Find a customer's token by its ID.
     * @param string tokenId
     * @param {any} options
     * @return {Promise<p.Token>}
     */
    Customer.prototype.findToken = function (tokenId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, body, obj;
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
                                body = respBody;
                                body = body['token'];
                                obj = cur.client.newToken();
                                returnValues.push(obj.fillWithData(body));
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
     * Delete a customer's token by its ID.
     * @param string tokenId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    Customer.prototype.deleteToken = function (tokenId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues;
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
                                err_4 = _a.sent();
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
    /**
     * Get the transactions belonging to the customer.

     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.fetchTransactions = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "/transactions";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_5, response, err, returnValues, a, body, i, tmp;
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
                                err_5 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['transactions'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newTransaction();
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
     * Get all the customers.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_6, response, err, returnValues, a, body, i, tmp;
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
                                err_6 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['customers'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newCustomer();
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
     * Create a new customer.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers";
        var data = {
            'balance': this.getBalance(),
            'currency': this.getCurrency(),
            'email': this.getEmail(),
            'first_name': this.getFirstName(),
            'last_name': this.getLastName(),
            'address1': this.getAddress1(),
            'address2': this.getAddress2(),
            'city': this.getCity(),
            'state': this.getState(),
            'zip': this.getZip(),
            'country_code': this.getCountryCode(),
            'ip_address': this.getIpAddress(),
            'phone_number': this.getPhoneNumber(),
            'legal_document': this.getLegalDocument(),
            'is_business': this.getIsBusiness(),
            'sex': this.getSex(),
            'metadata': this.getMetadata(),
            'id': this.getId()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_7, response, err, returnValues, body;
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
                                err_7 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['customer'];
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
    /**
     * Find a customer by its ID.
     * @param string customerId
     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.find = function (customerId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(customerId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_8, response, err, returnValues, body;
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
                                err_8 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['customer'];
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
     * Save the updated customer attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    Customer.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "";
        var data = {
            'balance': this.getBalance(),
            'default_token_id': this.getDefaultTokenId(),
            'email': this.getEmail(),
            'first_name': this.getFirstName(),
            'last_name': this.getLastName(),
            'address1': this.getAddress1(),
            'address2': this.getAddress2(),
            'city': this.getCity(),
            'state': this.getState(),
            'zip': this.getZip(),
            'country_code': this.getCountryCode(),
            'ip_address': this.getIpAddress(),
            'phone_number': this.getPhoneNumber(),
            'legal_document': this.getLegalDocument(),
            'is_business': this.getIsBusiness(),
            'sex': this.getSex(),
            'metadata': this.getMetadata()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_9, response, err, returnValues, body;
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
                                err_9 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['customer'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.put(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Delete the customer.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    Customer.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_10, response, err, returnValues;
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
                                err_10 = _a.sent();
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
    return Customer;
}());
module.exports = Customer;
//# sourceMappingURL=customer.js.map