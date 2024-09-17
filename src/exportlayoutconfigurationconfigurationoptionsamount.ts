// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationConfigurationOptionsAmount {
    private client: ProcessOut = null;

    /**
     * Precision options for configuration.
     * @type {any}
     */
    private precision: any = null;

    /**
     * Separator options for configuration.
     * @type {any}
     */
    private separator: any = null;

    /**
     * ExportLayoutConfigurationConfigurationOptionsAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationConfigurationOptionsAmount) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationConfigurationOptionsAmount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationConfigurationOptionsAmount()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationConfigurationOptionsAmount";
    }

    /**
     * Get Precision
     * Precision options for configuration.
     * @return {any}
     */
    public getPrecision(): any {
        return this.precision;
    }

    /**
     * Set Precision
     * Precision options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    public setPrecision(val: any): ExportLayoutConfigurationConfigurationOptionsAmount {
        this.precision = val;
        return this;
    }

    /**
     * Get Separator
     * Separator options for configuration.
     * @return {any}
     */
    public getSeparator(): any {
        return this.separator;
    }

    /**
     * Set Separator
     * Separator options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    public setSeparator(val: any): ExportLayoutConfigurationConfigurationOptionsAmount {
        this.separator = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    public fillWithData(data: any): ExportLayoutConfigurationConfigurationOptionsAmount {
        if (data["precision"])
            this.setPrecision(data["precision"]);
        if (data["separator"])
            this.setSeparator(data["separator"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "precision": this.getPrecision(),
            "separator": this.getSeparator(),
        };
    }

    
}
export = ExportLayoutConfigurationConfigurationOptionsAmount;
