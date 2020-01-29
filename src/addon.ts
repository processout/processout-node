// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Addon {
    private client: ProcessOut = null;

    /**
     * ID of the addon
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the addon belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the addon belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Subscription to which the addon belongs
     * @type {p.Subscription}
     */
    private subscription: p.Subscription = null;

    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    private subscriptionId: string = null;

    /**
     * Plan used to create the addon, if any
     * @type {p.Plan}
     */
    private plan: p.Plan = null;

    /**
     * ID of the plan used to create the addon, if any
     * @type {string}
     */
    private planId: string = null;

    /**
     * Type of the addon. Can be either metered or recurring
     * @type {string}
     */
    private type: string = null;

    /**
     * Name of the addon
     * @type {string}
     */
    private name: string = null;

    /**
     * Amount of the addon
     * @type {string}
     */
    private amount: string = null;

    /**
     * Quantity of the addon
     * @type {number}
     */
    private quantity: number = null;

    /**
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the addon is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the addon was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Addon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Addon) {
        if (typeof client === 'undefined')
            throw new Error("The Addon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAddon()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Addon";
    }

    /**
     * Get Id
     * ID of the addon
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the addon
     * @param {string} val
     * @return {Addon}
     */
    public setId(val: string): Addon {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the addon belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the addon belongs
     * @param {p.Project} val
     * @return {Addon}
     */
    public setProject(val: p.Project): Addon {
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
     * ID of the project to which the addon belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    public setProjectId(val: string): Addon {
        this.projectId = val;
        return this;
    }

    /**
     * Get Subscription
     * Subscription to which the addon belongs
     * @return {p.Subscription}
     */
    public getSubscription(): p.Subscription {
        return this.subscription;
    }

    /**
     * Set Subscription
     * Subscription to which the addon belongs
     * @param {p.Subscription} val
     * @return {Addon}
     */
    public setSubscription(val: p.Subscription): Addon {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubscription().getProcessOutObjectClass())
            this.subscription = val;
        else {
            var obj = this.client.newSubscription();
            obj.fillWithData(val);
            this.subscription = obj;
        }
        return this;
    }

    /**
     * Get SubscriptionId
     * ID of the subscription to which the addon belongs
     * @return {string}
     */
    public getSubscriptionId(): string {
        return this.subscriptionId;
    }

    /**
     * Set SubscriptionId
     * ID of the subscription to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    public setSubscriptionId(val: string): Addon {
        this.subscriptionId = val;
        return this;
    }

    /**
     * Get Plan
     * Plan used to create the addon, if any
     * @return {p.Plan}
     */
    public getPlan(): p.Plan {
        return this.plan;
    }

    /**
     * Set Plan
     * Plan used to create the addon, if any
     * @param {p.Plan} val
     * @return {Addon}
     */
    public setPlan(val: p.Plan): Addon {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPlan().getProcessOutObjectClass())
            this.plan = val;
        else {
            var obj = this.client.newPlan();
            obj.fillWithData(val);
            this.plan = obj;
        }
        return this;
    }

    /**
     * Get PlanId
     * ID of the plan used to create the addon, if any
     * @return {string}
     */
    public getPlanId(): string {
        return this.planId;
    }

    /**
     * Set PlanId
     * ID of the plan used to create the addon, if any
     * @param {string} val
     * @return {Addon}
     */
    public setPlanId(val: string): Addon {
        this.planId = val;
        return this;
    }

    /**
     * Get Type
     * Type of the addon. Can be either metered or recurring
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the addon. Can be either metered or recurring
     * @param {string} val
     * @return {Addon}
     */
    public setType(val: string): Addon {
        this.type = val;
        return this;
    }

    /**
     * Get Name
     * Name of the addon
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the addon
     * @param {string} val
     * @return {Addon}
     */
    public setName(val: string): Addon {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Amount of the addon
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the addon
     * @param {string} val
     * @return {Addon}
     */
    public setAmount(val: string): Addon {
        this.amount = val;
        return this;
    }

    /**
     * Get Quantity
     * Quantity of the addon
     * @return {number}
     */
    public getQuantity(): number {
        return this.quantity;
    }

    /**
     * Set Quantity
     * Quantity of the addon
     * @param {number} val
     * @return {Addon}
     */
    public setQuantity(val: number): Addon {
        this.quantity = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Addon}
     */
    public setMetadata(val: any): Addon {
        this.metadata = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the addon is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the addon is in sandbox environment
     * @param {boolean} val
     * @return {Addon}
     */
    public setSandbox(val: boolean): Addon {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the addon was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the addon was created
     * @param {string} val
     * @return {Addon}
     */
    public setCreatedAt(val: string): Addon {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Addon}
     */
    public fillWithData(data: any): Addon {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["subscription"])
            this.setSubscription(data["subscription"]);
        if (data["subscription_id"])
            this.setSubscriptionId(data["subscription_id"]);
        if (data["plan"])
            this.setPlan(data["plan"]);
        if (data["plan_id"])
            this.setPlanId(data["plan_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["quantity"])
            this.setQuantity(data["quantity"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
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
            "subscription": this.getSubscription(),
            "subscription_id": this.getSubscriptionId(),
            "plan": this.getPlan(),
            "plan_id": this.getPlanId(),
            "type": this.getType(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "quantity": this.getQuantity(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    }

    /**
     * Get the addons applied to the subscription.
	 * @param string subscriptionId
     * @param {any} options
     * @return {array}
     */
    public fetchSubscriptionAddons(subscriptionId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/addons";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = response.body['addons'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newAddon();
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
     * Create a new addon to the given subscription ID.

     * @param {any} options
     * @return {this}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons";

        var data = {
			'plan_id': this.getPlanId(), 
			'type': this.getType(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'quantity': this.getQuantity(), 
			'metadata': this.getMetadata(), 
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Find a subscription's addon by its ID.
	 * @param string subscriptionId
	 * @param string addonId
     * @param {any} options
     * @return {this}
     */
    public find(subscriptionId, addonId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/addons/" + encodeURI(addonId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Save the updated addon attributes.

     * @param {any} options
     * @return {this}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";

        var data = {
			'plan_id': this.getPlanId(), 
			'type': this.getType(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'quantity': this.getQuantity(), 
			'metadata': this.getMetadata(), 
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null, 
			'increment_quantity_by': (options['increment_quantity_by']) ? options['increment_quantity_by'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.put(path, data, options, callback);
            });
    }
    /**
     * Delete an addon applied to a subscription.

     * @param {any} options
     * @return {bool}
     */
    public delete(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";

        var data = {
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
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
export = Addon;
