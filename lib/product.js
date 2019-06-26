"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
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
         * @type {any}
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
     * @return {any}
     */
    Product.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the product belongs
     * @param {any} val
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
     * Create a new invoice from the product.

     * @param {any} options
     * @return {Invoice}
     */
    Product.prototype.createInvoice = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(this.getId()) + "/invoices";
        var data = {};
        var req = request.post(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['invoice'];
                var obj = cur.client.newInvoice();
                returnValues.push(obj.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Get all the products.
     *
     * @param {any} options
     * @return {array}
     */
    Product.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['products'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newProduct();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Create a new product.
     *
     * @param {any} options
     * @return {this}
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
        var req = request.post(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['product'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Find a product by its ID.
     * @param string productId
     * @param {any} options
     * @return {this}
     */
    Product.prototype.find = function (productId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(productId) + "";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['product'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Save the updated product attributes.

     * @param {any} options
     * @return {this}
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
        var req = request.put(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['product'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Delete the product.

     * @param {any} options
     * @return {bool}
     */
    Product.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/products/" + encodeURI(this.getId()) + "";
        var data = {};
        var req = request.delete(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    return Product;
}());
module.exports = Product;
