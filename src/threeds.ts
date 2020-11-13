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
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ThreeDS}
     */
    public fillWithData(data: any): ThreeDS {
        if (data["Version"])
            this.setVersion(data["Version"]);
        if (data["Status"])
            this.setStatus(data["Status"]);
        if (data["fingerprinted"])
            this.setFingerprinted(data["fingerprinted"]);
        if (data["challenged"])
            this.setChallenged(data["challenged"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "Version": this.getVersion(),
            "Status": this.getStatus(),
            "fingerprinted": this.getFingerprinted(),
            "challenged": this.getChallenged(),
        };
    }

    
}
export = ThreeDS;
