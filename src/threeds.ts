// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ThreeDS {
    private client: ProcessOut = null;

    /**
     * Version of the 3DS
     * @type {string}
     */
    private version: string = null;

    /**
     * Current status of the authentication
     * @type {string}
     */
    private status: string = null;

    /**
     * True if a fingerprint has occured
     * @type {boolean}
     */
    private fingerprinted: boolean = null;

    /**
     * True if a challenge has occured
     * @type {boolean}
     */
    private challenged: boolean = null;

    /**
     * Ares transaction status
     * @type {string}
     */
    private aresTransStatus: string = null;

    /**
     * Cres transaction status
     * @type {string}
     */
    private cresTransStatus: string = null;

    /**
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @type {string}
     */
    private dsTransId: string = null;

    /**
     * Indicates whether the 3DS fingerprint successfully completed
     * @type {string}
     */
    private fingerprintCompletionIndicator: string = null;

    /**
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @type {string}
     */
    private serverTransId: string = null;

    /**
     * ThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ThreeDS) {
        if (typeof client === 'undefined')
            throw new Error("The ThreeDS object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newThreeDS()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ThreeDS";
    }

    /**
     * Get Version
     * Version of the 3DS
     * @return {string}
     */
    public getVersion(): string {
        return this.version;
    }

    /**
     * Set Version
     * Version of the 3DS
     * @param {string} val
     * @return {ThreeDS}
     */
    public setVersion(val: string): ThreeDS {
        this.version = val;
        return this;
    }

    /**
     * Get Status
     * Current status of the authentication
     * @return {string}
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Set Status
     * Current status of the authentication
     * @param {string} val
     * @return {ThreeDS}
     */
    public setStatus(val: string): ThreeDS {
        this.status = val;
        return this;
    }

    /**
     * Get Fingerprinted
     * True if a fingerprint has occured
     * @return {boolean}
     */
    public getFingerprinted(): boolean {
        return this.fingerprinted;
    }

    /**
     * Set Fingerprinted
     * True if a fingerprint has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    public setFingerprinted(val: boolean): ThreeDS {
        this.fingerprinted = val;
        return this;
    }

    /**
     * Get Challenged
     * True if a challenge has occured
     * @return {boolean}
     */
    public getChallenged(): boolean {
        return this.challenged;
    }

    /**
     * Set Challenged
     * True if a challenge has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    public setChallenged(val: boolean): ThreeDS {
        this.challenged = val;
        return this;
    }

    /**
     * Get AresTransStatus
     * Ares transaction status
     * @return {string}
     */
    public getAresTransStatus(): string {
        return this.aresTransStatus;
    }

    /**
     * Set AresTransStatus
     * Ares transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    public setAresTransStatus(val: string): ThreeDS {
        this.aresTransStatus = val;
        return this;
    }

    /**
     * Get CresTransStatus
     * Cres transaction status
     * @return {string}
     */
    public getCresTransStatus(): string {
        return this.cresTransStatus;
    }

    /**
     * Set CresTransStatus
     * Cres transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    public setCresTransStatus(val: string): ThreeDS {
        this.cresTransStatus = val;
        return this;
    }

    /**
     * Get DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @return {string}
     */
    public getDsTransId(): string {
        return this.dsTransId;
    }

    /**
     * Set DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    public setDsTransId(val: string): ThreeDS {
        this.dsTransId = val;
        return this;
    }

    /**
     * Get FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @return {string}
     */
    public getFingerprintCompletionIndicator(): string {
        return this.fingerprintCompletionIndicator;
    }

    /**
     * Set FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @param {string} val
     * @return {ThreeDS}
     */
    public setFingerprintCompletionIndicator(val: string): ThreeDS {
        this.fingerprintCompletionIndicator = val;
        return this;
    }

    /**
     * Get ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @return {string}
     */
    public getServerTransId(): string {
        return this.serverTransId;
    }

    /**
     * Set ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    public setServerTransId(val: string): ThreeDS {
        this.serverTransId = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ThreeDS}
     */
    public fillWithData(data: any): ThreeDS {
        if (data["version"])
            this.setVersion(data["version"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["fingerprinted"])
            this.setFingerprinted(data["fingerprinted"]);
        if (data["challenged"])
            this.setChallenged(data["challenged"]);
        if (data["ares_trans_status"])
            this.setAresTransStatus(data["ares_trans_status"]);
        if (data["cres_trans_status"])
            this.setCresTransStatus(data["cres_trans_status"]);
        if (data["ds_trans_id"])
            this.setDsTransId(data["ds_trans_id"]);
        if (data["fingerprint_completion_indicator"])
            this.setFingerprintCompletionIndicator(data["fingerprint_completion_indicator"]);
        if (data["server_trans_id"])
            this.setServerTransId(data["server_trans_id"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "version": this.getVersion(),
            "status": this.getStatus(),
            "fingerprinted": this.getFingerprinted(),
            "challenged": this.getChallenged(),
            "ares_trans_status": this.getAresTransStatus(),
            "cres_trans_status": this.getCresTransStatus(),
            "ds_trans_id": this.getDsTransId(),
            "fingerprint_completion_indicator": this.getFingerprintCompletionIndicator(),
            "server_trans_id": this.getServerTransId(),
        };
    }

    
}
export = ThreeDS;
