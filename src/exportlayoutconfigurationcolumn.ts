// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationColumn {
    private client: ProcessOut = null;

    /**
     * Name of the column. Must match with supported ones for chosen export type.
     * @type {string}
     */
    private name: string = null;

    /**
     * Rename of the chosen column if needed.
     * @type {string}
     */
    private rename: string = null;

    /**
     * ExportLayoutConfigurationColumn constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationColumn) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationColumn object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationColumn()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationColumn";
    }

    /**
     * Get Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    public setName(val: string): ExportLayoutConfigurationColumn {
        this.name = val;
        return this;
    }

    /**
     * Get Rename
     * Rename of the chosen column if needed.
     * @return {string}
     */
    public getRename(): string {
        return this.rename;
    }

    /**
     * Set Rename
     * Rename of the chosen column if needed.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    public setRename(val: string): ExportLayoutConfigurationColumn {
        this.rename = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationColumn}
     */
    public fillWithData(data: any): ExportLayoutConfigurationColumn {
        if (data["name"])
            this.setName(data["name"]);
        if (data["rename"])
            this.setRename(data["rename"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "name": this.getName(),
            "rename": this.getRename(),
        };
    }

    
}
export = ExportLayoutConfigurationColumn;
