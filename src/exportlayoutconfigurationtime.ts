// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationTime {
    private client: ProcessOut = null;

    /**
     * Format of the time fields in the export.
     * @type {string}
     */
    private format: string = null;

    /**
     * ExportLayoutConfigurationTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationTime) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationTime object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationTime()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationTime";
    }

    /**
     * Get Format
     * Format of the time fields in the export.
     * @return {string}
     */
    public getFormat(): string {
        return this.format;
    }

    /**
     * Set Format
     * Format of the time fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationTime}
     */
    public setFormat(val: string): ExportLayoutConfigurationTime {
        this.format = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationTime}
     */
    public fillWithData(data: any): ExportLayoutConfigurationTime {
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
export = ExportLayoutConfigurationTime;
