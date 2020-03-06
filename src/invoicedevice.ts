// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceDevice {
    private client: ProcessOut = null;

    /**
     * Channel of the device
     * @type {string}
     */
    private channel: string = null;

    /**
     * IP address of the device
     * @type {string}
     */
    private ipAddress: string = null;

    /**
     * InvoiceDevice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceDevice) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDevice object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDevice()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceDevice";
    }

    /**
     * Get Channel
     * Channel of the device
     * @return {string}
     */
    public getChannel(): string {
        return this.channel;
    }

    /**
     * Set Channel
     * Channel of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    public setChannel(val: string): InvoiceDevice {
        this.channel = val;
        return this;
    }

    /**
     * Get IpAddress
     * IP address of the device
     * @return {string}
     */
    public getIpAddress(): string {
        return this.ipAddress;
    }

    /**
     * Set IpAddress
     * IP address of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    public setIpAddress(val: string): InvoiceDevice {
        this.ipAddress = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDevice}
     */
    public fillWithData(data: any): InvoiceDevice {
        if (data["channel"])
            this.setChannel(data["channel"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "channel": this.getChannel(),
            "ip_address": this.getIpAddress(),
        };
    }

    
}
export = InvoiceDevice;
