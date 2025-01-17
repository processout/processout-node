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
var Product = /** @class */ (function () {
    /**
     * Product constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Product(client, prefill) {
        this.client = null;
        /**
         * ID of the product
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the product belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the product belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * URL to which you may redirect your customer to proceed with the payment
         * @type {string}
         */
        this.url = null;
        /**
         * Name of the product
         * @type {string}
         */
        this.name = null;
        /**
         * Amount of the product
         * @type {string}
         */
        this.amount = null;
        /**
         * Currency of the product
         * @type {string}
         */
        this.currency = null;
        /**
         * Metadata related to the product, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * URL where the customer will be redirected upon payment
         * @type {string}
         */
        this.returnUrl = null;
        /**
         * URL where the customer will be redirected if the paymen was canceled
         * @type {string}
         */
        this.cancelUrl = null;
        /**
         * Define whether or not the product is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the product was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Product object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProduct()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Product.prototype.getProcessOutObjectClass = function () {
        return "Product";
    };
    /**
     * Get Id
     * ID of the product
     * @return {string}
     */
    Product.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the product
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the product belongs
     * @return {p.Project}
     */
    Product.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the product belongs
     * @param {p.Project} val
     * @return {Product}
     */
    Product.prototype.setProject = function (val) {
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
     * ID of the project to which the product belongs
     * @return {string}
     */
    Product.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the product belongs
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Url
     * URL to which you may redirect your customer to proceed with the payment
     * @return {string}
     */
    Product.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the payment
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Name
     * Name of the product
     * @return {string}
     */
    Product.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the product
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Amount of the product
     * @return {string}
     */
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the product
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the product
     * @return {string}
     */
    Product.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the product
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Product.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Product}
     */
    Product.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment
     * @return {string}
     */
    Product.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setReturnUrl = function (val) {
        this.returnUrl = val;
        return this;
    };
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @return {string}
     */
    Product.prototype.getCancelUrl = function () {
        return this.cancelUrl;
    };
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setCancelUrl = function (val) {
        this.cancelUrl = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the product is in sandbox environment
     * @return {boolean}
     */
    Product.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the product is in sandbox environment
     * @param {boolean} val
     * @return {Product}
     */
    Product.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the product was created
     * @return {string}
     */
    Product.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the product was created
     * @param {string} val
     * @return {Product}
     */
    Product.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Product}
     */
    Product.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
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
    Product.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "url": this.getUrl(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "metadata": this.getMetadata(),
            "return_url": this.getReturnUrl(),
            "cancel_url": this.getCancelUrl(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Create a new invoice from the product.

     * @param {any} options
     * @return {Promise<p.Invoice>}
     */
    Product.prototype.createInvoice = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(this.getId()) + "/invoices";
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
                                body = body['invoice'];
                                obj0 = cur.client.newInvoice();
                                returnValues.push(obj0.fillWithData(body));
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
     * Get all the products.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Product.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products";
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
                                body = respBody['products'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newProduct();
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
     * Create a new product.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Product.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products";
        var data = {
            'name': this.getName(),
            'amount': this.getAmount(),
            'currency': this.getCurrency(),
            'metadata': this.getMetadata(),
            'return_url': this.getReturnUrl(),
            'cancel_url': this.getCancelUrl()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, body;
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
                                body = body['product'];
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
     * Find a product by its ID.
     * @param string productId
     * @param {any} options
     * @return {Promise<any>}
     */
    Product.prototype.find = function (productId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(productId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['product'];
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
     * Save the updated product attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    Product.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(this.getId()) + "";
        var data = {
            'name': this.getName(),
            'amount': this.getAmount(),
            'currency': this.getCurrency(),
            'metadata': this.getMetadata(),
            'return_url': this.getReturnUrl(),
            'cancel_url': this.getCancelUrl()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_5, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['product'];
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
     * Delete the product.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    Product.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_6, response, err, returnValues;
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
    return Product;
}());
module.exports = Product;
//# sourceMappingURL=product.js.map