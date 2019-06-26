// The content of this file was automatically generated

import Promise = require("promise");
import ProcessOut = require("./processout");
import Response = require("./networking/response");
import Request = require("./networking/request");

class PaymentDataThreeDSAuthentication {
    private client: ProcessOut = null;

    /**
     * Authentication XID
     * @type {string}
     */
    private xID: string = null;

    /**
     * PaymentDataThreeDSAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataThreeDSAuthentication) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSAuthentication()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PaymentDataThreeDSAuthentication";
    }

    /**
     * Get XID
     * Authentication XID
     * @return {string}
     */
    public getXID(): string {
        return this.xID;
    }

    /**
     * Set XID
     * Authentication XID
     * @param {string} val
     * @return {PaymentDataThreeDSAuthentication}
     */
    public setXID(val: string): PaymentDataThreeDSAuthentication {
        this.xID = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSAuthentication}
     */
    public fillWithData(data: any): PaymentDataThreeDSAuthentication {
        if (data["XID"])
            this.setXID(data["XID"]);
        return this;
    }

    
}
export = PaymentDataThreeDSAuthentication;
