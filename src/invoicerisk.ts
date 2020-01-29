// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceRisk {
    private client: ProcessOut = null;

    /**
     * Scoring of the invoice
     * @type {string}
     */
    private score: string = null;

    /**
     * Define whether or not the invoice is legit
     * @type {boolean}
     */
    private isLegit: boolean = null;

    /**
     * InvoiceRisk constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceRisk) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceRisk object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceRisk()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceRisk";
    }

    /**
     * Get Score
     * Scoring of the invoice
     * @return {string}
     */
    public getScore(): string {
        return this.score;
    }

    /**
     * Set Score
     * Scoring of the invoice
     * @param {string} val
     * @return {InvoiceRisk}
     */
    public setScore(val: string): InvoiceRisk {
        this.score = val;
        return this;
    }

    /**
     * Get IsLegit
     * Define whether or not the invoice is legit
     * @return {boolean}
     */
    public getIsLegit(): boolean {
        return this.isLegit;
    }

    /**
     * Set IsLegit
     * Define whether or not the invoice is legit
     * @param {boolean} val
     * @return {InvoiceRisk}
     */
    public setIsLegit(val: boolean): InvoiceRisk {
        this.isLegit = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceRisk}
     */
    public fillWithData(data: any): InvoiceRisk {
        if (data["score"])
            this.setScore(data["score"]);
        if (data["is_legit"])
            this.setIsLegit(data["is_legit"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "score": this.getScore(),
            "is_legit": this.getIsLegit(),
        };
    }

    
}
export = InvoiceRisk;
