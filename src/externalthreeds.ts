// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExternalThreeDS {
    private client: ProcessOut = null;

    /**
     * ThreeDS v1 ID
     * @type {string}
     */
    private xid: string = null;

    /**
     * Transaction status
     * @type {string}
     */
    private transStatus: string = null;

    /**
     * ECI
     * @type {string}
     */
    private eci: string = null;

    /**
     * Authentication value
     * @type {string}
     */
    private cavv: string = null;

    /**
     * DS Transaction ID
     * @type {string}
     */
    private dsTransId: string = null;

    /**
     * ThreeDS Message version
     * @type {string}
     */
    private version: string = null;

    /**
     * Authentication flow: one of `frictionless` or 'challenge`
     * @type {string}
     */
    private authenticationFlow: string = null;

    /**
     * ExternalThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExternalThreeDS) {
        if (typeof client === 'undefined')
            throw new Error("The ExternalThreeDS object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExternalThreeDS()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExternalThreeDS";
    }

    /**
     * Get Xid
     * ThreeDS v1 ID
     * @return {string}
     */
    public getXid(): string {
        return this.xid;
    }

    /**
     * Set Xid
     * ThreeDS v1 ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setXid(val: string): ExternalThreeDS {
        this.xid = val;
        return this;
    }

    /**
     * Get TransStatus
     * Transaction status
     * @return {string}
     */
    public getTransStatus(): string {
        return this.transStatus;
    }

    /**
     * Set TransStatus
     * Transaction status
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setTransStatus(val: string): ExternalThreeDS {
        this.transStatus = val;
        return this;
    }

    /**
     * Get Eci
     * ECI
     * @return {string}
     */
    public getEci(): string {
        return this.eci;
    }

    /**
     * Set Eci
     * ECI
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setEci(val: string): ExternalThreeDS {
        this.eci = val;
        return this;
    }

    /**
     * Get Cavv
     * Authentication value
     * @return {string}
     */
    public getCavv(): string {
        return this.cavv;
    }

    /**
     * Set Cavv
     * Authentication value
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setCavv(val: string): ExternalThreeDS {
        this.cavv = val;
        return this;
    }

    /**
     * Get DsTransId
     * DS Transaction ID
     * @return {string}
     */
    public getDsTransId(): string {
        return this.dsTransId;
    }

    /**
     * Set DsTransId
     * DS Transaction ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setDsTransId(val: string): ExternalThreeDS {
        this.dsTransId = val;
        return this;
    }

    /**
     * Get Version
     * ThreeDS Message version
     * @return {string}
     */
    public getVersion(): string {
        return this.version;
    }

    /**
     * Set Version
     * ThreeDS Message version
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setVersion(val: string): ExternalThreeDS {
        this.version = val;
        return this;
    }

    /**
     * Get AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @return {string}
     */
    public getAuthenticationFlow(): string {
        return this.authenticationFlow;
    }

    /**
     * Set AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    public setAuthenticationFlow(val: string): ExternalThreeDS {
        this.authenticationFlow = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExternalThreeDS}
     */
    public fillWithData(data: any): ExternalThreeDS {
        if (data["xid"])
            this.setXid(data["xid"]);
        if (data["trans_status"])
            this.setTransStatus(data["trans_status"]);
        if (data["eci"])
            this.setEci(data["eci"]);
        if (data["cavv"])
            this.setCavv(data["cavv"]);
        if (data["ds_trans_id"])
            this.setDsTransId(data["ds_trans_id"]);
        if (data["version"])
            this.setVersion(data["version"]);
        if (data["authentication_flow"])
            this.setAuthenticationFlow(data["authentication_flow"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "xid": this.getXid(),
            "trans_status": this.getTransStatus(),
            "eci": this.getEci(),
            "cavv": this.getCavv(),
            "ds_trans_id": this.getDsTransId(),
            "version": this.getVersion(),
            "authentication_flow": this.getAuthenticationFlow(),
        };
    }

    
}
export = ExternalThreeDS;
