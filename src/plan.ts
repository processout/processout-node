// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Plan {
    private client: ProcessOut = null;

    /**
     * ID of the plan
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the plan belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the plan belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * URL to which you may redirect your customer to activate the subscription plan
     * @type {string}
     */
    private url: string = null;

    /**
     * Name of the plan
     * @type {string}
     */
    private name: string = null;

    /**
     * Amount of the plan
     * @type {string}
     */
    private amount: string = null;

    /**
     * Currency of the plan
     * @type {string}
     */
    private currency: string = null;

    /**
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private interval: string = null;

    /**
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private trialPeriod: string = null;

    /**
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @type {string}
     */
    private returnUrl: string = null;

    /**
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @type {string}
     */
    private cancelUrl: string = null;

    /**
     * Define whether or not the plan is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the plan was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Plan constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Plan) {
        if (typeof client === 'undefined')
            throw new Error("The Plan object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPlan()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Plan";
    }

    /**
     * Get Id
     * ID of the plan
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the plan
     * @param {string} val
     * @return {Plan}
     */
    public setId(val: string): Plan {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the plan belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the plan belongs
     * @param {p.Project} val
     * @return {Plan}
     */
    public setProject(val: p.Project): Plan {
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
     * ID of the project to which the plan belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the plan belongs
     * @param {string} val
     * @return {Plan}
     */
    public setProjectId(val: string): Plan {
        this.projectId = val;
        return this;
    }

    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @param {string} val
     * @return {Plan}
     */
    public setUrl(val: string): Plan {
        this.url = val;
        return this;
    }

    /**
     * Get Name
     * Name of the plan
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the plan
     * @param {string} val
     * @return {Plan}
     */
    public setName(val: string): Plan {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Amount of the plan
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the plan
     * @param {string} val
     * @return {Plan}
     */
    public setAmount(val: string): Plan {
        this.amount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the plan
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the plan
     * @param {string} val
     * @return {Plan}
     */
    public setCurrency(val: string): Plan {
        this.currency = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Plan}
     */
    public setMetadata(val: any): Plan {
        this.metadata = val;
        return this;
    }

    /**
     * Get Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    public getInterval(): string {
        return this.interval;
    }

    /**
     * Set Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    public setInterval(val: string): Plan {
        this.interval = val;
        return this;
    }

    /**
     * Get TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    public getTrialPeriod(): string {
        return this.trialPeriod;
    }

    /**
     * Set TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    public setTrialPeriod(val: string): Plan {
        this.trialPeriod = val;
        return this;
    }

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @return {string}
     */
    public getReturnUrl(): string {
        return this.returnUrl;
    }

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    public setReturnUrl(val: string): Plan {
        this.returnUrl = val;
        return this;
    }

    /**
     * Get CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @return {string}
     */
    public getCancelUrl(): string {
        return this.cancelUrl;
    }

    /**
     * Set CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    public setCancelUrl(val: string): Plan {
        this.cancelUrl = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the plan is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the plan is in sandbox environment
     * @param {boolean} val
     * @return {Plan}
     */
    public setSandbox(val: boolean): Plan {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the plan was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the plan was created
     * @param {string} val
     * @return {Plan}
     */
    public setCreatedAt(val: string): Plan {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Plan}
     */
    public fillWithData(data: any): Plan {
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
        if (data["interval"])
            this.setInterval(data["interval"]);
        if (data["trial_period"])
            this.setTrialPeriod(data["trial_period"]);
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
     * Get all the plans.
     * 
     * @param {any} options
     * @return {array}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/plans";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = response.body['plans'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newPlan();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Create a new plan.
     * 
     * @param {any} options
     * @return {this}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/plans";

        var data = {
			'id': this.getId(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'interval': this.getInterval(), 
			'trial_period': this.getTrialPeriod(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Find a plan by its ID.
	 * @param string planId
     * @param {any} options
     * @return {this}
     */
    public find(planId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/plans/" + encodeURI(planId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Save the updated plan attributes. This action won't affect subscriptions already linked to this plan.

     * @param {any} options
     * @return {this}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/plans/" + encodeURI(this.getId()) + "";

        var data = {
			'name': this.getName(), 
			'trial_period': this.getTrialPeriod(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.put(path, data, options, callback);
            });
    }
    /**
     * Delete a plan. Subscriptions linked to this plan won't be affected.

     * @param {any} options
     * @return {bool}
     */
    public end(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/plans/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.delete(path, data, options, callback);
            });
    }
    
}
export = Plan;
