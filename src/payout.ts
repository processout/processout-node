// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Payout {
    private client: ProcessOut = null;

    /**
     * ID of the payout
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the payout belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the payout belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Status of the payout
     * @type {string}
     */
    private status: string = null;

    /**
     * Amount of the payout
     * @type {string}
     */
    private amount: string = null;

    /**
     * Currency of the payout
     * @type {string}
     */
    private currency: string = null;

    /**
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Name of the bank to which the payout was issued, if available
     * @type {string}
     */
    private bankName: string = null;

    /**
     * Summary of the bank to which the payout was issued, if available
     * @type {string}
     */
    private bankSummary: string = null;

    /**
     * Number of completed transactions linked to the payout, if available
     * @type {number}
     */
    private salesTransactions: number = null;

    /**
     * Volume of completed transactions linked to the payout, if available
     * @type {string}
     */
    private salesVolume: string = null;

    /**
     * Number of refunded transactions linked to the payout, if available
     * @type {number}
     */
    private refundsTransactions: number = null;

    /**
     * Volume of refunded transactions linked to the payout, if available
     * @type {string}
     */
    private refundsVolume: string = null;

    /**
     * Number of chargebacked transactions linked to the payout, if available
     * @type {number}
     */
    private chargebacksTransactions: number = null;

    /**
     * Volume of chargebacked transactions linked to the payout, if available
     * @type {string}
     */
    private chargebacksVolume: string = null;

    /**
     * Fees linked to the payout, if available
     * @type {string}
     */
    private fees: string = null;

    /**
     * Adjustments linked to the payout, if available
     * @type {string}
     */
    private adjustments: string = null;

    /**
     * Reserve kept on the payout, if available
     * @type {string}
     */
    private reserve: string = null;

    /**
     * Date at which the payout was settled
     * @type {string}
     */
    private settledAt: string = null;

    /**
     * Date at which the payout was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Payout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Payout) {
        if (typeof client === 'undefined')
            throw new Error("The Payout object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayout()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Payout";
    }

    /**
     * Get Id
     * ID of the payout
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the payout
     * @param {string} val
     * @return {Payout}
     */
    public setId(val: string): Payout {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the payout belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the payout belongs
     * @param {p.Project} val
     * @return {Payout}
     */
    public setProject(val: p.Project): Payout {
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
     * ID of the project to which the payout belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the payout belongs
     * @param {string} val
     * @return {Payout}
     */
    public setProjectId(val: string): Payout {
        this.projectId = val;
        return this;
    }

    /**
     * Get Status
     * Status of the payout
     * @return {string}
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Set Status
     * Status of the payout
     * @param {string} val
     * @return {Payout}
     */
    public setStatus(val: string): Payout {
        this.status = val;
        return this;
    }

    /**
     * Get Amount
     * Amount of the payout
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the payout
     * @param {string} val
     * @return {Payout}
     */
    public setAmount(val: string): Payout {
        this.amount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the payout
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the payout
     * @param {string} val
     * @return {Payout}
     */
    public setCurrency(val: string): Payout {
        this.currency = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Payout}
     */
    public setMetadata(val: any): Payout {
        this.metadata = val;
        return this;
    }

    /**
     * Get BankName
     * Name of the bank to which the payout was issued, if available
     * @return {string}
     */
    public getBankName(): string {
        return this.bankName;
    }

    /**
     * Set BankName
     * Name of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    public setBankName(val: string): Payout {
        this.bankName = val;
        return this;
    }

    /**
     * Get BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @return {string}
     */
    public getBankSummary(): string {
        return this.bankSummary;
    }

    /**
     * Set BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    public setBankSummary(val: string): Payout {
        this.bankSummary = val;
        return this;
    }

    /**
     * Get SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @return {number}
     */
    public getSalesTransactions(): number {
        return this.salesTransactions;
    }

    /**
     * Set SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    public setSalesTransactions(val: number): Payout {
        this.salesTransactions = val;
        return this;
    }

    /**
     * Get SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @return {string}
     */
    public getSalesVolume(): string {
        return this.salesVolume;
    }

    /**
     * Set SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setSalesVolume(val: string): Payout {
        this.salesVolume = val;
        return this;
    }

    /**
     * Get RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @return {number}
     */
    public getRefundsTransactions(): number {
        return this.refundsTransactions;
    }

    /**
     * Set RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    public setRefundsTransactions(val: number): Payout {
        this.refundsTransactions = val;
        return this;
    }

    /**
     * Get RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @return {string}
     */
    public getRefundsVolume(): string {
        return this.refundsVolume;
    }

    /**
     * Set RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setRefundsVolume(val: string): Payout {
        this.refundsVolume = val;
        return this;
    }

    /**
     * Get ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @return {number}
     */
    public getChargebacksTransactions(): number {
        return this.chargebacksTransactions;
    }

    /**
     * Set ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    public setChargebacksTransactions(val: number): Payout {
        this.chargebacksTransactions = val;
        return this;
    }

    /**
     * Get ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @return {string}
     */
    public getChargebacksVolume(): string {
        return this.chargebacksVolume;
    }

    /**
     * Set ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setChargebacksVolume(val: string): Payout {
        this.chargebacksVolume = val;
        return this;
    }

    /**
     * Get Fees
     * Fees linked to the payout, if available
     * @return {string}
     */
    public getFees(): string {
        return this.fees;
    }

    /**
     * Set Fees
     * Fees linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setFees(val: string): Payout {
        this.fees = val;
        return this;
    }

    /**
     * Get Adjustments
     * Adjustments linked to the payout, if available
     * @return {string}
     */
    public getAdjustments(): string {
        return this.adjustments;
    }

    /**
     * Set Adjustments
     * Adjustments linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setAdjustments(val: string): Payout {
        this.adjustments = val;
        return this;
    }

    /**
     * Get Reserve
     * Reserve kept on the payout, if available
     * @return {string}
     */
    public getReserve(): string {
        return this.reserve;
    }

    /**
     * Set Reserve
     * Reserve kept on the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    public setReserve(val: string): Payout {
        this.reserve = val;
        return this;
    }

    /**
     * Get SettledAt
     * Date at which the payout was settled
     * @return {string}
     */
    public getSettledAt(): string {
        return this.settledAt;
    }

    /**
     * Set SettledAt
     * Date at which the payout was settled
     * @param {string} val
     * @return {Payout}
     */
    public setSettledAt(val: string): Payout {
        this.settledAt = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the payout was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the payout was created
     * @param {string} val
     * @return {Payout}
     */
    public setCreatedAt(val: string): Payout {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Payout}
     */
    public fillWithData(data: any): Payout {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["bank_summary"])
            this.setBankSummary(data["bank_summary"]);
        if (data["sales_transactions"])
            this.setSalesTransactions(data["sales_transactions"]);
        if (data["sales_volume"])
            this.setSalesVolume(data["sales_volume"]);
        if (data["refunds_transactions"])
            this.setRefundsTransactions(data["refunds_transactions"]);
        if (data["refunds_volume"])
            this.setRefundsVolume(data["refunds_volume"]);
        if (data["chargebacks_transactions"])
            this.setChargebacksTransactions(data["chargebacks_transactions"]);
        if (data["chargebacks_volume"])
            this.setChargebacksVolume(data["chargebacks_volume"]);
        if (data["fees"])
            this.setFees(data["fees"]);
        if (data["adjustments"])
            this.setAdjustments(data["adjustments"]);
        if (data["reserve"])
            this.setReserve(data["reserve"]);
        if (data["settled_at"])
            this.setSettledAt(data["settled_at"]);
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
            "status": this.getStatus(),
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "metadata": this.getMetadata(),
            "bank_name": this.getBankName(),
            "bank_summary": this.getBankSummary(),
            "sales_transactions": this.getSalesTransactions(),
            "sales_volume": this.getSalesVolume(),
            "refunds_transactions": this.getRefundsTransactions(),
            "refunds_volume": this.getRefundsVolume(),
            "chargebacks_transactions": this.getChargebacksTransactions(),
            "chargebacks_volume": this.getChargebacksVolume(),
            "fees": this.getFees(),
            "adjustments": this.getAdjustments(),
            "reserve": this.getReserve(),
            "settled_at": this.getSettledAt(),
            "created_at": this.getCreatedAt(),
        };
    }

    /**
     * Get all the items linked to the payout.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchItems(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/payouts/" + encodeURI(this.getId()) + "/items";

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
                var body = respBody['items'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newPayoutItem();
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
     * Get all the payouts.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/payouts";

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
                var body = respBody['payouts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newPayout();
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
     * Find a payout by its ID.
	 * @param string payoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(payoutId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/payouts/" + encodeURI(payoutId) + "";

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
                body = body['payout'];
                        
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
     * Delete the payout along with its payout items
	 * @param string payoutId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(payoutId: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/payouts/" + encodeURI(payoutId) + "";

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
export = Payout;
