// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationAmount {
    private client: ProcessOut = null;

    /**
     * Chosen precision for the amount fields in the export.
     * @type {string}
     */
    private precision: string = null;

    /**
     * Chosen separator for the amount fields in the export.
     * @type {string}
     */
    private separator: string = null;

    /**
     * ExportLayoutConfigurationAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationAmount) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationAmount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationAmount()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationAmount";
    }

    /**
     * Get Precision
     * Chosen precision for the amount fields in the export.
     * @return {string}
     */
    public getPrecision(): string {
        return this.precision;
    }

    /**
     * Set Precision
     * Chosen precision for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    public setPrecision(val: string): ExportLayoutConfigurationAmount {
        this.precision = val;
        return this;
    }

    /**
     * Get Separator
     * Chosen separator for the amount fields in the export.
     * @return {string}
     */
    public getSeparator(): string {
        return this.separator;
    }

    /**
     * Set Separator
     * Chosen separator for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    public setSeparator(val: string): ExportLayoutConfigurationAmount {
        this.separator = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationAmount}
     */
    public fillWithData(data: any): ExportLayoutConfigurationAmount {
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
export = ExportLayoutConfigurationAmount;
