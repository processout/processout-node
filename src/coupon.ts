// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Coupon {
    private client: ProcessOut = null;

    /**
     * ID of the coupon
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the coupon belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the coupon belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Amount to be removed from the subscription price
     * @type {string}
     */
    private amountOff: string = null;

    /**
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @type {number}
     */
    private percentOff: number = null;

    /**
     * Currency of the coupon amount_off
     * @type {string}
     */
    private currency: string = null;

    /**
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @type {number}
     */
    private iterationCount: number = null;

    /**
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @type {number}
     */
    private maxRedemptions: number = null;

    /**
     * Date at which the coupon will expire
     * @type {string}
     */
    private expiresAt: string = null;

    /**
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Number of times the coupon was already redeemed
     * @type {number}
     */
    private redeemedNumber: number = null;

    /**
     * True if the coupon was created in the sandbox environment, false otherwise
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the coupon was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Coupon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Coupon) {
        if (typeof client === 'undefined')
            throw new Error("The Coupon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCoupon()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Coupon";
    }

    /**
     * Get Id
     * ID of the coupon
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the coupon
     * @param {string} val
     * @return {Coupon}
     */
    public setId(val: string): Coupon {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the coupon belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the coupon belongs
     * @param {p.Project} val
     * @return {Coupon}
     */
    public setProject(val: p.Project): Coupon {
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
     * ID of the project to which the coupon belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the coupon belongs
     * @param {string} val
     * @return {Coupon}
     */
    public setProjectId(val: string): Coupon {
        this.projectId = val;
        return this;
    }

    /**
     * Get AmountOff
     * Amount to be removed from the subscription price
     * @return {string}
     */
    public getAmountOff(): string {
        return this.amountOff;
    }

    /**
     * Set AmountOff
     * Amount to be removed from the subscription price
     * @param {string} val
     * @return {Coupon}
     */
    public setAmountOff(val: string): Coupon {
        this.amountOff = val;
        return this;
    }

    /**
     * Get PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @return {number}
     */
    public getPercentOff(): number {
        return this.percentOff;
    }

    /**
     * Set PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @param {number} val
     * @return {Coupon}
     */
    public setPercentOff(val: number): Coupon {
        this.percentOff = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the coupon amount_off
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the coupon amount_off
     * @param {string} val
     * @return {Coupon}
     */
    public setCurrency(val: string): Coupon {
        this.currency = val;
        return this;
    }

    /**
     * Get IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @return {number}
     */
    public getIterationCount(): number {
        return this.iterationCount;
    }

    /**
     * Set IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @param {number} val
     * @return {Coupon}
     */
    public setIterationCount(val: number): Coupon {
        this.iterationCount = val;
        return this;
    }

    /**
     * Get MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @return {number}
     */
    public getMaxRedemptions(): number {
        return this.maxRedemptions;
    }

    /**
     * Set MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @param {number} val
     * @return {Coupon}
     */
    public setMaxRedemptions(val: number): Coupon {
        this.maxRedemptions = val;
        return this;
    }

    /**
     * Get ExpiresAt
     * Date at which the coupon will expire
     * @return {string}
     */
    public getExpiresAt(): string {
        return this.expiresAt;
    }

    /**
     * Set ExpiresAt
     * Date at which the coupon will expire
     * @param {string} val
     * @return {Coupon}
     */
    public setExpiresAt(val: string): Coupon {
        this.expiresAt = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Coupon}
     */
    public setMetadata(val: any): Coupon {
        this.metadata = val;
        return this;
    }

    /**
     * Get RedeemedNumber
     * Number of times the coupon was already redeemed
     * @return {number}
     */
    public getRedeemedNumber(): number {
        return this.redeemedNumber;
    }

    /**
     * Set RedeemedNumber
     * Number of times the coupon was already redeemed
     * @param {number} val
     * @return {Coupon}
     */
    public setRedeemedNumber(val: number): Coupon {
        this.redeemedNumber = val;
        return this;
    }

    /**
     * Get Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @param {boolean} val
     * @return {Coupon}
     */
    public setSandbox(val: boolean): Coupon {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the coupon was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the coupon was created
     * @param {string} val
     * @return {Coupon}
     */
    public setCreatedAt(val: string): Coupon {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Coupon}
     */
    public fillWithData(data: any): Coupon {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["amount_off"])
            this.setAmountOff(data["amount_off"]);
        if (data["percent_off"])
            this.setPercentOff(data["percent_off"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["iteration_count"])
            this.setIterationCount(data["iteration_count"]);
        if (data["max_redemptions"])
            this.setMaxRedemptions(data["max_redemptions"]);
        if (data["expires_at"])
            this.setExpiresAt(data["expires_at"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["redeemed_number"])
            this.setRedeemedNumber(data["redeemed_number"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Get all the coupons.
     * 
     * @param {any} options
     * @return {array}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/coupons";

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
                var body = response.body['coupons'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newCoupon();
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
     * Create a new coupon.
     * 
     * @param {any} options
     * @return {this}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/coupons";

        var data = {
			'id': this.getId(), 
			'amount_off': this.getAmountOff(), 
			'percent_off': this.getPercentOff(), 
			'currency': this.getCurrency(), 
			'iteration_count': this.getIterationCount(), 
			'max_redemptions': this.getMaxRedemptions(), 
			'expires_at': this.getExpiresAt(), 
			'metadata': this.getMetadata()
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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Find a coupon by its ID.
	 * @param string couponId
     * @param {any} options
     * @return {this}
     */
    public find(couponId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/coupons/" + encodeURI(couponId) + "";

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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Save the updated coupon attributes.

     * @param {any} options
     * @return {this}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/coupons/" + encodeURI(this.getId()) + "";

        var data = {
			'metadata': this.getMetadata()
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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.put(path, data, options, callback);
            });
    }
    /**
     * Delete the coupon.

     * @param {any} options
     * @return {bool}
     */
    public delete(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/coupons/" + encodeURI(this.getId()) + "";

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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.delete(path, data, options, callback);
            });
    }
    
}
export = Coupon;
