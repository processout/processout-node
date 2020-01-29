// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Refund {
    private client: ProcessOut = null;

    /**
     * ID of the refund
     * @type {string}
     */
    private id: string = null;

    /**
     * Transaction to which the refund is applied
     * @type {p.Transaction}
     */
    private transaction: p.Transaction = null;

    /**
     * ID of the transaction to which the refund is applied
     * @type {string}
     */
    private transactionId: string = null;

    /**
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @type {string}
     */
    private amount: string = null;

    /**
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @type {string}
     */
    private reason: string = null;

    /**
     * Custom details regarding the refund
     * @type {string}
     */
    private information: string = null;

    /**
     * True if the refund was asynchronously failed, false otherwise
     * @type {boolean}
     */
    private hasFailed: boolean = null;

    /**
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the refund is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the refund was done
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Refund constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Refund) {
        if (typeof client === 'undefined')
            throw new Error("The Refund object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newRefund()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Refund";
    }

    /**
     * Get Id
     * ID of the refund
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the refund
     * @param {string} val
     * @return {Refund}
     */
    public setId(val: string): Refund {
        this.id = val;
        return this;
    }

    /**
     * Get Transaction
     * Transaction to which the refund is applied
     * @return {p.Transaction}
     */
    public getTransaction(): p.Transaction {
        return this.transaction;
    }

    /**
     * Set Transaction
     * Transaction to which the refund is applied
     * @param {p.Transaction} val
     * @return {Refund}
     */
    public setTransaction(val: p.Transaction): Refund {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    }

    /**
     * Get TransactionId
     * ID of the transaction to which the refund is applied
     * @return {string}
     */
    public getTransactionId(): string {
        return this.transactionId;
    }

    /**
     * Set TransactionId
     * ID of the transaction to which the refund is applied
     * @param {string} val
     * @return {Refund}
     */
    public setTransactionId(val: string): Refund {
        this.transactionId = val;
        return this;
    }

    /**
     * Get Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @param {string} val
     * @return {Refund}
     */
    public setAmount(val: string): Refund {
        this.amount = val;
        return this;
    }

    /**
     * Get Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @return {string}
     */
    public getReason(): string {
        return this.reason;
    }

    /**
     * Set Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @param {string} val
     * @return {Refund}
     */
    public setReason(val: string): Refund {
        this.reason = val;
        return this;
    }

    /**
     * Get Information
     * Custom details regarding the refund
     * @return {string}
     */
    public getInformation(): string {
        return this.information;
    }

    /**
     * Set Information
     * Custom details regarding the refund
     * @param {string} val
     * @return {Refund}
     */
    public setInformation(val: string): Refund {
        this.information = val;
        return this;
    }

    /**
     * Get HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @return {boolean}
     */
    public getHasFailed(): boolean {
        return this.hasFailed;
    }

    /**
     * Set HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @param {boolean} val
     * @return {Refund}
     */
    public setHasFailed(val: boolean): Refund {
        this.hasFailed = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Refund}
     */
    public setMetadata(val: any): Refund {
        this.metadata = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the refund is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the refund is in sandbox environment
     * @param {boolean} val
     * @return {Refund}
     */
    public setSandbox(val: boolean): Refund {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the refund was done
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the refund was done
     * @param {string} val
     * @return {Refund}
     */
    public setCreatedAt(val: string): Refund {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Refund}
     */
    public fillWithData(data: any): Refund {
        if (data["id"])
            this.setId(data["id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["reason"])
            this.setReason(data["reason"]);
        if (data["information"])
            this.setInformation(data["information"]);
        if (data["has_failed"])
            this.setHasFailed(data["has_failed"]);
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
            "transaction": this.getTransaction(),
            "transaction_id": this.getTransactionId(),
            "amount": this.getAmount(),
            "reason": this.getReason(),
            "information": this.getInformation(),
            "has_failed": this.getHasFailed(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    }

    /**
     * Get the transaction's refunds.
	 * @param string transactionId
     * @param {any} options
     * @return {array}
     */
    public fetchTransactionRefunds(transactionId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(transactionId) + "/refunds";

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
                var body = response.body['refunds'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newRefund();
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
     * Find a transaction's refund by its ID.
	 * @param string transactionId
	 * @param string refundId
     * @param {any} options
     * @return {this}
     */
    public find(transactionId, refundId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(transactionId) + "/refunds/" + encodeURI(refundId) + "";

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
                body = body['refund'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Create a refund for a transaction.

     * @param {any} options
     * @return {bool}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(this.getTransactionId()) + "/refunds";

        var data = {
			'amount': this.getAmount(), 
			'metadata': this.getMetadata(), 
			'reason': this.getReason(), 
			'information': this.getInformation()
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

            request.post(path, data, options, callback);
            });
    }
    
}
export = Refund;
