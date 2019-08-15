// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Discount {
    private client: ProcessOut = null;

    /**
     * ID of the discount
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the discount belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the discount belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Subscription to which the discount belongs
     * @type {p.Subscription}
     */
    private subscription: p.Subscription = null;

    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    private subscriptionId: string = null;

    /**
     * Coupon used to create the discount, if any
     * @type {p.Coupon}
     */
    private coupon: p.Coupon = null;

    /**
     * ID of the coupon used to create the discount, if any
     * @type {string}
     */
    private couponId: string = null;

    /**
     * Name of the discount
     * @type {string}
     */
    private name: string = null;

    /**
     * Amount discounted
     * @type {string}
     */
    private amount: string = null;

    /**
     * Percentage discounted
     * @type {number}
     */
    private percent: number = null;

    /**
     * Date at which the discount will expire
     * @type {string}
     */
    private expiresAt: string = null;

    /**
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the discount is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the discount was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Discount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Discount) {
        if (typeof client === 'undefined')
            throw new Error("The Discount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDiscount()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Discount";
    }

    /**
     * Get Id
     * ID of the discount
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the discount
     * @param {string} val
     * @return {Discount}
     */
    public setId(val: string): Discount {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the discount belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the discount belongs
     * @param {p.Project} val
     * @return {Discount}
     */
    public setProject(val: p.Project): Discount {
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
     * ID of the project to which the discount belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the discount belongs
     * @param {string} val
     * @return {Discount}
     */
    public setProjectId(val: string): Discount {
        this.projectId = val;
        return this;
    }

    /**
     * Get Subscription
     * Subscription to which the discount belongs
     * @return {p.Subscription}
     */
    public getSubscription(): p.Subscription {
        return this.subscription;
    }

    /**
     * Set Subscription
     * Subscription to which the discount belongs
     * @param {p.Subscription} val
     * @return {Discount}
     */
    public setSubscription(val: p.Subscription): Discount {
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
     * @return {Discount}
     */
    public setSubscriptionId(val: string): Discount {
        this.subscriptionId = val;
        return this;
    }

    /**
     * Get Coupon
     * Coupon used to create the discount, if any
     * @return {p.Coupon}
     */
    public getCoupon(): p.Coupon {
        return this.coupon;
    }

    /**
     * Set Coupon
     * Coupon used to create the discount, if any
     * @param {p.Coupon} val
     * @return {Discount}
     */
    public setCoupon(val: p.Coupon): Discount {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCoupon().getProcessOutObjectClass())
            this.coupon = val;
        else {
            var obj = this.client.newCoupon();
            obj.fillWithData(val);
            this.coupon = obj;
        }
        return this;
    }

    /**
     * Get CouponId
     * ID of the coupon used to create the discount, if any
     * @return {string}
     */
    public getCouponId(): string {
        return this.couponId;
    }

    /**
     * Set CouponId
     * ID of the coupon used to create the discount, if any
     * @param {string} val
     * @return {Discount}
     */
    public setCouponId(val: string): Discount {
        this.couponId = val;
        return this;
    }

    /**
     * Get Name
     * Name of the discount
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the discount
     * @param {string} val
     * @return {Discount}
     */
    public setName(val: string): Discount {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Amount discounted
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount discounted
     * @param {string} val
     * @return {Discount}
     */
    public setAmount(val: string): Discount {
        this.amount = val;
        return this;
    }

    /**
     * Get Percent
     * Percentage discounted
     * @return {number}
     */
    public getPercent(): number {
        return this.percent;
    }

    /**
     * Set Percent
     * Percentage discounted
     * @param {number} val
     * @return {Discount}
     */
    public setPercent(val: number): Discount {
        this.percent = val;
        return this;
    }

    /**
     * Get ExpiresAt
     * Date at which the discount will expire
     * @return {string}
     */
    public getExpiresAt(): string {
        return this.expiresAt;
    }

    /**
     * Set ExpiresAt
     * Date at which the discount will expire
     * @param {string} val
     * @return {Discount}
     */
    public setExpiresAt(val: string): Discount {
        this.expiresAt = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Discount}
     */
    public setMetadata(val: any): Discount {
        this.metadata = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the discount is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the discount is in sandbox environment
     * @param {boolean} val
     * @return {Discount}
     */
    public setSandbox(val: boolean): Discount {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the discount was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the discount was created
     * @param {string} val
     * @return {Discount}
     */
    public setCreatedAt(val: string): Discount {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Discount}
     */
    public fillWithData(data: any): Discount {
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
        if (data["coupon"])
            this.setCoupon(data["coupon"]);
        if (data["coupon_id"])
            this.setCouponId(data["coupon_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["percent"])
            this.setPercent(data["percent"]);
        if (data["expires_at"])
            this.setExpiresAt(data["expires_at"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Get the discounts applied to the subscription.
	 * @param string subscriptionId
     * @param {any} options
     * @return {array}
     */
    public fetchSubscriptionDiscounts(subscriptionId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts";

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
                var body = response.body['discounts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newDiscount();
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
     * Create a new discount for the given subscription ID.

     * @param {any} options
     * @return {this}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/discounts";

        var data = {
			'coupon_id': this.getCouponId(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'expires_at': this.getExpiresAt(), 
			'metadata': this.getMetadata()
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
                body = body['discount'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Find a subscription's discount by its ID.
	 * @param string subscriptionId
	 * @param string discountId
     * @param {any} options
     * @return {this}
     */
    public find(subscriptionId, discountId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts/" + encodeURI(discountId) + "";

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
                body = body['discount'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Delete a discount applied to a subscription.

     * @param {any} options
     * @return {bool}
     */
    public delete(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/discounts/" + encodeURI(this.getId()) + "";

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
export = Discount;
