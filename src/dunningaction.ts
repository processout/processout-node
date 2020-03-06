// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class DunningAction {
    private client: ProcessOut = null;

    /**
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @type {string}
     */
    private action: string = null;

    /**
     * Delay in days that should be waited before executing the next dunning action
     * @type {number}
     */
    private delayInDays: number = null;

    /**
     * DunningAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: DunningAction) {
        if (typeof client === 'undefined')
            throw new Error("The DunningAction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDunningAction()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "DunningAction";
    }

    /**
     * Get Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @return {string}
     */
    public getAction(): string {
        return this.action;
    }

    /**
     * Set Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @param {string} val
     * @return {DunningAction}
     */
    public setAction(val: string): DunningAction {
        this.action = val;
        return this;
    }

    /**
     * Get DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @return {number}
     */
    public getDelayInDays(): number {
        return this.delayInDays;
    }

    /**
     * Set DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @param {number} val
     * @return {DunningAction}
     */
    public setDelayInDays(val: number): DunningAction {
        this.delayInDays = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {DunningAction}
     */
    public fillWithData(data: any): DunningAction {
        if (data["action"])
            this.setAction(data["action"]);
        if (data["delay_in_days"])
            this.setDelayInDays(data["delay_in_days"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "action": this.getAction(),
            "delay_in_days": this.getDelayInDays(),
        };
    }

    
}
export = DunningAction;
