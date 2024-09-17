// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationConfigurationOptionsTime {
    private client: ProcessOut = null;

    /**
     * Format options for configuration.
     * @type {any}
     */
    private format: any = null;

    /**
     * ExportLayoutConfigurationConfigurationOptionsTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationConfigurationOptionsTime) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationConfigurationOptionsTime object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationConfigurationOptionsTime()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationConfigurationOptionsTime";
    }

    /**
     * Get Format
     * Format options for configuration.
     * @return {any}
     */
    public getFormat(): any {
        return this.format;
    }

    /**
     * Set Format
     * Format options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    public setFormat(val: any): ExportLayoutConfigurationConfigurationOptionsTime {
        this.format = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    public fillWithData(data: any): ExportLayoutConfigurationConfigurationOptionsTime {
        if (data["format"])
            this.setFormat(data["format"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "format": this.getFormat(),
        };
    }

    
}
export = ExportLayoutConfigurationConfigurationOptionsTime;
