// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Product {
    private client: ProcessOut = null;

    /**
     * ID of the product
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the product belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the product belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * URL to which you may redirect your customer to proceed with the payment
     * @type {string}
     */
    private url: string = null;

    /**
     * Name of the product
     * @type {string}
     */
    private name: string = null;

    /**
     * Amount of the product
     * @type {string}
     */
    private amount: string = null;

    /**
     * Currency of the product
     * @type {string}
     */
    private currency: string = null;

    /**
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * URL where the customer will be redirected upon payment
     * @type {string}
     */
    private returnUrl: string = null;

    /**
     * URL where the customer will be redirected if the paymen was canceled
     * @type {string}
     */
    private cancelUrl: string = null;

    /**
     * Define whether or not the product is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the product was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Product constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Product) {
        if (typeof client === 'undefined')
            throw new Error("The Product object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProduct()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Product";
    }

    /**
     * Get Id
     * ID of the product
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the product
     * @param {string} val
     * @return {Product}
     */
    public setId(val: string): Product {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the product belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the product belongs
     * @param {p.Project} val
     * @return {Product}
     */
    public setProject(val: p.Project): Product {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the product belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the product belongs
     * @param {string} val
     * @return {Product}
     */
    public setProjectId(val: string): Product {
        this.projectId = val;
        return this;
    }

    /**
     * Get Url
     * URL to which you may redirect your customer to proceed with the payment
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the payment
     * @param {string} val
     * @return {Product}
     */
    public setUrl(val: string): Product {
        this.url = val;
        return this;
    }

    /**
     * Get Name
     * Name of the product
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the product
     * @param {string} val
     * @return {Product}
     */
    public setName(val: string): Product {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Amount of the product
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the product
     * @param {string} val
     * @return {Product}
     */
    public setAmount(val: string): Product {
        this.amount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the product
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the product
     * @param {string} val
     * @return {Product}
     */
    public setCurrency(val: string): Product {
        this.currency = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Product}
     */
    public setMetadata(val: any): Product {
        this.metadata = val;
        return this;
    }

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment
     * @return {string}
     */
    public getReturnUrl(): string {
        return this.returnUrl;
    }

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment
     * @param {string} val
     * @return {Product}
     */
    public setReturnUrl(val: string): Product {
        this.returnUrl = val;
        return this;
    }

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @return {string}
     */
    public getCancelUrl(): string {
        return this.cancelUrl;
    }

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @param {string} val
     * @return {Product}
     */
    public setCancelUrl(val: string): Product {
        this.cancelUrl = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the product is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the product is in sandbox environment
     * @param {boolean} val
     * @return {Product}
     */
    public setSandbox(val: boolean): Product {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the product was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the product was created
     * @param {string} val
     * @return {Product}
     */
    public setCreatedAt(val: string): Product {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Product}
     */
    public fillWithData(data: any): Product {
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
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
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
    }

    /**
     * Create a new invoice from the product.

     * @param {any} options
     * @return {Promise<p.Invoice>}
     */
    public createInvoice(options): Promise<p.Invoice> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products/" + encodeURI(this.getId()) + "/invoices";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['invoice'];
                var obj0 = cur.client.newInvoice();
                returnValues.push(obj0.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get all the products.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['products'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newProduct();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Create a new product.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products";

        var data = {
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a product by its ID.
	 * @param string productId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(productId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products/" + encodeURI(productId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Save the updated product attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products/" + encodeURI(this.getId()) + "";

        var data = {
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete the product.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/products/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = Product;
